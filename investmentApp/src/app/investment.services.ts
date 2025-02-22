import {Injectable} from '@angular/core'
import { InvestmentInput, InvestmentResult } from './investment/investment.model';

@Injectable({providedIn:'root'})
export class InvestmentService{
    resultData?: InvestmentResult[]; 
   calculateInvestmentResults(data: InvestmentInput ) {
        const {initialInvestment, annualInvestment, expectedReturn, duration}=data;
         let investmentValue =data.initialInvestment;
         const annualData =[]
         for (let i = 0; i < data.duration; i++) {
           const year = i + 1;
           
           const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
           investmentValue += interestEarnedInYear + data.annualInvestment;
           const totalInterest =
             investmentValue - data.annualInvestment * year - data.initialInvestment;
             annualData.push({
             
             year: year,
             interest: interestEarnedInYear,
             valueEndOfYear: investmentValue,
             annualInvestment: data.annualInvestment,
             totalInterest: totalInterest,
             totalAmountInvested: data.initialInvestment + data.annualInvestment * year,
           });
         }
         //this.resultsData = annualData;
         this.resultData = annualData;
       }
     
}