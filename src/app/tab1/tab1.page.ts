import { Component } from '@angular/core';
import { ExampleService } from '../services/example.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  api;
  environment;

  example$ = this.exampleService.get();
  constructor(private exampleService: ExampleService) {
    this.api = environment.api;
    this.environment = environment.name;
    console.log(this.api);
    console.log(this.environment);
  }

}
