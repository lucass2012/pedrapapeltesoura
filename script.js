function playRockPaperScissor (player1,player2){
    
    const player1win = "Jogador 1 venceu!"
    const player2win = "Jogador 2 venceu!"
    const draw = "Empate!"
    const player1invalid = "Algum dos jogadores fez escolha inválida"
    

    if (player1 === "Pedra" && player2 === "Tesoura" || player1 === "Tesoura" && player2 === "Papel" || player1 === "Papel" && player2 === "Pedra") {
        return player1win
    }
    else if (player2 === "Pedra" && player1 === "Tesoura" || player2 === "Tesoura" && player1 === "Papel" || player2 === "Papel" && player1 === "Pedra"){
        return player2win
    }
    else if (player1 === player2){ 
        return draw
    }
    else if (player1 !=="Pedra","Papel","Tesoura" || player2 !=="Pedra","Papel","Tesoura"){
        return player1invalid
    }
}
  

console.log (playRockPaperScissor("Pe","Tesoura"))