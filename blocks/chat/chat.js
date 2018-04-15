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
                    <span class="chat_title"></span>
                    <span class="chat_name"></span>
                    <span class="chat_message"></span>
                </div>
        `;

        }

    }

    window.Chat = Chat;
})();

