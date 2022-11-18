$(function () {
  $("#addMovieDiv button").on("click", function () {
    $(".current2").css({
      "display":"inline-block"
    })
    $("#addMovieDiv button").css({
      "display":"none"
    })
  });
});
