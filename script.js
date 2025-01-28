const abeceda = "abcdefghijklmnopqrstuvwxyz";
function genSlovo(){
    let slovo = ""
    let delkaSlova = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
    for (let i = 0; i < delkaSlova; i++) {
    slovo += abeceda[Math.floor(Math.random() * abeceda.length)];
    }
    document.getElementById("text").innerHTML = slovo
    return slovo;
};
function genVeta(){
    let veta = ""
    let delkaVeta = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
    for (let i = 0; i <= delkaVeta; i++) {
        if (i === 0) {
            let slovo = genSlovo()
            slovo = slovo[0].toUpperCase() + slovo.slice(1);
            veta += slovo + " "
        }
        else if (i === delkaVeta){
            veta += genSlovo() + "."
        }
        else {
            veta += genSlovo() + " "
        }
        
    }
    document.getElementById("text").innerHTML = veta
    return veta;        
}
function genOdstavec(){
    let odstavec = ""
    for (let i = 0; i <= 10; i++) {
        if (i < 9) {
            odstavec += genVeta() + " "
        }
        else {
            odstavec += genVeta()
        } 
    }
    document.getElementById("text").innerHTML = odstavec;
    return odstavec;
}