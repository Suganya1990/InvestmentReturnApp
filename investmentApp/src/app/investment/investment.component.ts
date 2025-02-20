import { Component, Input } from '@angular/core';
import { InvestmentInput, InvestmentResult } from './investment.model';

@Component({
  selector: 'app-investment',
  standalone: true,
  imports: [],
  templateUrl: './investment.component.html',
  styleUrl: './investment.component.css'
})
export class InvestmentComponent {
  @Input() investmentResults: InvestmentResult[] = [];

  



}
