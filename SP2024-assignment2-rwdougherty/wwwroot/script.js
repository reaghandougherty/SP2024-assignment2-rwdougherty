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
});

/*website background function*/
$("#searchEngineName").click(function () {
    $('body').css('background-image', 'url("background2.jpg")');
});

/*current time function*/
$("#currentTime").click(function () {
    var now = moment().format("h:mm:ss A");
    let timeNow = document.createTextNode(now);
    alert(timeNow);
});