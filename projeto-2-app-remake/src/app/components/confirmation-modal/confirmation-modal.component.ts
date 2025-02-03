import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'src/app/services/confirmation.service';

export type confirmationType = {
  email: string,
  professor: string,
  emailReceived: boolean,
  emailRead: boolean,
  ra: string,
  student: string
}

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})

export class ConfirmationModalComponent implements OnInit {

  nomeAluno = '';
    raAluno = '';
  
    constructor(private fb: FormBuilder, private route: ActivatedRoute, private dialogRef: MatDialogRef<ConfirmationModalComponent>, private confirmationService: ConfirmationService){
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        nome: ['', Validators.required],
        lido: [],
        recebido: []
      });
    }
    title = 'projeto-2-app-remake';
    loginForm: FormGroup
  
    ngOnInit(): void {
      this.route.queryParams.subscribe((params) => {
        this.nomeAluno = params['name'];
        this.raAluno = params['email'];
      });
    }
  
    onSubmit(){
      let data: confirmationType = {
        email: this.loginForm.value.email,
        professor: this.loginForm.value.nome,
        emailRead: this.loginForm.value.lido,
        emailReceived: this.loginForm.value.recebido,
        ra: this.raAluno,
        student: this.nomeAluno
      }
      this.confirmationService.sendConfirmation(data).subscribe({
        next: (data) => {
          this.closeDialog();
        },
      })
    }

    closeDialog(): void {
      this.dialogRef.close(true);
    }
    closeDialogNull(): void {
      this.dialogRef.close(null);
    }
}
