import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  onLike(card: any) {
    card.likes = card.likes + 1;
  }

  onShare() {
    window.open('https://www.linkedin.com/in/patryck-vieira-15b5a012b/', '_blank')
  }

}
