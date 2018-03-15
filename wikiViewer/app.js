const searchInput = $(".form-control");
let searchVal = "";
let results;

searchInput.keypress(function(e) {
  if (e.which == 13) {
    search();
  } else {
    searchVal += e.key;
  }
});
$(".input-group-btn .btn").on("click", function() {
  search();
});
$(".new-search").on("click", function(){
    $("#results-list").html("");
    $(".search-wrapper").css({"display": "flex"});
    $(".results-wrapper").css({"display": "none"});
});

function search() {
  fetch(
    "https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=" +
      searchVal +
      "&limit=1000"
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      results = myJson;
      console.log(myJson);
    })
    .then(function() {
      $("#results-title").text(searchVal);
      for (var i=0;i<results[1].length;i++) {
        $("#results-list").append(`
            <a target="_blank" href=${results[3][i]}>
              <li class="result">
            
              <div class="result-wrap">
                <h3>${results[1][i]}</h3>
                <div class="results-text">
                    <p>${results[2][i]}</p>
                </div>
              </div>
              
            </li>
            </a>
          `);
      }
    })
    .then(function() {
      searchInput.val("");
      searchVal = "";
      $('.search-wrapper').css({"display":"none"});
      $('.results-wrapper').css({"display":"flex"});
      $('body').css({"height": "100%"});
      $('html').css({"height":"100%"});
    });
}
