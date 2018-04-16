import {Message} from '../message/message';
import template from './chat.pug';

export class Chat {

    constructor(el, data) {
        this.el = el;
        this.data = data;
        this.render();

    }

    render() {
        console.log(2143);
        this.el.innerHTML = template();
    }

}

