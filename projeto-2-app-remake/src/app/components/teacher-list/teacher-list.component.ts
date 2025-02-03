import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'src/app/services/confirmation.service';

export type Professor = {
  email: string,
  emailRead: boolean,
  emailReceived: boolean,
  date: string,
  professor: string
}

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {

  professores: Array<Professor> = []
  searchTerm: string = '';

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    
  }

  getProfessoresByTerm(){
    this.confirmationService.getProfessors(this.searchTerm).subscribe({
      next: (professores) => {
        this.professores = professores;
      }
    })
  }
  
  onSubmit(){
    this.getProfessoresByTerm();
  }

}
