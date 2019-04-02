<?php
class PixelgradeCare_Notification {

	public function __construct() {
		$this->addHooks();
	}

	public function addHooks() {
		if ( ! $this->shouldShow() ) {
			return;
		}
		add_action( 'admin_notices', array( $this, 'outputMarkup' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'outputCSS' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'outputJS' ) );

//		add_action( 'admin_menu', array( $this, 'registerPixcareInstall_page' ) );
	}

	public function shouldShow() {
		global $pagenow;
		// If Pixelgrade Care is already installed and activated, nothing to do.
		if ( class_exists( 'PixelgradeCare' ) ) {
			return false;
		}

		// We want to show it only on the themes.php page.
		if ( $pagenow !== 'themes.php' ) {
			return false;
		}

		// We also don't want to show it when viewing the TGMPA results or tables.
		if ( ! empty( $_GET['tgmpa-nonce'] ) ) {
			return false;
		}

		return true;
	}

	public function outputMarkup() {
		$button_text = esc_html__( 'Install Pixelgrade Care&reg;', '__theme_txtd' );
		// Pixelgrade Care plugin installed, but not activated.
		if ( ! class_exists( 'PixelgradeCare' ) && file_exists( WP_PLUGIN_DIR . '/pixelgrade-care/pixelgrade-care.php' ) ) {
			$button_text = esc_html__( 'Activate Pixelgrade Care&reg;', '__theme_txtd' );
		}

		?>
		<div class="pxg-notice notice is-dismissible">
			<ul class="pxg-wizard">
				<li class="pxg-wizard__step pxg-wizard__step--done">
					<span class="pxg-wizard__label"><?php esc_html_e( 'Theme', '__theme_txtd' ); ?></span>
					<span class="pxg-wizard__progress"><b></b></span>
				</li>
				<li class="pxg-wizard__step pxg-wizard__step--current">
					<span class="pxg-wizard__label"><?php esc_html_e( 'Pixelgrade Care&reg;', '__theme_txtd' ); ?></span>
					<span class="pxg-wizard__progress"><b></b></span>
				</li>
				<li class="pxg-wizard__step">
					<span class="pxg-wizard__label"><?php esc_html_e( 'Site setup', '__theme_txtd' ); ?></span>
					<span class="pxg-wizard__progress"><b></b></span>
				</li>
				<li class="pxg-wizard__step">
					<span class="pxg-wizard__label"><?php esc_html_e( 'Ready!', '__theme_txtd' ); ?></span>
					<span class="pxg-wizard__progress"><b></b></span>
				</li>
			</ul>
			<div class="pxg-notice__wrap">
				<div class="pxg-notice__media">
					<?php
					$theme = wp_get_theme();
					$parent = $theme->parent();
					if ( $parent ) {
						$theme = $parent;
					}
					$screenshot = $theme->get_screenshot();
					if ( $screenshot ) { ?>
						<img src="<?php echo $screenshot; ?>">
					<?php } ?>
				</div>
				<div class="pxg-notice__body">
					<h1>Thanks for installing <?php echo $theme->get( 'Name' ); ?>, you're awesome!<br>Let's make an experience out of it.</h1>
					<p>We've prepared a special onboarding setup that helps you get started and configure your upcoming website in style. Let's make it shine!</p>
					<ul>
						<li>
							<i></i>
							<span><strong>Recommended plugins</strong> to boost your site.</span>
						</li>
						<li>
							<i></i>
							<span><strong>Starter Content</strong> to make your site look like the demo.</span>
						</li>
						<li>
							<i></i>
							<span><strong>Premium Support</strong> to assist you all the way.</span>
						</li>
					</ul>
					<div class="message js-plugin-message"></div>
					<button class="pxg-button js-handle-pixcare"><?php echo $button_text ?></button>
				</div>
			</div>
		</div>
	<?php
	}

	public function outputCSS() {
		wp_register_style( 'felt_notification_css', get_template_directory_uri() . '/inc/lite/admin/wizard.css', false );
		wp_enqueue_style( 'felt_notification_css' );
	}

	public function outputJS() {
		wp_register_script( 'felt_notification_js', get_template_directory_uri() . '/inc/lite/admin/wizard.js', array( 'jquery') );
		wp_enqueue_script( 'felt_notification_js' );

		$install_url = wp_nonce_url(
			add_query_arg(
				array(
					'plugin'        => urlencode( 'pixelgrade-care' ),
					'tgmpa-install' => 'install-plugin',
				),
				admin_url( 'themes.php?page=install-required-plugins' )
			),
			'tgmpa-install',
			'tgmpa-nonce'
		);
		// &amp; is not something that wp.ajax can actually handle
		$install_url = str_replace( 'amp;', '', $install_url );

		$activate_url = wp_nonce_url(
			add_query_arg(
				array(
					'plugin'        => urlencode( 'pixelgrade-care' ),
					'tgmpa-activate' => 'activate-plugin',
				),
				admin_url( 'themes.php?page=install-required-plugins' )
			),
			'tgmpa-activate',
			'tgmpa-nonce'
		);
		// &amp; is not something that wp.ajax can actually handle
		$activate_url = str_replace( 'amp;', '', $activate_url );

		$plugin_status = 'missing';
		// Pixelgrade Care plugin installed, but not activated.
		if ( class_exists( 'PixelgradeCare' ) ) {
			$plugin_status = 'active';
		} elseif ( file_exists( WP_PLUGIN_DIR . '/pixelgrade-care/pixelgrade-care.php' ) ) {
			$plugin_status = 'installed';
		}

		wp_localize_script( 'felt_notification_js', 'pixcareNotificationStrings', array(
			'ajaxurl' => esc_url( admin_url( 'admin-ajax.php' ) ),
			'installUrl' => esc_url_raw( $install_url ),
			'activateUrl' => esc_url_raw( $activate_url ),
			'themesPluginsUrl' => esc_url( admin_url( 'themes.php?page=install-required-plugins' ) ),
			'pixcareSetupUrl' => esc_url( admin_url( 'index.php?page=pixelgrade_care-setup-wizard' ) ),
			'status' => $plugin_status,
			'i18n' => array(
				'btnInstall' => esc_html__( 'Install Pixelgrade Care&reg;', '__theme_txtd' ),
				'btnInstalling' => esc_html__( 'Installing Pixelgrade Care&reg;..', '__theme_txtd' ),
				'btnActivate' => esc_html__( 'Activate Pixelgrade Care&reg;', '__theme_txtd' ),
				'btnActivating' => esc_html__( 'Activating Pixelgrade Care&reg;..', '__theme_txtd' ),
				'btnRedirectingToSetup' => esc_html__( 'Opening the Pixelgrade Care&reg; setup..', '__theme_txtd' ),
				'btnError' => esc_html__( 'Please retry 🙏', '__theme_txtd' ),
				'installedSuccessfully' => esc_html__( 'Plugin installed successfully.', '__theme_txtd' ),
				'activatedSuccessfully' => esc_html__( 'Plugin activated successfully.', '__theme_txtd' ),
				'redirectingToSetup' => esc_html__( 'Opening the Pixelgrade Care&reg; setup in a couple of seconds.', '__theme_txtd' ),
				'folderAlreadyExists' => esc_html__( 'Plugin destination folder already exists.', '__theme_txtd' ),
				'error' => esc_html__( 'Sorry 😢! Something went wrong. Please refresh the page 🙏 and try again...', '__theme_txtd' ),
			),
		) );
	}

	public function registerPixcareInstall_page() {
		add_theme_page(  '', '', 'manage_options', 'pixelgrade_care-install', null );
	}
}

$pixcare_notification = new PixelgradeCare_Notification();
