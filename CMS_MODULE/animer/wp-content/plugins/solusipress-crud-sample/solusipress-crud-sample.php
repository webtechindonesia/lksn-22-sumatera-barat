<?php
/*
 * Plugin Name:       SolusiPress CRUD Sample
 * Plugin URI:        https://solusipress.com/contoh-crud-pada-wordpress
 * Description:       Just sample for CRUD in WordPress.
 * Version:           0.9.0
 * Author:            Yerie Piscesa
 * Author URI:        https://solusipress.com/
 * Credits: 
 * - WordPress ( https://wordpress.org )
 * - Underscore JS ( https://underscorejs.org )
 * - WP Ajax ( https://github.com/anthonybudd/WP_AJAX )
 * - Shared UI ( https://github.com/wpmudev/shared-ui ) 
 * - Datatables ( https://datatables.net/ )
 * - Knockout JS ( https://knockoutjs.com )
 * - jQuery ( https://jquery.com )
 * - jQuery Confirm ( http://craftpip.github.io/jquery-confirm/ )
 */

if ( ! defined( 'WPINC' ) ) {
	die;
}

require __DIR__ . '/vendor/autoload.php';

require_once 'includes/activator.php';
register_activation_hook( __FILE__, 'solusipress_sample_crud_activation' );
register_deactivation_hook( __FILE__, 'solusipress_sample_crud_deactivation' );

function solusipress_sample_crud_run() {
    
    require 'includes/hooks.php';
    require 'includes/ajax/crud-contact.php';            
    
}

solusipress_sample_crud_run();