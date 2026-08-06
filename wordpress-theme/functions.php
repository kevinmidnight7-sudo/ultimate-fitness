<?php
/**
 * Ultimate Human Index theme setup.
 */

// The React app owns the page; stop WordPress emitting its own front-end cruft.
add_action( 'after_setup_theme', function () {
    add_theme_support( 'title-tag' );
    remove_action( 'wp_head', 'wp_generator' );
    remove_action( 'wp_head', 'wlwmanifest_link' );
    remove_action( 'wp_head', 'rsd_link' );
} );

// Drop the block-editor CSS that WordPress loads on the front end by default.
add_action( 'wp_enqueue_scripts', function () {
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'global-styles' );
    wp_dequeue_style( 'classic-theme-styles' );
}, 100 );

/**
 * The React app is a single-page site. Route every front-end request to it,
 * EXCEPT genuine WordPress areas — admin, login, the REST API, and any pages
 * you create in WordPress (e.g. /news for a blog, or a Formidable form page).
 */
add_action( 'template_redirect', function () {
    if ( is_admin() || is_feed() || is_robots() ) {
        return;
    }
    // A real WP page/post exists for this URL — let WordPress render it,
    // so plugin-built pages (blog, forms) keep working.
    if ( is_singular() || is_home() && ! is_front_page() || is_archive() ) {
        return;
    }
} );
