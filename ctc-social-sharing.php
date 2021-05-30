<?php
/*
Plugin Name: CTC Social Sharing
Plugin URI:
Description: Gutenberg block to  add post sharing in social diffrent social sites
Version: 1.0.0
Author: Ujwol Bastakoti
Author URI:ujw0l.github.io
text_domain :ctc-social-sharing
License: GPLv2
*/


/**
 * Resiter gutenberg block
 */
add_action( 'init',  function (){


	// Block Editor Script.
wp_register_script(
   'socialbar-block-editor',
   plugins_url( 'js/socialbar-block.js',__FILE__ ),
   array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n','wp-data' ),
);

 // Block front end styles.
 wp_register_style(
	'socialbar-block-front-end-styles',
	plugins_url( 'css/style.css',__FILE__ ),
	array('dashicons')

 );

 // Block editor styles.
 wp_register_style(
	'socialbar-block-editor-styles',
	plugins_url( 'css/editor-style.css',__FILE__ ),
	array( 'wp-edit-blocks','dashicons' ),
 );

register_block_type(
   'social-bar/socialbar-block',
   array(
	  'style'         => 'socialbar-block-front-end-styles',
	  'editor_style'  => 'socialbar-block-editor-styles',
	  'editor_script' => 'socialbar-block-editor',
   )
);

}
 );