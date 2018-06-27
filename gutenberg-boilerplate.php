<?php
/**
 * Plugin Name: Gutenberg Boilerplate
 * Plugin URI: https://github.com/HardeepAsrani/gutenberg-boilerplate/
 * Description: A boilerplate for Gutenberg development.
 * Author: Hardeep Asrani
 * Author URI: http://www.hardeepasrani.com
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package gutenberg-boilerplate
 */

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Enqueue front end and editor JavaScript and CSS
 */
function gutenberg_boilerplate_scripts() {
    $blockPath = '/dist/block.js';
    $stylePath = '/dist/block.css';

    // Enqueue the bundled block JS file
    wp_enqueue_script(
        'gutenberg-boilerplate-block-js',
        plugins_url( $blockPath, __FILE__ ),
        [ 'wp-i18n', 'wp-edit-post', 'wp-element', 'wp-editor', 'wp-components', 'wp-data', 'wp-plugins', 'wp-edit-post', 'wp-api' ],
        filemtime( plugin_dir_path(__FILE__) . $blockPath )
    );

    // Enqueue frontend and editor block styles
    wp_enqueue_style(
        'gutenberg-boilerplate-block-css',
        plugins_url ($stylePath, __FILE__),
        '',
        filemtime( plugin_dir_path(__FILE__) . $stylePath )
    );

}

// Hook scripts function into block editor hook
add_action('enqueue_block_assets', 'gutenberg_boilerplate_scripts');
