import template from './auth.pug';


export class Auth {

    constructor(el, data) {
        this.el = el;
        this.data = data;

        this.render();

        let form = this.el.querySelector('form');

        form.addEventListener('submit', event => {

          let user_name = document.querySelector('.auth__name').value
          let user_pass = document.querySelector('.auth__pass').value
          console.log(user_name, user_pass);
            event.preventDefault();


        });


    }

    render() {

        this.el.innerHTML = template();

    }

}


export const defaultLogin = 'user';
