import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-update-about',
  templateUrl: './update-about.component.html',
  styleUrls: ['./update-about.component.css']
})
export class UpdateAboutComponent implements OnInit {
  id!: number;
  user: User = new User();
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.userService.getUserById(1).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.userService.updateUser(this.id, this.user).subscribe(
      (data) => {
        this.goToHome();
      },
      (error) => console.log(error)
    );
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}

