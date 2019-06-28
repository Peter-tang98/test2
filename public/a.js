
"use strict"
fetch('/result.json')
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('output').innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
    });
