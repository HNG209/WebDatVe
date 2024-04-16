$(document).ready(function(){
  var data;
    function displayFilm(type, year, category){
      var count = 0;
      for(let i of data){
        if(type == "all" || (i.type == type && (i.year == year || !$("#year-check").is(":checked")) && (i.category == category || !$("#cate-check").is(":checked")))){
          count++;
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
                              $("<div class=\"ui-review text-center\">")
                              .append($("<a href=\"#\" class=\"ui-btn bg-red\">")
                              .append($("<i class=\"fa fa-ticket\">")
                              .text("Đặt vé")), 
                                     $("<a href=\"#\" class=\"ui-btn bg-green\">")
                              .append($("<i class=\"fa fa-dot-circle-o\">")
                              .text("Buy DVDs"))))))
          );
        }
      }
      if(count == 0)
        $("#phimnb").append($("<div class=\"container-fluid d-flex justify-content-center align-items-center\" style=\"height: 500px\">").append($("<h1 class=\"text-light\">").text("Không tìm thấy phim:(")));
    }
    $.getJSON('../DATA/movies.json', function(moviesData) {
      data = moviesData;
      $("#year-select").prop('disabled', true);
      $("#cate-select").prop('disabled', true);
        for(let i of moviesData){
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
    $("#film-select").change(function(){
      $("#phimnb").empty();
      var type = $(this).val();
      if(type == "all"){
        $("#year-select").prop('disabled', true);
        $("#cate-select").prop('disabled', true);
      }
      else{
        $("#year-select").prop('disabled', false);
        $("#cate-select").prop('disabled', false);
      }
      var year = $("#year-select").val();
      var category = $("#cate-select").val();
      displayFilm(type, year, category);
    })
    $("#year-select").change(function(){
      $("#phimnb").empty();
      var type = $("#film-select").val();
      var year = $(this).val();
      var category = $("#cate-select").val();
      displayFilm(type, year, category);
    })
    $("#cate-select").change(function(){
      $("#phimnb").empty();
      var type = $("#film-select").val();
      var year = $("#year-select").val();
      var category = $(this).val();
      displayFilm(type, year, category);
    })
    $("#year-check").change(function(){
      $("#phimnb").empty();
      var check = $(this).is(":checked");
      if(check)
        $("#year-select").prop('disabled', false);
      else
        $("#year-select").prop('disabled', true);

      var type = $("#film-select").val();
      var year = $("#year-select").val();
      var category = $("#cate-select").val();
      displayFilm(type, year, category);
    })
    $("#cate-check").change(function(){
      $("#phimnb").empty();
      var check = $(this).is(":checked");
      if(check)
        $("#cate-select").prop('disabled', false);
      else
        $("#cate-select").prop('disabled', true);

      var type = $("#film-select").val();
      var year = $("#year-select").val();
      var category = $("#cate-select").val();
      displayFilm(type, year, category);
    })
    $("#input").on("focusin", function(){
      $("#cate-select").prop("checked", false);
      $("#year-select").prop("checked", false);
    })
})