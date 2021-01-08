import { Component, OnInit } from '@angular/core';
import { GetTasksService } from '../get-tasks.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  days = Array("Mon","Tue","Wen","Thu","Fri","Sat","Sun");
  weeks = [
    ["","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""]
  ];
  Tasks = ["1","2","3"];
  ATasks = [];
  categories = [
    ["category one"],
    ["category one"],
    ["category one"],
    ["category one"],
    ["category one"]
  ];
  projects = [
    ["project one"],
    ["project one"],
    ["project one"],
    ["project one"],
    ["project one"]
  ];
  
  TaskQuants = Array();
  Todayrow = 0;
  Todaycol = 0;
  
  selectedAll = false;
  
  calendarDisplay  = true;
  tasksListDisplay = false;
  newTaskDisplay   = false;
  taskDescDisplay  = false;
  
  DescSelector = 0;
  
  constructor(private tasks:GetTasksService) {
    this.tasks.getTasks().subscribe( (data:[]) => {
      this.Tasks = data;
      console.warn(this.Tasks);
    });
    
    var nowDate = new Date();
    var firstDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1);
    var lastDate = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0);
    
    var lastNum = Number(lastDate.getDate()); // 31 || 30 ending of month

    var firstDay;
    var ind = 1;
    
    (firstDate.getDay() == 0) ?  
    firstDay = 6: 
    firstDay = firstDate.getDay()-1; 
    
    for (let week = 0; week < this.weeks.length; week++) {
      for (let days = 0; days < 7; days++) {  
        if(ind > lastNum)
          ind = 1;
          
        var taskquant = this.tasks.getQuantTasks(12);
        this.TaskQuants.push(taskquant);
            
        if(this.Todayrow == 0 && this.Todaycol == 0){
          if(new Date().getDate() == ind){
            this.Todayrow = week;
            this.Todaycol = days;
          }
        }

        if(days < firstDay && week == 0){
          (lastNum == 31) ? 
          this.weeks[week][days]= (30 - (firstDay-days-1)).toString(): 
          this.weeks[week][days]= (31 - (firstDay-days-1)).toString();
          continue;
        }
        
        this.weeks[week][days]=ind.toString();
        ind++;
      } 
    }
  }
  Done(id){
    
  }

  // NAVIGATION
  
  Back(){
    if(this.tasksListDisplay){
      this.tasksListDisplay = false;
      this.calendarDisplay = true;
    }
    if(this.taskDescDisplay){
      this.taskDescDisplay = false;
      this.tasksListDisplay = true;
    }
    else if(!this.tasksListDisplay && !this.taskDescDisplay){
      this.calendarDisplay = true;
      this.newTaskDisplay = false;
    }
  }
  selectAll(){
    // this.selectedAll = !this.selectedAll;
    this.selectedAll ? 
    this.selectedAll = false:
    this.selectedAll = true;
  }
  tasksListShow(id){
    this.calendarDisplay = false;
    this.tasksListDisplay = true;
    //bla bla bla get tasks from api
  }
  taskDescShow(selector){
    this.tasksListDisplay = false;
    this.taskDescDisplay = true;
    this.DescSelector = selector;
    
  }
  newTaskShow(){
    this.tasksListDisplay = !this.tasksListDisplay;
    this.newTaskDisplay = !this.newTaskDisplay;
    // this.newTaskDisplay ? 
    // (this.newTaskDisplay = false, this.tasksListDisplay = true):
    // (this.newTaskDisplay = true, this.tasksListDisplay = false);
  }
  

  ngOnInit(): void {}

}
