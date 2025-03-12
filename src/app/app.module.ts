import {NgModule} from '@angular/core'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { UserInputComponent } from './user-input/user-input.component'
import { InvestmentComponent } from './investment/investment.component'
import { Form, FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
    declarations:[
        AppComponent,
        HeaderComponent,
        UserInputComponent,
        InvestmentComponent
    ],
    imports:[FormsModule, BrowserModule],
    bootstrap:[AppComponent]
})
export class AppModule{

}