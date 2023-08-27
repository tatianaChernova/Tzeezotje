
//Открытие/закрытие меню

$(function () {

    $('.header__menu-btn-close').on('click', function () {
        $('.header__menu').removeClass('header__menu--open');
    });

    $('.header__menu-btn').on('click', function () {
        $('.header__menu').addClass('header__menu--open');
    });

});

//Открытие/закрытие формы

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//Отправка данных формы AJAX

$(document).ready(function () {
    $("#reservationForm").on("submit", function (event) {
        const form = document.getElementById('form');
        event.preventDefault();

        const data = {
            name: $("#formName").val(),
            email: $("#formEmail").val(),
            request: $("#formRequest").val()
        };

        if (data.name == "") {
            $("#resultMessage").text("Please fill in name");
            return false;
        } else if (data.email == "") {
            $("#resultMessage").text("Please fill in email");
            return false;
        }
        $("#resultMessage").text("");

        $.ajax({
            url: 'sendmail.php',
            type: 'POST',
            cache: false,
            data: { 'name': data.name, 'email': data.email, 'request': data.request },
            dataType: 'html',
            beforeSend: function () {
                $("#sendForm").prop("disabled", true);
            },
            success: function (response) {
                $("#resultMessage").text(response);
                $("#sendForm").prop("disabled", false);
                form.reset();
                alert('Reserved');
            },
            error: function (jqXHR, text, error) {
                $("#resultMessage").text(error);
            }
        });

    });
});