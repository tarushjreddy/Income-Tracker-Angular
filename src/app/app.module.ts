import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { MainPageComponent } from './main-page/main-page.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BudgetComponent } from './budget/budget.component';
import { ItemCardComponent } from './budget/item-card/item-card.component';
import { EditComponent } from './edit/edit.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
// import { MyDialogComponent } from './my-dialog/my-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemComponent,
    BudgetComponent,
    ItemCardComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
