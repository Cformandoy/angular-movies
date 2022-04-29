import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResult } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }


  getDataMovies(){
    return this.http.get<ApiResult>('http://www.omdbapi.com/?s=star&apikey=a734d703');

  }

  searchDataMovie(text:string){
    return this.http.get<ApiResult>(`http://www.omdbapi.com/?s=${text}&apikey=a734d703`);



  }
}
