/**
 * This file contains development tasks used to compile and concatenate
 * scripts and stylesheets
 *
 * @version 1.0.0
 */

var gulp = require( 'gulp-help' )( require( 'gulp' ) ),
	plugins = require( 'gulp-load-plugins' )(),
	del = require( 'del' ),
	bs = require( 'browser-sync' ),
	argv = require('yargs').argv,
	eol = require('gulp-eol');

var u = plugins.util,
	c = plugins.util.colors,
	log = plugins.util.log;

// -----------------------------------------------------------------------------
// Stylesheets
// -----------------------------------------------------------------------------

function logError( err, res ) {
	log( c.red( 'Sass failed to compile' ) );
	log( c.red( '> ' ) + err.file.split( '/' )[err.file.split( '/' ).length - 1] + ' ' + c.underline( 'line ' + err.line ) + ': ' + err.message );
}

gulp.task( 'styles-main', 'Compiles main css files (ie. style.css editor-style.css)', function() {
	let variation = 'felt';

	if ( argv.variation !== undefined ) {
		variation = argv.variation;
	}

	return gulp.src( 'variations/' + variation + '/scss/*.scss' )
	           .pipe( plugins.sourcemaps.init() )
	           .pipe( plugins.sass().on( 'error', logError ) )
	           .pipe( plugins.autoprefixer() )
	           .pipe( plugins.sourcemaps.write( '.' ) )
	           .pipe( gulp.dest( '.' ) );
} );

gulp.task( 'styles-rtl', 'Generate rtl.css file based on style.css', function() {
	return gulp.src( 'style.css' )
	           .pipe( plugins.rtlcss() )
	           .pipe( plugins.rename( 'rtl.css' ) )
	           .pipe( gulp.dest( '.' ) );
} );

gulp.task( 'styles-process', function() {
	return gulp.src( 'style.css' )
	           .pipe( plugins.sourcemaps.init( {loadMaps: true} ) )
	           // @todo some processing
	           .pipe( plugins.sourcemaps.write( '.' ) )
	           .pipe( gulp.dest( '.' ) );
} );

gulp.task( 'styles-components', 'Compiles Sass and uses autoprefixer', function() {
	return gulp.src( ['components/**/*.scss','!components/docs/**/*', '!components/.*/**/*'] )
	           .pipe( plugins.sass().on( 'error', logError ) )
	           .pipe( plugins.autoprefixer() )
	           .pipe( plugins.rename( function( path ) {
		           path.dirname = path.dirname.replace( '/scss', '' );
		           path.dirname += "/css";
	           } ) )
	           .pipe( gulp.dest( './components' ) );
} );

gulp.task( 'styles', 'Compile styles', function( cb ) {
	plugins.sequence( 'typeline-config', 'typeline-phpconfig', 'styles-components', 'styles-main', 'styles-rtl', cb );
} );

gulp.task('styles-admin', 'Compiles Sass and uses autoprefixer', function () {

	function handleError(err, res) {
		log(c.red('Sass failed to compile'));
		log(c.red('> ') + err.file.split('/')[err.file.split('/').length - 1] + ' ' + c.underline('line ' + err.line) + ': ' + err.message);
	}

	return gulp.src('assets/scss/admin/*.scss')
	           .pipe(plugins.sourcemaps.init())
	           .pipe(plugins.sass().on('error', logError))
	           .pipe(plugins.autoprefixer() )
	           // .pipe(csscomb())
	           // .pipe(chmod(644))
	           .pipe(gulp.dest('./inc/lite/admin/'));
});

gulp.task('eol', function() {
	return gulp.src('assets/js/commons.js')
	           .pipe(eol())
	           .pipe(gulp.dest('assets/js/'));
});

// -----------------------------------------------------------------------------
// Scripts
// -----------------------------------------------------------------------------

var jsFiles = [
	'./assets/js/vendor/*.js',
	'./assets/js/main/wrapper-start.js',
	'./assets/js/modules/*.js',
	'./assets/js/main/unsorted.js',
	'./assets/js/main/main.js',
	'./assets/js/main/wrapper-end.js'
];

gulp.task( 'scripts', 'Concatenate all JS into main.js and wrap all code in a closure', function() {
	return gulp.src( jsFiles )
	           .pipe( plugins.concat( 'main.js' ) )
	           .pipe( gulp.dest( './assets/js/' ) );
} );


// -----------------------------------------------------------------------------
// Variation specific/synced files
// -----------------------------------------------------------------------------

gulp.task( 'sync-variation-specific-files', [], function() {
	let variation = 'felt';

	if ( argv.variation !== undefined ) {
		variation = argv.variation;
	}

	del.sync( ['./inc/specific'] );

	return gulp.src( './variations/' + variation + '/synced/**/*' )
		.pipe( gulp.dest( '.' ) );
} );


// -----------------------------------------------------------------------------
// Watch tasks
//
// These tasks are run whenever a file is saved. Don't confuse the files being
// watched (gulp.watch blobs in this task) with the files actually operated on
// by the gulp.src blobs in each individual task.
//
// A few of the performance-related tasks are excluded because they can take a
// bit of time to run and don't need to happen on every file change. If you want
// to run those tasks more frequently, set up a new watch task here.
// -----------------------------------------------------------------------------

gulp.task( 'watch', 'Watch for changes to various files and process them', ['compile'], function() {
	let variation = 'felt';

	if ( argv.variation !== undefined ) {
		variation = argv.variation;
	}

	// watch for Typeline config changes
	gulp.watch( [
		'inc/integrations/typeline-config.json',
		'inc/integrations/typeline-config-editor.json'
	], ['typeline-config', 'typeline-phpconfig'] );

	// watch for theme related CSS changes
	gulp.watch( ['variations/' + variation + '/**/*.scss', 'assets/scss/**/*.scss'], ['styles-main'] );

	// watch for components related CSS changes
	// exclude the docs directory since that is not a true component; also exclude . directories
	gulp.watch( ['components/**/*.scss', '!components/docs/**/*', '!components/.*/**/*'], ['styles-components', 'styles-main'] );

	// watch for JavaScript changes
	gulp.watch( 'assets/js/**/*.js', ['scripts'] );
} );





// -----------------------------------------------------------------------------
// Browser Sync using Proxy server
//
// Makes web development better by eliminating the need to refresh. Essential
// for CSS development and multi-device testing.
//
// This is how you'd connect to a local server that runs itself.
// Examples would be a PHP site such as Wordpress or a
// Drupal site, or a node.js site like Express.
//
// Usage: gulp browser-sync-proxy --port 8080
// -----------------------------------------------------------------------------

gulp.task( 'browser-sync', false, function() {
	bs( {
		// Point this to your pre-existing server.
		proxy: config.baseurl + (
			u.env.port ? ':' + u.env.port : ''
		),
		files: ['*.php', 'style.css', 'assets/js/*.js'],
		// This tells BrowserSync to auto-open a tab once it boots.
		open: true
	}, function( err, bs ) {
		if ( err ) {
			console.log( bs.options );
		}
	} );
} );
