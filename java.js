function shrekLoad(){
    var randy = Math.floor(Math.random()*10);
    if (randy == 2){
        document.getElementById('shrek').src="képek/shrek_horror.png";
    }
    else{
        document.getElementById('shrek').src="képek/shrek_home.png";
    }
}

function evike(){
    var randy = Math.floor(Math.random()*10);
    if (randy == 2){
        document.getElementById('evike').textContent = "/évike néni";
    }
    else{
        document.getElementById('evike').textContent = "/év";
    }
}