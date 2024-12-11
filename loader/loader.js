function ShowSpinner(){
    document.getElementById('spinner').style.visibility="visible";
    document.getElementById('bouncer').style.visibility="hidden";
    document.getElementById('bar').style.visibility="hidden";
}

function ShowBouncer(){
    document.getElementById('bouncer').style.visibility="visible";
    document.getElementById('spinner').style.visibility="hidden";
    document.getElementById('bar').style.visibility="hidden";
}

function ShowBar(){
    document.getElementById('bouncer').style.visibility="hidden";
    document.getElementById('spinner').style.visibility="hidden";
    document.getElementById('bar').style.visibility="visible";
}

function loading(){
    alert("It's loading bebs.");
}