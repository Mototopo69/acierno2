import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-esercizio3',
  imports: [CommonModule, FormsModule],
  templateUrl: './esercizio3.html',
  styleUrl: './esercizio3.css'
})
export class Esercizio3 {
  Studenti = [
    { nome: 'Sampietro', voto: 10 },
    { nome: 'Sampognaro', voto: 10 },
    { nome: 'Sidoti', voto: 1 },
    { nome: 'Maldifassi', voto: 2 },
    { nome: 'Ahmed', voto: 4 }
  ];

  // Nuovo studente da aggiungere
  nuovoStudente = { nome: '', voto: 0 };
  
  // Variabile per controllare la visibilità del form
  mostraFormAggiunta = false;

  // Metodo per rimuovere studenti
  rimuoviStudenti(indice: number) {
    this.Studenti.splice(indice, 1);
  }

  // Metodo per mostrare/nascondere il form
  toggleFormAggiunta() {
    this.mostraFormAggiunta = !this.mostraFormAggiunta;
  }

  // Metodo per aggiungere un nuovo studente
  aggiungiStudente() {
    if (this.nuovoStudente.nome.trim() && this.nuovoStudente.voto >= 0) {
      this.Studenti.push({
        nome: this.nuovoStudente.nome,
        voto: this.nuovoStudente.voto
      });
      // Reset del form
      this.nuovoStudente = { nome: '', voto: 0 };
      this.mostraFormAggiunta = false;
    }
  }
}