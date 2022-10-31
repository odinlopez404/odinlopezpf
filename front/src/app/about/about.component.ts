import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../model/user.model';

import { UserService } from '../service/user.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
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

  updateUser(id: number) {
    this.router.navigate(['update-user', 1]);
  }
}