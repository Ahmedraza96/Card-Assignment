$(document).ready(function () {
    $('#btn').click(function () {

        $.ajax({
            url: 'https://fakestoreapi.com/products',
            method: 'GET',
            success: (function (data) {
                var apd = "";

                $.each(data, function (key, val) {
                    apd += `<div class = "col-3">
                                <img src="${val.image}" class="imag rounded-circle p-3 m-3"/>
                                <p class="text-center">Rs. 1000 </p>
                            </div>`

                });

                $('.Section').append(apd)

            })
        });

    });
});