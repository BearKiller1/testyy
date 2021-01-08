import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetTasksService {
  link = "http://localhost/scheduler%20API/API/post/read.php";
  
  constructor(private tasks:HttpClient) {}
  getTasks(){
    var data = this.tasks.get(this.link);
    console.log(data);
    return this.tasks.get(this.link);
  }
  getQuantTasks(date){
    return 12;
  }
}
