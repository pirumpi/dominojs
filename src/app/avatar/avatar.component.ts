import { Component, OnInit, Input } from '@angular/core';
import toonavatar from 'cartoon-avatar';


@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() direction: string;
  url = toonavatar.generate_avatar();

  constructor() { }

  ngOnInit() {
  }

}
