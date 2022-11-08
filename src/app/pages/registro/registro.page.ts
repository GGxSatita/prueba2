import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../../service/servicio.service'
import {FormBuilder,FormControl,Validators} from '@angular/forms';
import {Usuario} from '../../interfaces/usuario';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(
    private fb : FormBuilder,
    apiPrueba : ServicioService
  ) { }
  public crearFormulario(){
    this.fb{
      firstName = new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(15)]),
      lastName = new FormControl('', [Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
      age = new FormControl(0, [Validators.required, Validators.min(18),Validators.max(98)]),
      userName = new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(10)]),
      password = new FormControl('',  [Validators.required, Validators.minLength(8),Validators.maxLength(16)]),
      bithDate = new FormControl('',[Validators.required, Validators.min(1991),Validators.max(2022)]),
      gender = new FormControl('', [Validators.required])
    }
  }


  ngOnInit() {
  }

}
