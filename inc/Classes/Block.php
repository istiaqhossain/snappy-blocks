<?php 
namespace SnappyBlocks\Classes;

class Block {
    public function __construct() {
        add_action('init', [$this, 'register']);
        add_filter('block_categories_all', [$this, 'register_category']);
    }

    public function register_category($block_categories) {
        array_unshift(
            $block_categories,
            [
                'slug'  => 'snappy-blocks',
                'title' => __('Snappy Blocks', 'snappy-blocks'),
            ]
        );
        return $block_categories;
    }

    public function register() {
        register_block_type(SNAPPY_BLOCKS_DIR . '/build/advanced-heading');
    }
}