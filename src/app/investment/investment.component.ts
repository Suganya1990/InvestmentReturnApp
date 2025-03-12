import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.services';
@Component({

  selector: 'app-investment',
  standalone: false,
  templateUrl: './investment.component.html',
  styleUrl: './investment.component.css'
})
export class InvestmentComponent {
  private investmentService = inject(InvestmentService);

 get results (){
  return this.investmentService.resultData
 }



}
