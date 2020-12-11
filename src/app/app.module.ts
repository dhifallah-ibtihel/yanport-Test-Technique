import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputsComponent } from './inputs/inputs.component';
import { GridComponent } from './grid/grid.component';
import { OrderComponent } from './order/order.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    GridComponent,
    OrderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([{
      path:'', 
      component:InputsComponent
    },
    {path:'Order',
     component:OrderComponent
    },
    {path:'Grid',
  component:GridComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
