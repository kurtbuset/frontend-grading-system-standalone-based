import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Student } from '@app/_models/student';

const baseUrl = `${environment.apiUrl}/enrollments`

@Injectable({ providedIn: 'root' })
export class StudentService {
  private studentSubject = new BehaviorSubject<Student[]>([]);
  public subjects$ = this.studentSubject.asObservable();

  constructor(private http: HttpClient) {}

  getStudentsByTeacherSubjectId(id: number){
    return this.http.get<Student[]>(`${baseUrl}/${id}`)
  }
  
}
