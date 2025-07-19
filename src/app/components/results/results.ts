import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  standalone: false,
  templateUrl: './results.html',
  styleUrl: './results.css'
})
export class Results implements OnInit {

  score: number = 0;
  totalQuestions: number=0;

  constructor(private activatedRoute : ActivatedRoute){}

  ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe(params =>{
        this.score = +params['score'] || 0;
        this.totalQuestions = +params['totalQuestions'] || 0;

      })
  }

  restardQuiz():void{
    console.log('Restard Quiz')
  }
}
