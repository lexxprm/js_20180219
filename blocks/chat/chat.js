(function () {
    'use strict';

    class Chat {

        constructor(el, data) {
            this.el = el;
            this.data = data;
            this.render();

        }

        render() {

            this.el.innerHTML = `
                <div class="chat">
                    <div class="chat_title"></div>
                    <div class="chat_name"></div>
                    <div class="chat_message"></div>
                </div>
        `;

        }

    }

    window.Chat = Chat;
})();

