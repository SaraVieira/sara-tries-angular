import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { JokesComponent } from './jokes/jokes.component'
import { JokeComponent } from './joke/joke.component'

@NgModule({
  declarations: [AppComponent, JokesComponent, JokeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'jokes',
        pathMatch: 'full'
      },
      {
        path: 'jokes',
        component: JokesComponent
      },
      {
        path: 'joke/:id',
        component: JokeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
