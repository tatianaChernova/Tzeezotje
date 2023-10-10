//Открытие/закрытие меню

$('.header__menu-btn').on('click', function () {
    $('.header__menu-btn, .header__menu').toggleClass('active');
    $('.body').toggleClass('lock');
});

//Открытие/закрытие формы

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//Отправка данных формы резервации AJAX

$(document).ready(function () {
    $("#reservationForm").on("submit", function (event) {
        event.preventDefault();

        const data = {
            name: $("#formName").val(),
            email: $("#formEmail").val(),
            request: $("#formRequest").val()
        };
        console.log(data);


        if (data.name == "") {
            $("#resultMessage").text("Please fill in name");
            return false;
        } else if (data.email == "") {
            $("#resultMessage").text("Please fill in email");
            return false;
        }

        $("#resultMessage").text("");

        $.ajax({
            url: '/sendmail.php',
            type: 'POST',
            data: data,
            success: function (response) {
                $("#resultMessage").text(response);
                $('#reservationForm')[0].reset();
            },
            error: function (jqXHR, text, error) {
                $("#resultMessage").text(error);
            }
        });
    });
});


$(document).ready(function () {
    $("#questionsForm").on("submit", function (event) {
        event.preventDefault();

        const data = {
            name: $("#formQName").val(),
            email: $("#formQEmail").val(),
            request: $("#formQRequest").val()
        };
        console.log(data);


        if (data.name == "") {
            $("#resultQMessage").text("Please fill in name");
            return false;
        } else if (data.email == "") {
            $("#resultQMessage").text("Please fill in email");
            return false;
        }

        $("#resultQMessage").text("");

        $.ajax({
            url: '/sendquestion.php',
            type: 'POST',
            data: data,
            success: function (response) {
                $("#resultQMessage").text(response);
                $('#questionsForm')[0].reset();
            },
            error: function (jqXHR, text, error) {
                $("#resultQMessage").text(error);
            }
        });
    });
});