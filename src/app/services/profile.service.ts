import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

 @Injectable()
export class ProfileService {
  private username:string;
  private clientid ='18789f45750f653fb7e6';
  private clientsecret ='96ddca063f54ba6ccf087fec1ea9587a6dd66cf9';
  constructor(private http:HttpClient) { 
    console.log("service is now ready");
    this.username='Mireille95'; 
}
getProfileInfo(){
  return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + 
  this.clientid + "&client_secret=" +this.clientsecret);
}
} 