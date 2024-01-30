import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Review } from '../object';

@Injectable({
  providedIn: 'root',
})

export class ReviewsServiceService {

  public getRequest : string = "http://localhost:8080/reviews"

  constructor(private http : HttpClient) { }

  getAllReviews() : Observable<Review[]> {
    return this.http.get<Review[]>(this.getRequest);
  }
}
