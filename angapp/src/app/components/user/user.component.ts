import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({ //Decorator
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy, AfterViewInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any; //any permite cualquier tipo de dato
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataService: DataService) {
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...')

    this.name = 'John Doe';
    this.email = 'test@test.com'
    this.age = 30;
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
    this.hello = 1; //Puede ser boolean, string, numerico, etc, gracias a any

    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }
  onClick() {
    this.name = 'Alain';
    this.hobbies.push('New Hobby');
  }
  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby); //unshift agrega a la lista desde el inicio 1:Hobby
    return false;
  }

  ngOnDestroy() {
    //Se llama cuando una directiva, pipe o servicio es destruido
    console.info('destroy');
  }

  ngAfterViewInit() {
    //Se llama después de que la vista de un componente se ha inicializado por completo
    console.log('after View init');
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1); //splice saca el dato del array
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street: string,
  city: string,
  state: string
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}
