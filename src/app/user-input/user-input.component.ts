import { Component,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.services';
@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment  = '0';
  enteredExpectedReturn='5';
  enteredDuration = '0';

  constructor(private investmentService: InvestmentService){}
  onSubmit(){
    this.investmentService.calculateInvestmentResults({initialInvestment: + this.enteredInitialInvestment,
      annualInvestment: + this.enteredAnnualInvestment,
      expectedReturn:  + this.enteredExpectedReturn,
      duration : +   this.enteredDuration})
    

  }

}
