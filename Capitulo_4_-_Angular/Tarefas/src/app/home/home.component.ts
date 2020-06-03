import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount = 4;
  btnText = 'Adicione uma tarefa';
  btnRemover = 'Remover tarefas';
  objetivoText = 'Objetivos de vida';
  objetivos = [];

  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this._data.objetivo.subscribe(res => this.objetivos = res);
    this._data.changeGoal(this.objetivos);
    this.itemCount = this.objetivos.length;
  }

  addItem() {
    this.objetivos.push(this.objetivoText);
    this.objetivoText = '';
    this.itemCount = this.objetivos.length;
    this._data.changeGoal(this.objetivos);
  }

  removeItem(i) {
    this.objetivos.splice(i, 1);
    this._data.changeGoal(this.objetivos);
    this.itemCount = this.objetivos.length;
  }

}
