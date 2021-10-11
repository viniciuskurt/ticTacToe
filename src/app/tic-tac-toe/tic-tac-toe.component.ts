import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
})
export class TicTacToeComponent {
  //criando jogador
  currentPlayer: string = 'O';
  //criando vencedor
  winner: string = '';

  //criando matriz de strings para armazenar as jogadas
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  //função para processar a jogada, passando parâmetros linha e coluna:
  processPlay(line: number, col: number) {
    //verifica se posição está vazia e vencedor ainda vazio:
    if (this.board[line][col] == '' && this.winner == '') {
      //qual posição jogada pelo jogador atual:
      this.board[line][col] = this.currentPlayer;

      //-----verifica vencedor
      if (this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
      }

      //trocando jogador:
      if (this.currentPlayer == 'O') {
        this.currentPlayer = 'X';
      } else {
        this.currentPlayer = 'O';
      }
    }
  }

  // função checkWinner - verifica vencedor
  // recebe um jogador tipo string e retorna um booleano
  checkWinner(player: string): boolean {
    // laço para interar em cada linha
    for (let i = 0; i < this.board.length; i++) {
      //condição para verificar se linha inteira é de um jogador
      if (
        this.board[i][0] == player &&
        this.board[i][1] == player &&
        this.board[i][2] == player
      ) {
        return true;
      }
    }
    // laço para interar em cada coluna
    for (let i = 0; i < this.board.length; i++) {
      //condição para verificar se coluna inteira é de um jogador
      if (
        this.board[0][i] == player &&
        this.board[1][i] == player &&
        this.board[2][i] == player
      ) {
        return true;
      }
    }
    //condição para verificar diagonal
    if (
      this.board[0][0] == player &&
      this.board[1][1] == player &&
      this.board[2][2] == player
    ) {
      return true;
    }
    if (
      this.board[0][2] == player &&
      this.board[1][1] == player &&
      this.board[2][0] == player
    ) {
      return true;
    }
    return false;
  }

  //função reiniciar partida
  reset() {
    this.currentPlayer = 'O';
    this.winner = '';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }
}
