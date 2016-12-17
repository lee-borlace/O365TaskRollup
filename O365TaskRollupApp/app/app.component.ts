import {Welcome} from './app.module'
import {Component} from '@angular/core'


@Component({
    selector: 'app-main',
    template: `<h1>${Welcome.getMessage()}</h1>`
})
export class AppComponent {  }