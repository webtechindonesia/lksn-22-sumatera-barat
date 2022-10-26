function datatable_get_data_row( tbl ){
    var id = jQuery( this ).attr( 'data-id' );
    var $tr = jQuery( this ).closest( 'tr' );
    var data_row = tbl.api().row( $tr ).data();        
    return { 
        id: id,
        row: data_row
    };
}
var solusipress_crud_functions = (function($){    
    var vm = null;
    var dialog = null;
    var dt = null;
    function autohide_status(){
        setTimeout( function(){
            var $ref = $( '#data-process-success' );
            if( ! $ref.is(":hidden") ) {
                $ref.toggle(500);
            }                                                
        }, 5000 );
    }    
    return {
        setVM: function(a) { vm = a; },
        setDialog: function(b) { dialog = b; },
        setDataTable: function( c ) { dt = c; },
        process_action: function( method, goto_1st_page ){            
            if( goto_1st_page == undefined ) {
                goto_1st_page = false;
            }
            var $frm = $(this).closest('form');
            var input = ko.toJS( vm.item() );  
            var self = this;
            $.post( {
                url: spcrud.ajax_action,
                data: { input: input, method: method, security: spcrud.security },
                success: function( response ){
                    var json = $.parseJSON( response ); 
                    if( json.status ) {
                        $frm.trigger( 'reset' );     
                        dialog.hide();
                        vm.process( true );                        
                        vm.process_status( 'Success: ' );
                        vm.process_message( 'Data saved successfully' );
                        dt.api().ajax.reload( null, goto_1st_page );
                        $( '#data-process-success' ).toggle(500); 
                    } else {
                        vm.process( false );                        
                        vm.process_status( 'Failed: ' );
                        vm.process_message( 'Failed to save data or no changes affected. Please try again' );
                        $( '#data-process-success' ).toggle(500); 
                    }
                    $( '#spcrud-button-save' ).removeClass( 'sui-button-onload' );
                    autohide_status();                    
                }
            } );                        
        },        
        process_delete: function( tbl ){
            var data = datatable_get_data_row.call( this, tbl );       
            var self = this;
            $( '#sp-crud-processing-loader' ).show();
            $.post( {
                url: spcrud.ajax_action,
                data: { input: {id: data.id}, method: 'delete', security: spcrud.security },
                success: function( response ) {
                    var json = $.parseJSON( response );  
                    if( json.status ) {
                        vm.process( true );
                        vm.process_status( 'Success: ' );
                        vm.process_message( 'Data deleted successfully' );
                    } else {
                        vm.process( false );
                        vm.process_status( 'Error: ' );
                        vm.process_message( 'Failed to delete data' );
                    }
                    $( '#data-process-success' ).toggle(500); 
                    dt.api().ajax.reload( null, false );
                    autohide_status();                    
                }
            } ).always( function(){
                $( '#sp-crud-processing-loader' ).hide();                
            } );  
        }        
    }    
})(jQuery);