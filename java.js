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

function supportbajod(){
    var randy = Math.floor(Math.random()*10);
    if (randy == 2){
        document.getElementById('agybaj').setAttribute('placeholder', 'Írd ide mi a bajod (az agybajon kívül :D)');
    }else{
        document.getElementById('agybaj').setAttribute('placeholder', "Kérem írja le mi aproblémája, és mi probálunk minnél hamarabb segíteni megoldani azt :)");
    }
}

function tudastarshrek(){
    var randy = Math.floor(Math.random()*10);
    if (randy == 2){
        document.getElementById('mindentud').textContent="Shrek mindent tud";
    }else{
        document.getElementById('mindentud').textContent="Tudástár";
    }
}
