import { Component, OnInit } from '@angular/core'
import { JokesService } from '../jokes.service'
import { ActivatedRoute } from '@angular/router'
import { map, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  joke = {}

  constructor(
    private route: ActivatedRoute,
    private jokesService: JokesService
  ) {
    this.route.params
      .pipe(
        map(params => params.id),
        switchMap(id => jokesService.getJokeById(id))
      )
      .subscribe(data => {
        this.joke = data.value
        this.isLoading = false
      })
  }

  ngOnInit() {}
}
