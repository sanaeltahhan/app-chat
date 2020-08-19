import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  providers: [NgbCarouselConfig]
})
export class AccueilComponent implements OnInit {
  imagesLink = [`https://www.zooplus.fr/magazine/wp-content/uploads/2019/06/comprendre-le-langage-des-chats-768x576.jpg`, `https://cdn.shopify.com/s/files/1/0326/2057/6900/articles/bienfaits-du-chat-sur-les-humains2_1600x.jpg?v=1588095563`, `https://bit.ly/3l1UICI`,`https://bit.ly/3iZncev`];
  //images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);


  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}

