import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectService } from '@app/_services/subject.service';
import { AccountService } from '@app/_services/account.service';
import { first } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  templateUrl: 'subject-list.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class SubjectListComponent implements OnInit {
  subjects: any[];
 
  constructor(
    private subjectService: SubjectService,
    private accountService: AccountService,
  ) {  }  
  
  ngOnInit() {  
    // get all subject by the teacher using the account.id of teacher
    const teacher = this.accountService.accountValue;
    // console.log(teacher.id)
    // then returning the id of subject_teacher_assignment
    this.subjectService
      .getAllSubjects(Number(teacher.id))
      .pipe(first())
      .subscribe((subjects) =>{
        this.subjects = subjects
        // console.log(this.subjectService.subjectValue)
        this.subjectService.subjectSubject.next(null)
      });
  }

}
