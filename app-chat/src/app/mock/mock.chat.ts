import { Chat } from '../models/Chat';

export function creationChat(): Chat[] {

  const listChat: Chat[] = [];

  const chat1: Chat = {
    nom: 'Chat',
    age: 2,
    poids: 5,
    taille: 30,
    race: 'chat',
    photoUrl: 'https://www.zooplus.fr/magazine/wp-content/uploads/2019/11/chaton-errant-768x512.jpeg'
  };

  const chat2: Chat = {
    nom: 'Chat2',
    age: 3,
    poids: 6,
    taille: 35,
    race: 'chat',
    photoUrl: 'https://i.pinimg.com/474x/d1/97/74/d19774cdf0a1e491da63942c36ad05f7.jpg'
  };

  const chat3: Chat = {
    nom: 'Chat3',
    age: 3,
    poids: 6,
    taille: 35,
    race: 'chat',
    photoUrl: 'https://i.skyrock.net/8403/75598403/pics/3000074727_1_3_73EXcdG8.jpg'
  };

  const chat4: Chat = {
    nom: 'Chat4',
    age: 3,
    poids: 6,
    taille: 35,
    race: 'chat',
    photoUrl: 'https://www.wikichat.fr/wp-content/uploads/sites/2/comment-soigner-une-plaie-dun-chat.jpg'
  };

  const chat5: Chat = {
    nom: 'Chat5',
    age: 3,
    poids: 6,
    taille: 35,
    race: 'chat',
    photoUrl: 'https://www.sciencesetavenir.fr/assets/img/2020/01/17/cover-r4x3w1000-5e21bf77a1547-chartreux-3298051-1920.jpg'
  };

  const chat6: Chat = {
    nom: 'Chat6',
    age: 3,
    poids: 6,
    taille: 35,
    race: 'chat',
    photoUrl: 'https://staticr1.blastingcdn.com/media/photogallery/2020/2/13/660x290/b_1200x680/chat-combien-de-temps-pouvez-vous-le-laisser-seul_2400441.jpg'
  };

  const chat7: Chat = {
    nom: 'Chat7',
    age: 3,
    poids: 6,
    taille: 35,
    race: 'chat',
    photoUrl: 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/d/a/3/da3553c6d4_50163614_coronavirus-chats.jpg'
  };

  const chat8: Chat = {
    nom: 'Chat8',
    age: 3,
    poids: 6,
    taille: 35,
    race: 'chat',
    photoUrl: 'https://resize.prod.docfr.doc-media.fr/rcrop/720,400,center-middle/img/var/doctissimo/storage/images/fr/www/animaux/chat/choisir-chat/chat-de-gouttiere-vs-chat-europeen/709693-4-fre-FR/chat-de-gouttiere-vs-chat-europeen.jpg'
  };

  const chat9: Chat = {
    nom: 'Chat9',
    age: 3,
    poids: 6,
    taille: 35,
    race: 'chat',
    photoUrl: 'https://images.sudouest.fr/2014/12/31/57ebcb7366a4bd6726a93901/widescreen/1000x500/rien-ne-dit-qu-il-deviendra.jpg'
  };

  const chat10: Chat = {
    nom: 'Chat10',
    age: 3,
    poids: 6,
    taille: 35,
    race: 'chat',
    photoUrl: 'https://www.courrierinternational.com/sites/ci_master/files/styles/image_original_1280/public/illustrations/thumbnails/033_5800455_5c7ac69389949_0.jpg?itok=HVdksvc9'
  };

  listChat.push(chat1);
  listChat.push(chat2);
  listChat.push(chat3);
  listChat.push(chat4);
  listChat.push(chat5);
  listChat.push(chat6);
  listChat.push(chat7);
  listChat.push(chat8);
  listChat.push(chat9);
  listChat.push(chat10);

  return listChat;
}
