function GoogleCallback(jqueryObj, data) {
    console.log(data);
}

$(function(){



    // $('#google').keydown(function(event) {
    //     if (event.keyCode == 13) {
    //         $(this).submit();
    //         return false;
    //      }
    // });


    $.ajax({
    	url:'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=287003573547-ngnot4b3o9r2fhnbouml4adh5inv295k&q='+ 'test' + ' &callback=GoogleCallback&context=?',
    	data:{
    		abc:123
    	},

    	dataType:'jsonp',
    	method:'POST'
    	    });


});
