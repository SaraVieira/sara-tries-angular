import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  base = 'http://api.icndb.com/jokes'
  constructor(private http: HttpClient) {}

  random(count: number) {
    return this.http.get(`${this.base}/random/${count}`)
  }

  getJokeById(id: number) {
    return this.http.get(`${this.base}/${id}`)
  }
}
