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
    
    this.http.put('/api/skills/',card).subscribe(resp => {
      this.persistData();
    })
  }

  onShare() {
    window.open('https://www.linkedin.com/in/patryck-vieira-15b5a012b/', '_blank')
  }

  persistData(){
    this.http.get('/api/skills/').subscribe(resp => {
      window.localStorage.setItem('dataPersist', JSON.stringify(resp))
    })
  }

}
