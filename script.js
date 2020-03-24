$(document).ready(function() {
    var queryURL =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      "george" +
      "&api-key=ibkac4hZC04NsZtR3o3emSwXiYlsbj6e";
      var searchTopic = $("#")
    function ajaxCall() {
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        //all returned articles
        console.log(response.response);
        //returned headline from an article, according to array position
        console.log(response.response.docs[0].headline.main);
        //author
        console.log(response.response.docs[0].byline.original);
        //document type
        console.log(response.response.docs[0].document_type);
        //link
        console.log(response.response.docs[0].web_url);
        //publish date
        console.log(response.response.docs[0].pub_date);
      });
    }
  });