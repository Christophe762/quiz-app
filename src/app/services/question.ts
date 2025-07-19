import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { QuestionModel, QuizApiResponse } from '../models/question';
import * as he from 'he';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class Question {

  private apiUrl = environment.apiEndpoint;

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<QuestionModel[]>{
    return this.http.get<QuizApiResponse>(this.apiUrl).pipe(
    map(response => {
      return response.results.map(q => {
        const decodedCorrect = he.decode(q.correct_answer);
        const decodedIncorrect = q.incorrect_answers.map(ans => he.decode(ans));
        const allAnswers = this.shuffleArray([...decodedIncorrect, decodedCorrect]);

        return {
          ...q,
          question: he.decode(q.question),
          correct_answer: decodedCorrect,
          incorrect_answers: decodedIncorrect,
          answers: allAnswers
        };
      });
    })
  );
  }

  private handleError(error : HttpErrorResponse) : Observable<never>{
    console.log('API error :' , error);
    return throwError(() => new Error('Something went wrong: please try again later'))
  }

    shuffleArray(arr: string[]): string[] {
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
  
}
