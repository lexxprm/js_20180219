import {Message} from '../message/message';
import message from '../message/message';
import template from './chat.pug';

export class Chat {

    constructor(el, data) {
        this.el = el;
        this.data = data;
        this.render();

    }

    render() {
        this.el.innerHTML = template();
        let chat_message = document.querySelector('.chat__message')
        

    }

}
