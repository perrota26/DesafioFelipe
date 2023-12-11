let nomeHeroi = "Dragon Kinght"
let experiencia = 3478

let categoria

if (experiencia <= 1000){
    categoria = "Ferro"
}
else if (experiencia <=2000){
    categoria = "Bronze"
}
else if (experiencia <=5000){
    categoria = "Prata"
}
else if (experiencia <=7000){
    categoria = "Ouro"
}
else if (experiencia <=8000){
    categoria = "Platina"
}
else if (experiencia <=9000){
    categoria = "Ascendente"
}
else if (experiencia <10000){
    categoria = "Imortal"
}
else {
    categoria= "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + categoria)