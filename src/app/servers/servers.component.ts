import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewSever = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test server';
  username = '';

  constructor() {
    setTimeout(() => {
      this.allowNewSever = true
    }, 2000);
  }

  onCreateSever() {
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
