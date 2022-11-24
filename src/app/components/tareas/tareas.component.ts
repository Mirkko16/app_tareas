import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  
  listaDeTareas: Tarea[]=[];
  nombreTarea:string='';

  constructor(){ }

  ngOnInit(): void {    
  }

  AgregarTarea(){
      const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    
    this.listaDeTareas.push(tarea);

    this.nombreTarea ='';
  }
  eliminar(i:number){
    this.listaDeTareas.splice(i,1);
  }

  actualizarTarea(tarea:Tarea,i:number){
    this.listaDeTareas[i].estado = !tarea.estado;
  }

}
