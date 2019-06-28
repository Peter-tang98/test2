
"use strict"
var myinit = {
    method:'GET',
    headers:{
        'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
};
let myreq = new Request("./result", myinit);
fetch(myreq)
    .then(function(resp){
        return resp.json();
    })
    .then(function(resp){
        console.log(data);
    })

$.getJSON("/")
