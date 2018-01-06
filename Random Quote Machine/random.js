var quote;
var author;

//executes when page loads
$(document).ready(function(){
  function getNewQuote(){
   //.ajax basically says making an API request
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
      method: 'getQuote',
      lang: 'en',
      format: 'jsonp'
              },
          //execute if API is successful
          success: function(response){
          quote = response.quoteText;
          author = response.quoteAuthor;
          $('#quote').text(quote);
          //checks if author is present
             if(author){
               $('#author').text('-- ' + author);
             } else{
                 $('#author').text('-- unknown');
               }
             }
          });
  }
  getNewQuote();

//for click function
  $('#newQuote').on('click', function(){
      getNewQuote();
  });

  //for tweet function
  $('#tweetQuote').on('click', function(){
     //connect to Twitter to share quote
     
  });

});
  

