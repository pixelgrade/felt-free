/**
 * This file contains build tasks that will create a ready-to-install zip archive
 * without any development resources or dependencies
 *
 * @version 1.0.0
 */

var gulp = require( 'gulp' ),
	del = require( 'del' ),
	fs = require( 'fs' ),
	plugins = require( 'gulp-load-plugins' )(),
	argv = require('yargs').argv,
	cp = require('child_process');


// -----------------------------------------------------------------------------
// Move the current variation's PHP files in their proper place
// -----------------------------------------------------------------------------
function moveVariationSpecificFiles() {
	let variation = 'felt';

	if ( argv.variation !== undefined ) {
		variation = argv.variation;
	}

	return gulp.src( '../build/' + variation + '/variations/' + variation + '/synced/**/*' )
		.pipe( gulp.dest( '../build/' + variation ) );
}
gulp.task( 'move-variation-specific-files', moveVariationSpecificFiles );


// -----------------------------------------------------------------------------
// Copy theme folder outside in a build folder, recreate styles before that
// -----------------------------------------------------------------------------
function copyFolder() {
	let variation = 'felt';

	if ( argv.variation !== undefined ) {
		variation = argv.variation;
	}

	var dir = process.cwd();
	return gulp.src( './*' )
		.pipe( plugins.exec( 'rm -Rf ./../build; mkdir -p ./../build/' + variation + ';', {
			silent: true,
			continueOnError: true // default: false
		} ) )
		.pipe(plugins.rsync({
			root: dir,
			destination: '../build/' + variation + '/',
			// archive: true,
			progress: false,
			silent: true,
			compress: false,
			recursive: true,
			emptyDirectories: true,
			clean: true,
			exclude: ['node_modules']
		}));
}
copyFolder.description = 'Copy theme production files to a build folder';
gulp.task( 'copy-folder', copyFolder );


// -----------------------------------------------------------------------------
// Remove unneeded files and folders from the build folder
// -----------------------------------------------------------------------------
function removeUnneededFiles() {
	let variation = 'felt';

	if ( argv.variation !== undefined ) {
		variation = argv.variation;
	}


	// Files that should not be present in build
	files_to_remove = [
		'**/codekit-config.json',
		'node_modules',
		'config.rb',
		'gulp-tasks',
		'gulpfile.js',
		'gulpconfig.json',
		'gulpconfig.example.json',
		'webpack.common.js',
		'webpack.dev.js',
		'webpack.prod.js',
		'package.json',
		'package-lock.json',
		'pxg.json',
		'build',
		'css',
		'.idea',
		'.editorconfig',
		'**/.svn*',
		'**/*.css.map',
		'**/.sass*',
		'.sass*',
		'**/.git*',
		'*.sublime-project',
		'.DS_Store',
		'**/.DS_Store',
		'__MACOSX',
		'**/__MACOSX',
		'README.md',
		'**/README.md',
		'.csscomb',
		'.csscomb.json',
		'.codeclimate.yml',
		'tests',
		'circle.yml',
		'.circleci',
		'.labels',
		'.jscsrc',
		'.jshintignore',
		'browserslist',
		'.stylelintrc',
		'tsconfig.json',
		'tslint.json',
		'webpack.config.js',
		'.jscsrc',
		'.jshintignore',

		'assets/scss',
		'assets/js-old',
		'docs',
		'components/docs',
		'components/.bin',
		'components/.labels',
		'components/.github',
		'components/tests',
		'components/.*',
		'components/composer*',
		'components/*.md',
		'components/functions.php',
		'components/phpcs*',
		'components/phpdoc*',
		'components/phpunit*',
		'components/style.css',

		'variations',

		'bin',
	];

	files_to_remove.forEach( function( e, k ) {
		files_to_remove[k] = '../build/' + variation + '/' + e;
	} );

	return del( files_to_remove, {force: true} );
}
removeUnneededFiles.description = 'Remove unneeded files and folders from the build folder';
gulp.task( 'remove-unneeded-files', removeUnneededFiles );

function maybeFixBuildDirPermissions(done) {

	cp.execSync('find ./../build -type d -exec chmod 755 {} \\;');

	return done();
}
maybeFixBuildDirPermissions.description = 'Make sure that all directories in the build directory have 755 permissions.';
gulp.task( 'fix-build-dir-permissions', maybeFixBuildDirPermissions );

function maybeFixBuildFilePermissions(done) {

	cp.execSync('find ./../build -type f -exec chmod 644 {} \\;');

	return done();
}
maybeFixBuildFilePermissions.description = 'Make sure that all files in the build directory have 644 permissions.';
gulp.task( 'fix-build-file-permissions', maybeFixBuildFilePermissions );

function maybeFixIncorrectLineEndings(done) {

	cp.execSync('find ./../build -type f -print0 | xargs -0 -n 1 -P 4 dos2unix');

	return done();
}
maybeFixIncorrectLineEndings.description = 'Make sure that all line endings in the files in the build directory are UNIX line endings.';
gulp.task( 'fix-line-endings', maybeFixIncorrectLineEndings );

// -----------------------------------------------------------------------------
// Replace the components' text domain with the theme text domain
// -----------------------------------------------------------------------------
function componentsTextdomainReplace() {
	let variation = 'felt';

	if ( argv.variation !== undefined ) {
		variation = argv.variation;
	}

	return gulp.src( '../build/' + variation + '/components/**/*.php' )
		.pipe( plugins.replace( /['|"]__components_txtd['|"]/g, '\'' + variation + '\'' ) )
		.pipe( gulp.dest( '../build/' + variation + '/components' ) );
}
gulp.task( 'components-txtdomain-replace', componentsTextdomainReplace );

// -----------------------------------------------------------------------------
// Replace the themes' text domain with the actual text domain (think variations)
// -----------------------------------------------------------------------------
function themeTextdomainReplace() {
	let variation = 'felt';

	if ( argv.variation !== undefined ) {
		variation = argv.variation;
	}

	return gulp.src( '../build/' + variation + '/**/*.php' )
		.pipe( plugins.replace( /['|"]__theme_txtd['|"]/g, '\'' + variation + '\'' ) )
		.pipe( gulp.dest( '../build/' + variation ) );
}
gulp.task( 'txtdomain-replace', themeTextdomainReplace );

function buildSequence(cb) {
	return gulp.series( 'move-variation-specific-files', 'copy-folder', 'remove-unneeded-files', 'fix-build-dir-permissions', 'fix-build-file-permissions', 'fix-line-endings', 'components-txtdomain-replace', 'txtdomain-replace' )(cb);
}
buildSequence.description = 'Sets up the build folder';
gulp.task( 'build', buildSequence );


// -----------------------------------------------------------------------------
// Create the theme installer archive and delete the build folder
// -----------------------------------------------------------------------------
function makeZip() {
	let variation = 'felt';

	if ( argv.variation !== undefined ) {
		variation = argv.variation;
	}

	return gulp.src( './' )
		.pipe( plugins.exec( 'cd ./../; rm -rf ' + variation + '*.zip; cd ./build/; zip -r -X ./../' + variation + '.zip ./; cd ./../; rm -rf build' ) );
}
makeZip.description = 'Create the theme installer archive and delete the build folder';
gulp.task( 'make-zip', makeZip );

function zipSequence(cb) {
	return gulp.series( 'build', 'make-zip' )(cb);
}
zipSequence.description = 'Creates the zip file';
gulp.task( 'zip', zipSequence  );
