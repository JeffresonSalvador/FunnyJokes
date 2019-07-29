//Services
var JOKE_SERVICE = {
    get: function(){
          return   $.ajax({
                type: 'get',
                url: JOKES_API,
                async: false,
                // success: function(data){
                //      someOtherFunc(data.leader);
                //  }
              
            });
        },
    answer: function(){
            return $.ajax({
                type: 'get',
                url: YN_API
            });
        }
}






