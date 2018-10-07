import { Component, OnInit, Input } from '@angular/core'
import { JokesService } from '../jokes.service'

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  @Input()
  jokes

  jokes = []
  isLoading = false
  numberOfJokes = 12

  getThings(number: number) {
    return this.jokesService.random(number).subscribe(data => {
      this.jokes = data.value
      this.isLoading = false
    })
  }

  search(count: string) {
    this.isLoading = true
    this.getThings(count)
  }

  constructor(private jokesService: JokesService) {
    this.isLoading = true
    this.getThings(this.numberOfJokes)
  }
}
