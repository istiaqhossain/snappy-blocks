<?php
/**
 * Plugin Name:       Snappy Blocks
 * Description:       The Snappy Blocks help build websites faster.
 * Version:           0.1.0
 * Author:            Istiaq Hossain
 * Author URI:        https://github.com/istiaqhossain
 * Text Domain:       snappy-blocks
 * Domain Path:       /languages
 *
 * @package SnappyBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Block Initializer.
 */
function snappy_blocks_snappy_blocks_block_init() {
	// register_block_type( __DIR__ . '/build/snappy-blocks' );
}
add_action( 'init', 'snappy_blocks_snappy_blocks_block_init' );
