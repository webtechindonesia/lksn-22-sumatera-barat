<div class="sui-wrap">

    <div id="data-process-success" style="display:none;" 
         class="sui-notice-top sui-can-dismiss" 
         data-bind="css: set_notif_class">
        <p style="width:100%"><strong data-bind="text: process_status"></strong><span data-bind="text: process_message"></span></p>
        <span class="sui-notice-dismiss">
            <a role="button" href="#" aria-label="Dismiss" class="sui-icon-check"></a>
        </span>
    </div>    

    <div class="sui-header">
        <h1 class="sui-header-title">Contacts</h1>
    </div>    

    <div class="sui-box">
        <div class="sui-box-header">
            <h3 class="sui-box-title">Manage contact person or business</h3>
            <div class="sui-actions-right">
                <a class="sui-button" href="#" id="frm-input-dialog">
                    <i class="sui-icon-plus-circle" aria-hidden="true"></i>
                    Add Contact</a>
            </div>            
        </div>
        <div class="sui-box-body">
    
            <div class="sui-notice sui-notice-loading" 
                 id="sp-crud-processing-loader"
                 style="display:none;">
                <p>Processing.</p>
            </div>
            
            <table id="contacts-table" class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Company Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th style="display:none">Address Line 1</th>
                        <th style="display:none">Address Line 2</th>
                        <th style="display:none">Phone</th>
                        <th style="display:none">Zip</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
    
    <?php /* Form Here */ ?>
    <div class="sui-dialog sui-dialog-lg" aria-hidden="true" tabindex="-1" id="sp-crud-contact">
        <div class="sui-dialog-overlay" data-a11y-dialog-hide></div>
        <div class="sui-dialog-content" aria-labelledby="dialogTitle" aria-describedby="dialogDescription" role="dialog">
            <div class="sui-box" role="document">
                <form method="post" id="frm-crud-contact">
                    <input type="hidden" data-bind="value: item().id">
                    <div class="sui-box-header">
                        <h3 class="sui-box-title" id="dialogTitle" data-bind="text: form_title"></h3>
                        <div class="sui-actions-right">
                            <button data-a11y-dialog-hide class="sui-dialog-close" aria-label="Close window"></button>
                        </div>
                    </div>
                    <div class="sui-box-body">
                        <div class="sui-box-settings-row">
                            <div class="sui-box-settings-col-1">
                                <span class="sui-settings-label">Contact Profile</span>
                            </div>
                            <div class="sui-box-settings-col-2">
                                
                                <div class="sui-row">
                                    <div class="sui-col">
                                        <div class="sui-form-field">
                                            <label class="sui-label">First Name *</label>
                                            <input type="text" class="sui-form-control" data-bind="value: item().first_name" minlength="2" maxlength="50" required>                                
                                        </div>
                                    </div>
                                    <div class="sui-col">
                                        <div class="sui-form-field">
                                            <label class="sui-label">Last Name</label>
                                            <input type="text" class="sui-form-control" data-bind="value: item().last_name" maxlength="50">                                
                                        </div>
                                    </div>
                                </div>

                                <div class="sui-row">
                                    <div class="sui-col">
                                        <div class="sui-form-field">
                                            <label class="sui-label">Company Name</label>
                                            <input type="text" class="sui-form-control" data-bind="value: item().company_name" maxlength="50">                                
                                        </div>
                                    </div>
                                    <div class="sui-col">
                                    </div>
                                </div>
                                
                                <div class="sui-row">
                                    <div class="sui-col">
                                        <div class="sui-form-field">
                                            <label class="sui-label">Phone*</label>
                                            <input type="text" class="sui-form-control" data-bind="value: item().phone" maxlength="50" required>                                
                                        </div>
                                    </div>
                                    <div class="sui-col">
                                        <div class="sui-form-field">
                                            <label class="sui-label">Email*</label>
                                            <input type="email" class="sui-form-control" data-bind="value: item().email" maxlength="150" required>                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sui-box-settings-row">
                            <div class="sui-box-settings-col-1">
                                <span class="sui-settings-label">Contact Address</span>
                            </div>
                            <div class="sui-box-settings-col-2">
                                <div class="sui-row">
                                    <div class="sui-col">
                                        <div class="sui-form-field">
                                            <label class="sui-label">Street Name</label>
                                            <input type="text" class="sui-form-control" data-bind="value: item().address_line1">                                
                                        </div>
                                    </div>
                                    <div class="sui-col">
                                        <div class="sui-form-field">
                                            <label class="sui-label">Building/House/Apartment</label>
                                            <input type="text" class="sui-form-control" data-bind="value: item().address_line2">                                
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="sui-row">
                                    <div class="sui-col">
                                        <div class="sui-form-field">
                                            <label class="sui-label">City</label>
                                            <input type="text" class="sui-form-control" data-bind="value: item().city">                                
                                        </div>
                                    </div>
                                    <div class="sui-col">
                                        <div class="sui-form-field">
                                            <label class="sui-label">Postal</label>
                                            <input type="text" class="sui-form-control" data-bind="value: item().zip" maxlength="5">                                
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="sui-box-footer sui-space-between">
                        <button class="sui-button" data-a11y-dialog-hide="sp-crud-contact">Cancel</button>
                        <button class="sui-modal-close sui-button sui-button-blue" id="spcrud-button-save">
                            <span class="sui-loading-text">Save</span>
                            <i class="sui-icon-loader sui-loading" aria-hidden="true"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>    
</div>