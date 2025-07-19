import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuestionModel } from '../../models/question';
import { Question } from '../../services/question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: false,
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class Quiz implements OnInit, OnDestroy {

  QuizQuestion: QuestionModel[] = [];
  CurrentQuestionIndex: number = 0;
  selectedOptions: string = '';
  score: number = 0;
  showResults: boolean = false;
  start: boolean = false;

  timer: number = 15;
  interval: any;

  isLoading = true;
  error = '';

  constructor(private router: Router, private questionService: Question) { }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.questionService.getQuestions().subscribe({
      next: (response) => {
        this.QuizQuestion = response;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = "An error has occured : " + err.message;
        this.isLoading = false;
      }
    })
  }

  startQuiz() {
    this.start = true;
    this.startTimer();
  }

  startTimer(): void {
    this.clearTimer();
    this.timer = 15;
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.nextQuestion();
      }
    }, 1000)
  }

  nextQuestion(): void {
    if (this.selectedOptions === this.QuizQuestion[this.CurrentQuestionIndex].correct_answer) {
      this.score++;
    }
    this.selectedOptions = '';
    this.CurrentQuestionIndex++;

    if (this.CurrentQuestionIndex >= this.QuizQuestion.length) {
      this.clearTimer();
      this.router.navigate(['/results'], {
        queryParams: { score: this.score, totalQuestions: this.QuizQuestion.length }
      })
    } else {
      this.startTimer();
    }
  }

  clearTimer(): void {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  selectOption(option: string): string {
    this.selectedOptions = option;
    return this.selectedOptions
  }

}