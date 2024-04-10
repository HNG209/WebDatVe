$(document).ready(function(){
    $.getJSON('../DATA/movies.json', function(moviesData) {
        for(let i of moviesData){
            $("#film-contain").append($("<div class=\"movie-ticket\">")
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
                              $("<div class=\"ui-review text-center\">")
                              .append($("<a href=\"#\" class=\"ui-btn bg-red\">")
                              .append($("<i class=\"fa fa-ticket\">")
                              .text("Đặt vé")), 
                                     $("<a href=\"#\" class=\"ui-btn bg-green\">")
                              .append($("<i class=\"fa fa-dot-circle-o\">")
                              .text("Buy DVDs"))))))
          );
        }
      })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.error('Error fetching movies:', textStatus, errorThrown);
    });
})