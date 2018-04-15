(function () {
    'use strict';

    class Message {

        constructor(el, data) {
            this.el = el;
            this.data = data;
            this.render();

        }

        render() {

            this.el.innerHTML = `
                <form class="message">
                    <textarea class="message__input"></textarea>
                    <button type="message__submit">Отправить</button>
                </form>
        `;

        }

    }

    window.Message = Message;
})();

