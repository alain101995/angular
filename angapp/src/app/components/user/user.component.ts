import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any; //any permite cualquier tipo de dato
  constructor() {
    console.log('constructor ran...')
  }

  ngOnInit() {
    console.log('ngOnInit ran...')

    this.name = 'John Doe';
    this.age = 30;
    this.address = {
      street:'50 Main st',
      city:'Boston',
      state:'MA'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
    this.hello = 1; //Puede ser boolean, string, numerico gracias a any
  }
  onClick(){
    this.name='Alain';
    this.hobbies.push('New Hobby');
  }
  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby); //unshift agrega a la lista desde el inicio 1:Hello
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0;i <this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1); //splice saca el dato del array
      }
    }
  }
}

interface Address{
  street:string,
  city:string,
  state:string
}
