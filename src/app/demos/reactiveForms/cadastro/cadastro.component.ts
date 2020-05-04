import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: [
  ],
})
export class CadastroComponent implements OnInit {

    cadastroForm : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      nome: new FormControl('')
    });
  }

  adicionarUsuario(){
    let x = this.cadastroForm.value;
    console.log('teste 3');
  }

}
