import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../service/data.service';
import { Chat } from '../models/Chat';
import { creationChat } from '../mock/mock.chat';

@Component({
  template: `
  <div id="bodySansPadding" class="modal-body">
    <div class="card">
      <img id="imgPasTropGrande" class="card-img-top" src="{{chat.photoUrl}}" alt="photo">
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><span class="colgauche">Nom </span> <br/> {{chat.nom}} </li>
        <li class="list-group-item"><span class="colgauche">Age </span> <br/> {{chat.age}}  </li>
        <li class="list-group-item"><span class="colgauche">Poids </span> <br/> {{chat.poids}} </li>
        <li class="list-group-item"><span class="colgauche">Taille </span> <br/> {{chat.taille}} </li>
        <li class="list-group-item"><span class="colgauche">Race </span> <br/> {{chat.race}} <span class="coldroite"><button id="btnCom" type="button" class="btn btn-primary"> Adopter </button></span></li>
      </ul>
    </div>
  </div>
    `,
  styles: ['#bodySansPadding { padding: 0px; } #imgPasTropGrande { max-height: 34rem; } .colgauche { font-weight: bold; } .coldroite { float:right; } #btnCom { float: right; };']
})
export class ModalZoomPhotoComponent implements OnInit {

  chat: Chat;

  constructor(public activeModal: NgbActiveModal, private dataServ: DataService) { }

  ngOnInit(): void {
    this.dataServ.currentMessage.subscribe(chat => this.chat = chat);
  }
}

@Component({
  templateUrl: './adopter.component.html',
  styleUrls: ['./adopter.component.css']
})
export class AdopterComponent implements OnInit {

  listeChat: Chat[];
  message: string;

  constructor(private dataServ: DataService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.listeChat = creationChat();
    this.dataServ.currentMessage.subscribe(message => this.message = message);
  }

  select(chat: Chat): void {
    this.dataServ.changeMessage(chat);

    const modalRef = this.modalService.open(ModalZoomPhotoComponent);
    modalRef.componentInstance.name = 'zoomPhoto';
  }
}
