import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPageComponent } from './pages/currency-page/currency-page.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../core/services/auth.guard';
import { CurrencyService } from './services/currency.service';



@NgModule({
  declarations: [
    CurrencyPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CurrencyPageComponent, canActivate: [AuthGuard] }]),
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [CurrencyService]
})
export class CurrencyModule { }
