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
 * The paths the React router owns, without leading or trailing slashes.
 * '' is the front page. Keep this in step with src/lib/routes.js — a route
 * added there and not here will still render, but it will be served with a
 * 404 status header.
 */
function uhi_app_routes() {
    return array(
        '',
        'challenge',
        'personal-index',
        'personal-coach',
        'compete',
        'subscribe',
        'about',
    );
}

/**
 * The app route the current request is asking for, or null if it is not one.
 *
 * Works off REQUEST_URI rather than the parsed query, because WordPress has
 * by this point already decided the URL matches nothing and thrown the path
 * away. Accounts for WordPress being installed in a subdirectory.
 */
function uhi_requested_app_route() {
    if ( empty( $_SERVER['REQUEST_URI'] ) ) {
        return null;
    }

    $request = parse_url( wp_unslash( $_SERVER['REQUEST_URI'] ), PHP_URL_PATH );
    if ( ! is_string( $request ) ) {
        return null;
    }

    $base = parse_url( home_url( '/' ), PHP_URL_PATH );
    if ( $base && '/' !== $base && 0 === strpos( $request, $base ) ) {
        $request = substr( $request, strlen( $base ) );
    }

    $path = trim( rawurldecode( $request ), '/' );

    return in_array( $path, uhi_app_routes(), true ) ? $path : null;
}

/**
 * Serve the app's deep links with a 200.
 *
 * The React front end is a multi-page site behind BrowserRouter, so /challenge
 * and its siblings are real URLs a visitor can land on directly. WordPress has
 * no page at any of them, so its template hierarchy falls through to this
 * theme's index.php — which serves the app correctly, but alongside a 404
 * status header. That header is what search engines and caching plugins read,
 * so left alone every page but the front page would be de-indexed and refused
 * a cache entry while looking perfectly fine in a browser.
 *
 * Clearing is_404 before the template loader runs keeps index.php as the
 * template that gets used and lets us send the right status with it.
 *
 * Anything NOT on the allowlist still 404s properly, which is what should
 * happen — the app renders its own branded 404 for those.
 */
add_action( 'template_redirect', function () {
    if ( is_admin() || is_feed() || is_robots() ) {
        return;
    }

    // A real WP page/post exists for this URL — let WordPress render it, so
    // plugin-built pages (blog, forms) keep working.
    if ( ! is_404() ) {
        return;
    }

    if ( null === uhi_requested_app_route() ) {
        return;
    }

    global $wp_query;
    $wp_query->is_404 = false;

    status_header( 200 );
}, 1 );
