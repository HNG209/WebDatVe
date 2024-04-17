$(document).ready(function () {
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  $.getJSON('../DATA/theaters.json', function (theatersData) {
    theaters = theatersData;
    for (let i of theaters) {
      $("#theater-select").append($("<option value=\"" + i._id + "\">").text(i.name))
    }
  })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.error('Error fetching movies:', textStatus, errorThrown);
    });
  $("#theaters-btn").click(function () {
    setCookie('rapSelected', $("#theater-select").val(), 7);
    $("#theater-info").load('rapData.html');
  })
})  