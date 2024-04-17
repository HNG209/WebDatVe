$(document).ready(function () {
    function getCookie(name) {
        var nameEQ = name + "=";
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length, cookie.length);
            }
        }
        return null;
    }
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    $("#search").click(function (event) {
        event.preventDefault();
        var value = $("#input").val();
        $("#phimnb").empty();
        $.getJSON('../DATA/movies.json', function (moviesData) {
            for (let i of moviesData) {
                if (i.name.includes(value)) {
                    $("#phimnb").append($("<div class=\"movie-ticket\">")
                        .append($("<div class=\"container-fluid\">")
                            .append($("<div class= \"ui-item\">")
                                .append($("<div class=\"ui-head\">")
                                    .append($("<img src=\"" + i.imgPath + "\" alt=\"\" class=\"img-responsive bg-img\">"),
                                        $("<div class=\"ui-trans clearfix d-flex align-items-center\">")
                                            .append($("<div>")
                                                .append($("<img src=\"" + i.imgPath + "\" alt=\"\" class=\"img-responsive\">"),
                                                    $("<div class=\"ui-details clearfix\">")
                                                        .append($("<h2>").append($("<a href=\"#\">").text(i.name)),
                                                            $("<a href=\"#\" class=\"label\">").text(i.year),
                                                            $("<a href=\"#\" class=\"label\">").text(i.duration + " phút"),
                                                            $("<p>").text(i.description),
                                                            $("<h4>").append($("<span>").text("Đạo diễn:")),
                                                            $("<h5>").append($("<a href=\"#\">").text(i.director)),
                                                            $("<h4>").append($("<span>").text("Diễn viên:")),
                                                            $("<h5>").append($("<a href=\"#\">").text(i.actors)),
                                                            $("<h4>").append($("<span>").text("Khởi chiếu:")),
                                                            $("<h5>").append($("<a href=\"#\">").text(i.released))
                                                        ))))
                                    ,
                                    $("<div class=\"ui-review text-center\">").
                                        append($("<button class=\"btn btn-warning text-center\" id=\"" + i._id + "\">").append($("<h3>").text("Đặt vé ngay")))
                                )))
                    );
                    $('#' + i._id).click(function () {
                        var data = getCookie('rapSelected');
                        if (data == null) {
                            alert('Bạn chưa chọn rạp!');
                        }
                        else {
                            $("#theater-info").load('rapData.html');
                            alert("Đặt vé thành công!");
                        }
                    })
                }
            }
        })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.error('Error fetching movies:', textStatus, errorThrown);
            });
    })
})