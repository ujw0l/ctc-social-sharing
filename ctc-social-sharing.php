<?php
/**
 * Plugin Name:       CTC Social Sharing
 * Description:       Gutenberg block to display post sharing options on socail media
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           2.0.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ctc-social-sharing
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_ctc_social_sharing_block_init() {


	// Block front end styles.
	wp_register_style(
		'socialbar-block-front-end-styles',
		plugins_url( 'build/index.css',__FILE__ ),
		array('dashicons')
	 );



	register_block_type( __DIR__ . '/build',
array(
	'style'         => 'socialbar-block-front-end-styles',
)
);
}
add_action( 'init', 'create_block_ctc_social_sharing_block_init' );
