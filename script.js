$(document).ready(function(){

    $("#search").on("click", function() {
    
    
    
    var query = $("#firstInput").val();
    var startDate = $("#thirdInput").val() + "0101";
    var endDate = $("#fourthInput").val() + "0101";
    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&begin_date=" + startDate + "&end_date=" + endDate + "&api-key=4enGmxRnwmHbDFTdlZo58WXveOPNHGNr";
    
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET" 
    }) .then(function(genData){
        console.log(genData);
    
        // var newDiv = $("<div>").addClass("resources");
        var numResources = parseInt($("#chooseOption option:selected").text());
    
        //  $(".resultInput").append(resultInput);
        if(genData.response.docs.length < numResources) {
            numResources = genData.response.docs.length;
        }
        console.log(numResources)
        for(var i = 0; i < numResources; i++) {
            var headline = $("<h3>").text(genData.response.docs[i].headline.main);
            var abstract = $("<p>").text(genData.response.docs[i].abstract);
            var webUrl  = $("<a href ="+ genData.response.docs[i].web_url + ">").attr("src", genData.response.docs[i].web_url).text("link");
            var line = $("<hr>");
            $(".resultInput").append(headline, abstract, webUrl, line);
    
    
    
        }
    
    });
    });
    
        $("#delete").on("click", function() {
            $(".resultInput").empty();
    
        });
    
    });
    
    