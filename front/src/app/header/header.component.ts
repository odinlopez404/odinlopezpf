import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user.model';
import { TokenService } from '../service/token.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  user: User = new User()
  id!: number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService

  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.userService.getUserById(1).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => console.log(error)
    );

    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else { this.isLogged=false;}
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
  login(){
    this.router.navigate(['/login'])
  }
}