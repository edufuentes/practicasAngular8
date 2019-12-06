import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente();
  private titulo:string = "Crear Cliente";

  constructor() { }

  ngOnInit() {
  }

  public create(): void{

        console.log("Clicked new cliente!!");
        console.log(this.cliente);


  }

  public getTitulo(): string{
  
    return this.titulo;
  
  }

}
