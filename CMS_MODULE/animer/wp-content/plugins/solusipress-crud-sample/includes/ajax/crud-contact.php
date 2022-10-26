<?php

class SolusiPress_CRUD_Contact extends WP_AJAX {
    protected $action = 'crud-contact';
    protected $db = null;
    protected $table = null;
    
    public function __construct(){
        global $wpdb;
        parent::__construct();
        $this->db = $wpdb;
        $this->table = $this->db->prefix . 'spcrud_contacts';
    }
    
    public static function nonce(){
        return 'spcrud-contact-nonce';
    }
    protected function run() {
        if( !check_ajax_referer( self::nonce(), 'security' ) ) {
            wp_send_json_error( 'Invalid security token!' );
            wp_die();
        }       
        $method = $_REQUEST[ 'method' ];
        switch( $method ) {
            case 'list':
                $this->data_list();
                break;
            case 'insert':
                $this->data_insert();
                break;
            case 'update':
                $this->data_update();
                break;
            case 'delete':
                $this->data_delete();
                break;
        }
    }
    
    private function data_list(){
        
        header("Content-Type: application/json");
        $request = $_GET;
        $columns = array(
            0 => 'id',
            1 => 'first_name',
            2 => 'last_name',
            3 => 'company_name',
            4 => 'phone',
            5 => 'email',
            6 => 'address_line1',
            7 => 'address_line2',
            8 => 'city',
            9 => 'zip',
            10 => 'id'
        );
        $sql = "select * from " . $this->table;
        
        $order = $request['order'][0]['dir'];
        $orderby = $columns[ $request['order'][0]['column'] ];

        $filtered = false;
        $sql_where = '';
        if( !empty( $request['search']['value'] ) ) {
            $_sv = '%'. $request['search']['value'] . '%';
            $_where = ' where first_name like %s ' ;
            $_where .= ' or last_name like %s ';
            $_where .= ' or company_name like %s ';
            $sql_where = $this->db->prepare( $_where, $_sv, $_sv, $_sv );
            $sql .= $sql_where;
            $filtered = true;
        }
        
        $sql .= " order by {$orderby} {$order}";
        $sql .= " limit " . $request[ 'start' ] . "," . $request[ 'length' ];
        
        $rows = $this->db->get_results( $sql );
        $totalRows = $this->db->get_var( "SELECT COUNT(*) FROM " . $this->table );
        
        if( !empty( $rows ) ) {
            $data = [];
            if( !$filtered ) {
                $totalData = $totalRows;
            } else {
                $totalData = $this->db->get_var( "SELECT COUNT(*) FROM " . $this->table . $sql_where );
            }
            foreach( $rows as $row ) {
                array_push( $data, [
                    $row->id,
                    $row->first_name,
                    $row->last_name,
                    $row->company_name,
                    $row->phone,
                    $row->email,
                    $row->address_line1,
                    $row->address_line2,
                    $row->city,
                    $row->zip,
                    $row->id
                ] );
            }
            $json_data = array(
                "draw" => intval( $request['draw'] ),
                "recordsTotal" => intval( $totalRows ),
                "recordsFiltered" => intval( $totalData ),
                "data" => $data
            );
        } else {
            $json_data = array(
                "data" => array(),
                "recordsTotal" => 0,
                "recordsFiltered" => 0
             );
        }
        echo json_encode($json_data);            
        
    }
    
    private function data_insert(){
        $input = $_POST['input'];
        $process = false;
        if( sanitize_text_field( $input['first_name'] ) != '' &&
            sanitize_text_field( $input['phone'] ) != '' && 
            sanitize_text_field( $input['email'] ) != '' ) {
            $process = $this->db->insert( $this->table, [
                'first_name' => sanitize_text_field( $input['first_name'] ),
                'last_name' => sanitize_text_field( $input['last_name'] ),
                'company_name' => sanitize_text_field( $input['company_name'] ),
                'phone' => sanitize_text_field( $input['phone'] ),
                'email' => sanitize_text_field( $input['email'] ),
                'address_line1' => sanitize_text_field( $input['address_line1'] ),
                'address_line2' => sanitize_text_field( $input['address_line2'] ),
                'city' => sanitize_text_field( $input['city'] ),
                'zip' => sanitize_text_field( $input['zip'] )
            ], [ '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s' ] );
        }
        $status = false;
        $message = null;
        if( $process ) {
            $status = true;
            $insert_id = $this->db->insert_id;
        } else {
            $insert_id = null;
            $message = 'Insert failed, please try again';
        }
        $result = [
            'status' => $status,
            'message' => $message, 
            'insert_id' => $insert_id
        ];
        echo json_encode( $result );
        
    }
    
    private function data_update(){
        
        $input = $_POST['input'];
        $process = false;
        if( sanitize_text_field( $input['first_name'] ) != '' &&
            sanitize_text_field( $input['phone'] ) != '' && 
            sanitize_text_field( $input['email'] ) != '' ) {
            $process = $this->db->update( $this->table, [
                'first_name' => sanitize_text_field( $input['first_name'] ),
                'last_name' => sanitize_text_field( $input['last_name'] ),
                'company_name' => sanitize_text_field( $input['company_name'] ),
                'phone' => sanitize_text_field( $input['phone'] ),
                'email' => sanitize_text_field( $input['email'] ),
                'address_line1' => sanitize_text_field( $input['address_line1'] ),
                'address_line2' => sanitize_text_field( $input['address_line2'] ),
                'city' => sanitize_text_field( $input['city'] ),
                'zip' => sanitize_text_field( $input['zip'] )
            ], [ 'id' => $input['id'] ],
            [ '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s' ], [ '%d' ] );
        }
        $status = false;
        $message = null;
        if( $process ) {
            $status = true;
        } else {
            $message = 'Update failed, please try again';
        }
        $result = [
            'status' => $status,
            'message' => $message
        ];
        echo json_encode( $result );
        
    }
    private function data_delete(){
        
        $input = $_POST['input'];
        $status = false;
        $message = null;
        if( isset( $input['id'] ) && $input['id'] != '' ) {
            $process = $this->db->delete( $this->table, [ 'id' => $input['id'] ], [ '%d' ] );
            if( $process ) {
                $status = true;
            } else {
                $message = 'Delete failed, please try again';
            }         
        }
        $result = [
            'status' => $status,
            'message' => $message
        ];
        echo json_encode( $result );
        
    }
}
SolusiPress_CRUD_Contact::listen();