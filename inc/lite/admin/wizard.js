// this script is trying to force the installation of Pixelgrade Care plugin
(function ($) {
	$(document).ready(function () {
		var temp_url = wp.ajax.settings.url,
			$plugin = $('.pxg-notice__wrap'),
			$button = $plugin.find('.js-handle-pixcare'),
			$status = $plugin.find('.js-plugin-message');

		$button.on('click', function() {
			let installedSuccessfully = -1,
				activatedSuccessfully = -1,
				activatedAlready = -1,
				noActionTaken = -1,
				folderAlreadyExists = -1

			$button.addClass('state--plugin-installing').prop('disabled', true);
			if ( pixcareNotificationStrings.status === 'missing' ) {
				$button.html(pixcareNotificationStrings.i18n.btnInstalling);
				wp.ajax.settings.url = pixcareNotificationStrings.installUrl;
			} else if ( pixcareNotificationStrings.status === 'installed' ) {
				$button.html(pixcareNotificationStrings.i18n.btnActivating);
				wp.ajax.settings.url = pixcareNotificationStrings.activateUrl;
			}

			wp.a11y.speak($button.html());

			wp.ajax.send({type: 'GET'}).always(function (response) {
				installedSuccessfully = -1
				activatedSuccessfully = -1
				activatedAlready = -1
				noActionTaken = -1
				folderAlreadyExists = -1

				if (typeof response === 'string') {
					installedSuccessfully = response.indexOf('<p>' + pixcareNotificationStrings.i18n.installedSuccessfully + '</p>');
					activatedSuccessfully = response.indexOf('<div id="message" class="updated"><p>');
					noActionTaken = response.indexOf('<div id="message" class="error"><p>No action taken.');
					folderAlreadyExists = response.indexOf('<p>' + pixcareNotificationStrings.i18n.folderAlreadyExists + '</p>');
				}

				if (installedSuccessfully !== -1) {
					wp.a11y.speak(pixcareNotificationStrings.i18n.installedSuccessfully);

					$button.html(pixcareNotificationStrings.i18n.btnActivating);
					wp.a11y.speak(pixcareNotificationStrings.i18n.btnActivating);

					wp.ajax.settings.url = pixcareNotificationStrings.activateUrl;

					wp.ajax.send({type: 'GET'}).always(function (response) {
						activatedSuccessfully = -1
						noActionTaken = -1

						if (typeof response === 'string') {
							activatedSuccessfully = response.indexOf('<div id="message" class="updated"><p>');
							noActionTaken = response.indexOf('<div id="message" class="error"><p>No action taken.');
						}

						if (activatedSuccessfully !== -1 || noActionTaken !== -1) {
							wp.a11y.speak(pixcareNotificationStrings.i18n.activatedSuccessfully);

							$button.html(pixcareNotificationStrings.i18n.btnRedirectingToSetup);
							wp.a11y.speak(pixcareNotificationStrings.i18n.redirectingToSetup);
							setTimeout(function () {
								window.location.href = pixcareNotificationStrings.pixcareSetupUrl;
							}, 2000);
						} else {
							$button.removeClass('state--plugin-installing state--neutral').addClass('state--plugin-invalidated state--error');
							$button.html(pixcareNotificationStrings.i18n.btnError);

							$status.html(pixcareNotificationStrings.i18n.error);

							wp.a11y.speak(pixcareNotificationStrings.i18n.error);
						}

						wp.ajax.settings.url = temp_url;
					});

				} else if (folderAlreadyExists !== -1 || activatedSuccessfully !== -1 || noActionTaken !== -1) {
					wp.a11y.speak(pixcareNotificationStrings.i18n.activatedSuccessfully);

					$button.html(pixcareNotificationStrings.i18n.btnRedirectingToSetup);
					wp.a11y.speak(pixcareNotificationStrings.i18n.redirectingToSetup);
					setTimeout(function () {
						window.location.href = pixcareNotificationStrings.pixcareSetupUrl;
					}, 2000);
				} else {
					$button.removeClass('state--plugin-installing state--neutral').addClass('state--plugin-invalidated state--error');
					$button.html(pixcareNotificationStrings.i18n.btnError);

					$status.html(pixcareNotificationStrings.i18n.error);

					wp.a11y.speak(pixcareNotificationStrings.i18n.error);
				}

				wp.ajax.settings.url = temp_url;
			});
			wp.ajax.settings.url = temp_url;
		})
	});
})(jQuery);
