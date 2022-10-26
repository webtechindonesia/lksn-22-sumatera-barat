var sp_crud_contact_empty_row = { 
    first_name: '', 
    last_name: '',
    company_name: '',
    phone: '',
    email: '',
    address_line1: '',
    address_line2: '',
    city: '',
    zip: ''        
};

function SPCRUD_Contact() {    
    var self = this;    
    self.view_mode = ko.observable();
    self.process = ko.observable( true );
    self.process_status = ko.observable('');
    self.process_message = ko.observable('');
    self.set_notif_class = ko.pureComputed( function(){
        var css_class = 'sui-notice-success';
        if( !self.process() ) {
            css_class = 'sui-notice-error';
        }
        return css_class;
    } );    
    self.item = ko.observable( new SPCRUD_ContactItem( null, sp_crud_contact_empty_row ) );
    self.form_title = ko.pureComputed( function(){
        var title = 'New Contact';
        if( this.view_mode() != 'new' ) {
            title = 'Edit Contact';
        }
        return title
    }, self );
    self.items = ko.observableArray();
    
}

function SPCRUD_ContactItem( id, data ) {
    this.id = id;
    this.first_name = data.first_name; 
    this.last_name = data.last_name;
    this.company_name = data.company_name;
    this.phone = data.phone;
    this.email = data.email;
    this.address_line1 = data.address_line1;
    this.address_line2 = data.address_line2;
    this.city = data.city;
    this.zip = data.zip;
}

( function( $ ) {
    
    var vm = new SPCRUD_Contact();
    var dt = null;    
    $( document ).ready( function(){
        
        const el = document.getElementById('sp-crud-contact');
        const dialog = new A11yDialog(el);        

        ko.applyBindings( vm );
        solusipress_crud_functions.setVM( vm );
        solusipress_crud_functions.setDialog( dialog );
        
        $( '#frm-input-dialog' ).click( function(e){
            e.preventDefault();
            vm.view_mode('new');
            vm.item( new SPCRUD_ContactItem( null, sp_crud_contact_empty_row ) );
            dialog.show();
        });
        
        $( 'button[data-a11y-dialog-hide="sp-crud-contact"]' ).click( function(e){
            e.preventDefault();
            var $frm = $(this).closest('form');
            $frm.trigger( 'reset' );
        } );
        $( '.sui-dialog-close' ).click( function(e){
            e.preventDefault();
        } );
        
        do_load_data();
        
        $( '#frm-crud-contact' ).submit( function(e) {
            e.preventDefault();
            $( '#spcrud-button-save' ).addClass( 'sui-button-onload' );
            if( vm.view_mode() == 'new' ) {
                solusipress_crud_functions.process_action.call( this, 'insert', true );
            }
            if( vm.view_mode() == 'edit' ) {
                solusipress_crud_functions.process_action.call( this, 'update', false );
            }
        } );
        
        $( '#data-process-success a[role="button"]' ).click( function(e){
            e.preventDefault();
            var $ref = $('#data-process-success');
            if( ! $ref.is(":hidden") ) {
                $ref.toggle(500);
            }
        } );
        
        function do_load_data() {
            var data_url = spcrud.ajax_action + '&method=list&security=' + spcrud.security;
            dt = $('#contacts-table').dataTable({
                paging: true,
                processing: true,
                serverSide: true,
                ajax: data_url,
                columns: [
                    null, null, null, null, null, null, 
                    { visible: false }, { visible: false }, 
                    { visible: false }, { visible: false },
                    { 
                        orderable: false,
                        render: function( data, type, row, meta ){
                            var html = '<a href="#" data-id="'+data+'" class="data-btn-edit sui-tooltip" data-tooltip="Edit"><i class="sui-icon-pencil" aria-hidden="true"></i></a>';
                            html += '&nbsp;&nbsp;';
                            html += '<a href="#" data-id="'+data+'" class="data-btn-delete sui-tooltip" data-tooltip="Delete"><i class="sui-icon-trash" aria-hidden="true"></i></a>';
                            return html;
                        }
                } ],
                drawCallback: function( settings ){
                    var tbl = this;
                    $( '.data-btn-edit' ).click( function( e ){
                        e.preventDefault();
                        var data = datatable_get_data_row.call( this, tbl );
                        vm.view_mode( 'edit' );
                        vm.item( new SPCRUD_ContactItem( data.id, { 
                            first_name: data.row[1], last_name: data.row[2], 
                            company_name: data.row[3], phone: data.row[4], email: data.row[5],
                            address_line1: data.row[6], address_line2: data.row[7],
                            city: data.row[8], zip: data.row[9]
                        } ) );                        
                        dialog.show();
                    } );
                    $( '.data-btn-delete' ).click( function( e ){
                        e.preventDefault();
                        var obj_link = this;
                        $.confirm( {
                            useBootstrap: false,
                            title: 'Confirmation',
                            content: "Delete selected row ? it can't be undo",
                            boxWidth: '350px',
                            buttons: {
                                no: function(){},
                                yes: function(){
                                    solusipress_crud_functions.process_delete.call( obj_link, tbl );
                                }
                            }
                        } );
                    } );
                }
            } );   
            solusipress_crud_functions.setDataTable( dt );
        }    
    } );
    
    
} )( jQuery );