"use strict"
window.onload = function () {
    $(document).ready(() => {
        document.getElementById('burger').onclick = function () {
            document.getElementById('menu').classList.add('open');
        }

        document.querySelectorAll('#menu *').forEach((item) => {
            item.onclick = () => {
                document.getElementById('menu').classList.remove('open')
            }
        })

        $('#submit').click(function (e) {
            let product = $('#order');
            let name = $('#name');
            let phone = $('#number');
            let hasError = false;

            $('.error-input').hide();

            if (!product.val()) {
                product.next().show();
                hasError = true;
            }

            if (!name.val()) {
                name.next().show();
                hasError = true;
            }

            if (!phone.val()) {
                phone.next().show();
                hasError = true;
            }

            if (!hasError) {
                $.ajax({
                    method: "POST",
                    url: "http://testologia.site/checkout",
                    data: {product: product.val(), name: name.val(), phone: phone.val()}
                })
                    .done(function ( msg ) {
                        if (msg.success) {
                            $('.order-form').hide();
                            let mask = $('.loader');
                            window.addEventListener('load', () => {
                                mask.classList.add('hide');
                                setTimeout(() => {
                                    mask.remove();
                                }, 2000);
                            });
                            $('.loader-true').show();

                        } else {
                            alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ.')
                        }
                    });
            }

            e.preventDefault();
        })
    })

}