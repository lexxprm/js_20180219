import template from './message.pug';

export class Message {

    constructor(el, data) {
        this.el = el;
        this.data = data;
        this.render();

        let form = this.el.querySelector('form');

        form.addEventListener('submit', event => {
        let message = document.querySelector('.message__input').value
          console.log(message);
      

            event.preventDefault();
        });

    }

    render() {

        this.el.innerHTML = template();
    }

}
