function planClicked(num){
    if (num == 1) {
        localStorage.setItem("plan", "lite")
        console.log("xd")
    }
    else if (num == 2) {
        localStorage.setItem("plan", "family")
    }
    else {
        localStorage.setItem("plan", "enterprise")
    }
}

function csomagChange(){
    if (localStorage.getItem("plan") == "lite"){
        document.getElementById('csomagTitle').textContent = "Shrekcurity Lite";
    }
    else if (localStorage.getItem("plan") == "family"){
        document.getElementById('csomagTitle').textContent = "Shrekcurity Family";
    }
    else {
        document.getElementById('csomagTitle').textContent = "Shrekcurity Enterprise";
    }
}



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
