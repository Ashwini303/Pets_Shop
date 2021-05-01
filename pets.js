$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle(5000);
    });
})

function openPage(){
    var x=document.getElementById("search").value;

    if (x==="dog"){
        window.open("dog.html");
    }
    if (x==="cat"){
        window.open("cat.html");
    }
    if (x==="fish"){
        window.open("fish.html");
    }
    if (x==="bird"){
        window.open("bird.html");
    }
    if (x==="rabbit"){
        window.open("rabbit.html");
    }

    else{
        console.log("Sorry! We'are not having this Pet");
        alert("Sorry! We'are not having this Pet");
    }

}
    