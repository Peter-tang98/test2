
"use strict"
fetch('/result.json')
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        /*
        var objSorted = Object.keys(data).sort(
            function(a, b){
                return data[a] - data[b];
            }
        );*/

        var array = {};
        Object.keys(data).sort().forEach(function(key) {
            array[key] = data[key];
        });
        console.log(JSON.stringify(array));
        document.getElementById('output').innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
    });
    $(document).ready(function(){
        var count = 0;
        $("#black").click(function(){
            count += 1;
            $.cookie('black', count, { expires: 365 });
            console.log("black : " + count);
            alert( $.cookie("black") ); 
        });
    });
    $(document).ready(function(){
        var count = 0;
        $("#red").click(function(){
        count += 1;
        $.cookie('red', count, { expires: 365 });
        console.log("red : " + count);
        alert( $.cookie("red") ); 
        });
    });
    $(document).ready(function(){
        var count = 0;
        $("#white").click(function(){
        count += 1;
        $.cookie('white', count, { expires: 365 });
        console.log("white : " + count);
        alert( 'white : ' + $.cookie("white") ); 
        });
    });


