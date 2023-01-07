import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: FormGroup

  constructor(private FormBuilder: FormBuilder) {
    this.form = this.FormBuilder.group({
      email:['', [Validators.required, Validators.email,]],
      password:['',[Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z].{0,}')]]
    })
  }

  ngOnInit() { }

  get Mail(){
    return this.form.get("email");
   }

  get MailValid() {
    return this.Mail?.touched && !this.Mail?.valid
  }

  get Password(){
    return this.form.get("password");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }
}
