$(document).ready(function(){
  $.getJSON("http://swapi.co/api/planets/1/", function(data){
    console.log(data);
    $("#info").html("<p>" + data.name + "</p>");
  });
});