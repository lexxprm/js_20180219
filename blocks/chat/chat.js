(function () {
    'use strict';

    class Chat {

        constructor(el, data) {


        }

        render() {

            this.el.innerHTML = `
                <!-- тут будет форма чата какая?-->
                <form class="auth">
                    <input class="auth__name" name="login"/>Login
                    <button class="auth__submit">Login</button>
                </form>
        `;

        }

    }

    window.Chat = Chat;
})();

