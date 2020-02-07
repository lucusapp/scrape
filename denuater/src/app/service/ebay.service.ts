import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EbayService {
  readonly UrlApi = 'http://localhost:3000/api/scrape'

  readonly UrlApi2 = 'http://localhost:3000/api/scrape/data'

  constructor(private http:HttpClient) { }

  getInventario (){
    return this.http.get(this.UrlApi2)
    .pipe(map(data=>{
      return data['producto']
    }))
  }

  postproducto(producto){
    return this.http.post(this.UrlApi,producto)     
    }

  putproducto(producto){
      return this.http.post(this.UrlApi,`/$(producto._id)`,producto)     
      }
  deleteproducto(_id){
      return this.http.post(this.UrlApi,`/$(_id)`,)     
        }
  }
  //  let  params = new HttpParams().append('limit','2');
  //  params = params.append('offser','0');




  //  return this.http.get(`http://localhost:3000`,{
  //     params,
  //     headers
  //  });
  
// }
