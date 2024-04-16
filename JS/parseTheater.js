$(document).ready(function(){
    $.getJSON('../DATA/theaters.json', function(theatersData) {
        theaters = theatersData;
          for(let i of theaters){
            $("#movie-theaters").append($("<div class=\"card m-5\" style=\"width: 18rem;\">")
                                .append($("<img src=\"" + i.path + "\" class=\"card-img-top\">"),
                                        $("<div class=\"card-body\">")
                                .append($("<h5 class=\"card-title\">").text(i.name),
                                        $("<p class=\"card-text\">").text(i.Diachi),
                                        $("<div class=\"text-center\">")
                                .append($("<a href=\"#\" class=\"btn btn-primary\">").text("Chọn")))))
          }
        })      
      .fail(function(jqXHR, textStatus, errorThrown) {
          console.error('Error fetching movies:', textStatus, errorThrown);
      });
})  