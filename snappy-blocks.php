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
	exit;
}

define('SNAPPY_BLOCKS_DIR', __DIR__);

if (file_exists(SNAPPY_BLOCKS_DIR . '/vendor/autoload.php')) {
    require_once SNAPPY_BLOCKS_DIR . '/vendor/autoload.php';
}

SnappyBlocks\Plugin::get_instance();