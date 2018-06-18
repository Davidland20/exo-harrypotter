hp = $.get("http://hp-api.herokuapp.com/api/characters").then(function(data) {


data.forEach(function(characters){


 $('.name').append(characters.name + '<br>'  + characters.house + '<br>' + '<br>');



    });
}); 