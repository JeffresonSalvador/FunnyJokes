

$(function(){
    //Cached selectors
    var jokeButton = $('#joke-button');
    var jokeResetButton = $('#joke-reset-button');
    var jokesList = $('#jokes-list');
    var reaction = $('#reaction');
    var jokeLoader = $('#joke-loader');

    var jokeCount =0;
    
    jokeLoader.hide();
    jokeResetButton.hide();
  
    //Events
    jokeButton.on('click', function(e){
      //Do the magic here
     
      JOKE_SERVICE.get()
      .then(function(res){

        var joke = res;
        var li=
        `
        <div class="content">
        <li >
            ${joke}
        </li>
        
        
        </div>
        `
        jokesList.append(li);
    }).then(function(){

      
        jokeCount++;
        if(jokeCount===5){
          $('#joke-button').prop('disabled', true);
        }
    })
      
    });
  


    
    jokeResetButton.on('click', function(){
      
    });
    
  })