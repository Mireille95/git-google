import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

 @Injectable()
 
  export class ProfileService {
  private username:string;
  private access_token ='f603cfa5afa1d31a966fecacd928a1ab2b9f2b15';
  
  constructor(private http:HttpClient) { 
    console.log("service is now ready");
    this.username='Mireille95'; 
   }
  getProfileInfo(){
  return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + 
  this.access_token + "&access_token=" +this.access_token);
   }

   getProfileRepos(){
  return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=" + 
  this.access_token + "&eccess_token=" +this.access_token);
  }
  updateProfile(username:string){
  this.username = username;
}

} 