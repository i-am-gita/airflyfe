import { Component, OnInit } from '@angular/core';
import {AirlinesService} from './airlines.service';
import {MonthlyAirlineRatings} from '../../core/data/MonthlyAirlineRatings';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css']
})
export class AirlinesComponent implements OnInit {

  monthlyRatings: MonthlyAirlineRatings = {
    rating: null,
  };

  counter: number = 1;
  constructor(private airlinesService: AirlinesService) { }

  ngOnInit(): void {

    this.airlinesService.getPastMonthRatings().subscribe(data => {
      this.monthlyRatings = data;
      console.log(data);
    })
  }

  roundNumber(num: number){
    return Math.round((num + Number.EPSILON) * 100) / 100
  }

}
