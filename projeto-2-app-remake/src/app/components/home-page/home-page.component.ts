import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

export type Aluno = {
  name: string;
  ra: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  alunos: Array<Aluno> = [{
    name: "Lucas",
    ra: "a1111"
  }, {
    name: "Pedro",
    ra: "a2222"
  },{
    name: "João",
    ra: "a3333"
  },{
    name: "Maria",
    ra: "a4444"
  } ]

  constructor(private fb: FormBuilder, private matDialog: MatDialog, private router: Router, private snackBar: MatSnackBar){}
  
    ngOnInit(): void {
      
    }
  
    onSubmit(){
  
    }
  
    openModal(aluno: Aluno){
 
      this.router.navigate([], {
        queryParams: { name: aluno.name, email: aluno.ra },
        queryParamsHandling: 'merge', // Mantém os outros parâmetros da URL
      });
      const dialogRef = this.matDialog.open(ConfirmationModalComponent, {
        width: '700px',
        height: '600px',
        disableClose: true,
        data: aluno,  
      })
  
      dialogRef.afterClosed().subscribe((res) => {
        if(res){
          this.router.navigate([], {
            queryParams: { name: null, email: null },
            queryParamsHandling: 'merge',
          });
    
          this.snackBar.open('Enviado com sucesso!', 'Fechar', {
            duration: 4000, // Duração em milissegundos
            horizontalPosition: 'right', // Posição horizontal
            verticalPosition: 'top', // Posição vertical
          });
        }
      });
    }

}
