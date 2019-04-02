// this script is trying to force the installation of Pixelgrade Care plugin
(function ($) {
	$(document).ready(function () {
		var temp_url = wp.ajax.settings.url,
			$plugin = $('.pxg-notice__wrap'),
			$button = $plugin.find('.js-handle-pixcare'),
			$status = $plugin.find('.js-plugin-message');

		$button.addClass('box--plugin-installing');
		if ( pixcareNotificationStrings.status === 'missing' ) {
			$button.text( pixcareNotificationStrings.i18n.btnInstalling );
		} else if ( pixcareNotificationStrings.status === 'installed' ) {
			$button.text( pixcareNotificationStrings.i18n.btnActivating );
		}
		wp.ajax.settings.url = pixcareNotificationStrings.installUrl;
		wp.ajax.send({type: 'GET'}).always(function (res) {
			var success = res.responseText.indexOf('<p>'+pixcareNotificationStrings.i18n.installedSuccessfully+'</p>');
			var already_exists = res.responseText.indexOf('<p>'+pixcareNotificationStrings.i18n.folderAlreadyExists+'</p>');

			if (success !== -1) {

				// we need to trigger a request first to allow TGMPA to cleanup his cache.
				$.ajax({
					method: "GET",
					url: pixcareNotificationStrings.themesPluginsUrl
				}).done(function (msg) {
					// just wait a sec
					setTimeout(function () {
						window.location.href = pixcareNotificationStrings.pixcareSetupUrl;
					}, 4000);
				});

			} else if (already_exists !== -1) {
				window.location.href = pixcareNotificationStrings.pixcareSetupUrl;
			} else {
				$button.removeClass('box--plugin-installing box--neutral');
				$button.addClass('box--plugin-invalidated box--error');

				$status.text(pixcareNotificationStrings.i18n.error);

				setTimeout(function () {
					window.location.href = pixcareNotificationStrings.pixcareSetupUrl;
				}, 8000);
			}
		});
		wp.ajax.settings.url = temp_url;
	});
})(jQuery);
