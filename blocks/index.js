import {Auth, defaultLogin} from './auth/auth';
import {Chat} from './chat/chat';
import {Message} from './message/message';

window.addEventListener('DOMContentLoaded', () => {
  

    let auth = new Auth(document.querySelector('.js-auth'), {});
    let chat = new Chat(document.querySelector('.js-chat'), {});
    let message = new Message(document.querySelector('.js-message'), {});
});


//
//       index
//   /     \       \
//  Auth    Chat   Message
//           \
//           Message
