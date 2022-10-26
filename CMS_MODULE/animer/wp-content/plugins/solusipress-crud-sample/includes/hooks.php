<?php

function solusipress_crud_sample_enqueue_scripts() {
    wp_enqueue_script( 'shared-ui', plugin_dir_url( dirname( __FILE__ ) ) . 'assets/shared-ui/js/shared-ui.min.js' );
    wp_enqueue_script( 'knockout', plugin_dir_url( dirname( __FILE__ ) ) . 'assets/js/knockout.js' );
    wp_enqueue_script( 'solusipress-crud', plugin_dir_url( dirname( __FILE__ ) ) . 'assets/js/modules/solusipress-crud.js', array( 'jquery' ), '0.9.1', true );
    wp_register_script( 'jquery-confirm', plugin_dir_url( dirname( __FILE__ ) ) . 'assets/js/jquery-confirm.min.js', array( 'jquery' ) );
    wp_register_script( 'crud-contact', plugin_dir_url( dirname( __FILE__ ) ) . 'assets/js/modules/crud-contact.js', array( 'jquery' ), '0.9.0', true );
    wp_register_script( 'datatables', 'https://cdn.datatables.net/v/bs-3.3.7/dt-1.10.20/datatables.min.js', array('jquery'), null, true);
}

function solusipress_crud_sample_enqueue_styles() {
    wp_register_style( 'shared-ui', plugin_dir_url( dirname( __FILE__ ) ) . 'assets/shared-ui/css/shared-ui.min.css' );
    wp_register_style( 'jquery-confirm', plugin_dir_url( dirname( __FILE__ ) ) . 'assets/css/jquery-confirm.min.css' );
    wp_register_style( 'datatables_style', 'https://cdn.datatables.net/v/bs-3.3.7/dt-1.10.20/datatables.min.css' );    
}

function solusipress_crud_datatable_pages(){
    $screen = get_current_screen();
    $pages = [ 'crud_page_crud-contact', 'toplevel_page_spcrud' ];
    if( in_array( $screen->id, $pages ) ) {
        echo '<style type="text/css">' .
            'body { background-color: #f1f1f1!important; } '.
            '.paginate_button.active a { color: #fff!important; background-color: #666!important; border: 1px solid #666!important; }' .
            '.pagination a { color: #333!important; }' .
            '</style>';
    }    
}

function solusipress_crud_body_classes( $classes ) {
    $classes .= 'sui-2-4-1';
    return $classes;        
}

function solusipress_crud_create_menus() {
    add_menu_page( 
        'CRUD', 'CRUD', 
        'data_entry', 
        'spcrud', 'solusipress_crud_contact', 
        'dashicons-forms', 3 );
    
    add_submenu_page(
        'spcrud', 'Contacts', 'Contacts',
        'data_entry', 'spcrud', 'solusipress_crud_contact'
    );
    
    add_submenu_page(
        'spcrud', 'Other Page', 'Other Page',
        'data_entry', 'crud-other', 'solusipress_crud_other'
    );
}

function solusipress_crud_contact() {
    
    $data = [
        'ajax_action' => SolusiPress_CRUD_Contact::url(),
        'security' => wp_create_nonce( SolusiPress_CRUD_Contact::nonce() )
    ];

    wp_enqueue_style( 'datatables_style' );
    wp_enqueue_style( 'shared-ui' );
    wp_enqueue_style( 'jquery-confirm' );

    wp_enqueue_script( 'underscore' );
    wp_enqueue_script( 'datatables' );
    wp_enqueue_script( 'jquery-confirm' );

    wp_localize_script( 'crud-contact', 'spcrud', $data );
    wp_enqueue_script( 'crud-contact' );

    include 'views/crud-contact.php';
        
}

function solusipress_crud_other(){
    wp_enqueue_style( 'shared-ui' );
    include 'views/crud-other.php';
}

add_action( 'admin_enqueue_scripts', 'solusipress_crud_sample_enqueue_scripts' );
add_action( 'admin_enqueue_scripts', 'solusipress_crud_sample_enqueue_styles' );
add_action( 'admin_head', 'solusipress_crud_datatable_pages', 1 );
add_action( 'admin_body_class', 'solusipress_crud_body_classes' );
add_action( 'admin_menu', 'solusipress_crud_create_menus' );