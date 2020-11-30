import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  days = Array("mon","tue","wen","thu","fri","sat","sun"); // just titles for html
  weeks = [
    ["","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""]
  ]; // 2D array for fill with month numbers
  
  //week and day to obtain current day block in calendar
  Todayrow = 0;
  Todaycol = 0;

  constructor() {
    // getting dates to know first and last monthes' numbers and days
    var nowDate = new Date();
    var firstDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1);
    var lastDate = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0);
    
    var lastNum = Number(lastDate.getDate()); // 31 || 30 ending of month

    var firstDay; // which day is the 1st in month
    var ind = 1; // start filling array from
    
    // get first day with georgian week system *starts with monday
    (firstDate.getDay() == 0) ?  // java system reads sunday as 1st dat in a week
    firstDay = 6: // if its sunday make it last
    firstDay = firstDate.getDay()-1; 
    

    // this loop goes 6times(the quant rows of array)
    // child loop goes 7 times(for week days)
    for (let week = 0; week < this.weeks.length; week++) {
      for (let days = 0; days < 7; days++) {  
        if(ind > lastNum)
          ind = 1; // if it goes above 31 or 30 make it 1
          
        // fill last month's left days before start fillin this month
        if(days < firstDay && week == 0){
          (lastNum == 31) ? 
          this.weeks[week][days]= ((30) - (firstDay-days-1)).toString(): 
          this.weeks[week][days]= ((31) - (firstDay-days-1)).toString();
          continue;
        }
        // get today row and col
        if(new Date().getDate() == ind){
          this.Todayrow = week;
          this.Todaycol = days;
        }
        // fill this month
        this.weeks[week][days]=ind.toString();
        ind++;
      } 
    }
  }

  ngOnInit(): void {}

}
