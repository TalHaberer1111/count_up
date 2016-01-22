//Business logic

var countUp = function(countTo, countBy) {
  var countArray = [];
  for (var i = countBy; i <= countTo; i += countBy) {
    countArray.push(i);
  }
  return countArray;
};






$(document).ready(function() {


  $("form#countUpInput").submit(function(event){

    var countTo = parseInt($(".countToInput").val());
    var countBy = parseInt($(".countByInput").val());
    var countResult = countUp(countTo, countBy);

    // console.log(num1);
    // console.log(countBy);
    console.log(countResult);

    $(".countResults").text(countResult);

    event.preventDefault();
    });
  });
