import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nested For Loop';

users=[
  {name:"anil",email:"anil@gmail.com",phone:7778889,accounts:['facebook','email','linkedin']},
  {name:"ram",email:"ram@gmail.com",phone:6677778,accounts:['Youtube','yahoo','linkedin']},
  {name:"peter",email:"peter@gmail.com",phone:999999,accounts:['yahoo','insta','linkedin']},
  {name:"bruce",email:"bruce@gmail.com",phone:10000,accounts:['whatsapp','gmail','linkedin']}
]


}
