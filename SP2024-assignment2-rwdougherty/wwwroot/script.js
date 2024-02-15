var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "75ca58ae27f64b1297b372d02702c1ad");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}

/*search button function*/
$("#searchBtn").click(function () {
    apiSearch();
    var searchDiv = document.getElementById("searchResults");
    if (!searchDiv.checkVisibility()) {
        searchDiv.visibility = visible;
});

/*website background function*/
$("#searchEngineName").click(function () {
    $('body').css('background-image', 'url("background2.jpg")');
});

/*current time function*/

$("#currentTime").click(function () {

    var d = new Date(); 
    datetext = d.getHours() + ":" + d.getMinutes();
    alert("The current time is " + datetext);
});