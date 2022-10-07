// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-server',
//   templateUrl: './server.component.html',
//   styleUrls: ['./server.component.css']
// })
// export class ServerComponent implements OnInit {
//   serverId: number = 10;
//   serverStatus: string = 'offline';
//   serverCreationStatus = 'No server created';
//   allowNewServer = true;

//   constructor() { }

//   ngOnInit(): void {
//   }

//   getServerStatus(){
//     return this.serverStatus;
//   }

//   onCreateServer(){
//     console.log('server is created');
//     this.serverCreationStatus = "server was created";
//   }

// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'online';
  serverCreationStatus = 'No Server Created';
  allowNewServer = true;

  constructor(private router: Router, private currentRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  getServerStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }

  gotoAccounts() {
    this.router.navigate(['accounts'], { relativeTo: this.currentRoute });
    //as we have given relative path it does
  }
}