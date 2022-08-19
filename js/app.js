function burnt(){
    document.getElementById('intex').innerHTML = "You've ruined it!!!"
}

function warmup(){
    document.getElementById('intex').innerHTML = "Oolahlah!"
    setTimeout(burnt, 7000)
}
;

function cool() {
    document.getElementById('intex').innerHTML = "Would you please warm my coffe up?"}
;

function cooldown() {
    setTimeout(cool, 7000)
}
