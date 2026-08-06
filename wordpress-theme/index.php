<?php
/**
 * Serves the built React application.
 *
 * The Vite build outputs hashed asset filenames, so rather than hardcoding
 * them we read the generated index.html and rewrite its asset paths to point
 * at this theme's /app directory. That means no PHP change is needed when the
 * front end is rebuilt.
 */
$app_dir = get_template_directory() . '/app';
$app_uri = get_template_directory_uri() . '/app';
$index   = $app_dir . '/index.html';

if ( ! file_exists( $index ) ) {
    wp_die( 'UHI front end not deployed yet — run the build and deploy workflow.' );
}

$html = file_get_contents( $index );

// Point root-relative asset and image URLs at the theme's app directory.
$html = preg_replace( '#(src|href)="/(assets|images|icons)#', '$1="' . $app_uri . '/$2', $html );

// Let WordPress inject plugin output (analytics, SEO tags, verification, etc.)
ob_start();
wp_head();
$head = ob_get_clean();
$html = str_replace( '</head>', $head . '</head>', $html );

ob_start();
wp_footer();
$footer = ob_get_clean();
$html = str_replace( '</body>', $footer . '</body>', $html );

echo $html;
