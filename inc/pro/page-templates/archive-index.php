<?php
/**
 * Template Name: Archive Index
 *
 * The template for displaying the widgetized archive index.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Felt
 * @since 1.0.0
 */

//let the template parts know about our location
$location = pixelgrade_set_location( 'page archive-index' );

// Here get the content width class
$content_width_class = 'u-content-width';

pixelgrade_get_header(); ?>

<?php
/**
 * pixelgrade_before_main_content hook.
 *
 * @hooked nothing() - 10 (outputs nothing)
 */
do_action( 'pixelgrade_before_main_content', $location );
?>

    <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">

            <?php
            /**
             * pixelgrade_before_loop hook.
             *
             * @hooked nothing - 10 (outputs nothing)
             */
            do_action( 'pixelgrade_before_loop', $location );
            ?>

            <?php while ( have_posts() ) : the_post(); ?>

                <?php
                /**
                 * pixelgrade_before_loop_entry hook.
                 *
                 * @hooked felt_custom_page_css() - 10 (outputs the page's custom css)
                 */
                do_action( 'pixelgrade_before_loop_entry', $location );
                ?>

                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <div class="u-container-sides-spacing">
                        <div class="o-wrapper u-container-width">
                            <div class="widget-area  o-layout">
                                <div class="o-layout__main">
                                    <header class="entry-header">

                                        <?php
                                        /**
                                         * pixelgrade_before_entry_title hook.
                                         *
                                         * @hooked pixelgrade_the_hero() - 10 (outputs the hero markup)
                                         */
                                        do_action( 'pixelgrade_before_entry_title', $location );
                                        ?>

                                        <?php
                                        //allow others to prevent this from displaying
                                        if ( apply_filters( 'pixelgrade_display_entry_header', true, $location ) ) {
                                            the_title( '<h2 class="h2  page-title">', '</h2>' );
                                        } else {
                                            the_title( '<h2 class="h2  screen-reader-text">', '</h2>' );
                                        } ?>

                                        <?php
                                        /**
                                         * pixelgrade_after_entry_title hook.
                                         *
                                         * @hooked nothing() - 10 (outputs nothing)
                                         */
                                        do_action( 'pixelgrade_after_entry_title', $location );
                                        ?>

                                    </header><!-- .entry-header -->

                                    <?php
                                    // The Content Area
                                    pixelgrade_get_sidebar( 'archive-content' );
                                    ?>
                                </div><!-- .o-layout__main -->
                                <?php
                                // The Sidebar Area
                                pixelgrade_get_sidebar();
                                ?>
                            </div><!-- .widget-area -->
                        </div><!-- .o-wrapper .u-container-width -->
                    </div><!-- .u-container-sides-spacing -->
                </article><!-- #post-## -->

                <?php
                /**
                 * pixelgrade_after_loop_entry hook.
                 *
                 * @hooked nothing() - 10 (outputs nothing)
                 */
                do_action( 'pixelgrade_after_loop_entry', $location );
                ?>

            <?php endwhile; // End of the loop. ?>

            <?php
            /**
             * pixelgrade_after_loop hook.
             *
             * @hooked nothing() - 10 (outputs nothing)
             */
            do_action( 'pixelgrade_after_loop', $location );
            ?>

        </main><!-- #main -->
    </div><!-- #primary -->

<?php
/**
 * pixelgrade_after_main_content hook.
 *
 * @hooked nothing - 10 (outputs nothing)
 */
do_action( 'pixelgrade_after_main_content', $location );
?>

<?php
pixelgrade_get_footer();
