<?php

function solusipress_sample_crud_activation() {
    solusipress_sample_crud_register_role();
    solusipress_sample_crud_create_db();
}

function solusipress_sample_crud_register_role() {    
    add_role( 'solusipress_crud_entry', 'Data Entry', array( 
        'read' => true, 
        'data_entry' => true
    ) );	    
    $administrator = get_role( 'administrator' );
    $administrator->add_cap( 'data_entry' );    
}

function solusipress_sample_crud_deactivation() {    
    if( get_role('solusipress_crud_entry') ){
        remove_role( 'solusipress_crud_entry' );
    }	
    $administrator = get_role( 'administrator' );
    $administrator->remove_cap( 'data_entry' );        
}

function solusipress_sample_crud_create_db() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'spcrud_contacts';
    $wpdb_collate = $wpdb->collate;
    $sql =
    "CREATE TABLE {$table_name} (
        `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
        `first_name` varchar(50) DEFAULT NULL,
        `last_name` varchar(50) DEFAULT NULL,
        `company_name` varchar(80) DEFAULT NULL,
        `phone` varchar(50) DEFAULT NULL,
        `email` varchar(150) DEFAULT NULL,
        `address_line1` varchar(100) DEFAULT NULL,
        `address_line2` varchar(100) DEFAULT NULL,
        `city` varchar(50) DEFAULT NULL,
        `zip` varchar(5) DEFAULT NULL,
        PRIMARY KEY (`id`)
    )
    COLLATE {$wpdb_collate}";
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta( $sql );    
}