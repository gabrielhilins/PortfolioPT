/* Show menu */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* Menu Show*/
/* Validar se a constante existe */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/* Menu Hidden */
/* Validar se a constante existe */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/* Remover menu do celular */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));


/* Scroll sections active Link */

/* Alterar fundo do cabeçalho */
function scrollHeader() {
    const header = document.getElementById('header');
    // when the scroll is greater than 50 viewport height, add the scroll-header class to header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/* Show scroll up */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is greater than 350 viewport height, add the show-scroll class to scroll-top class
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/* About tabs */
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active')
        });

        tab.classList.add('tab__active');
    });
});

/* Formulário de contato */
const contatoForm = document.getElementById('contato-form'),
    contatoName = document.getElementById('contato-name'),
    contatoEmail = document.getElementById('contato-email'),
    contatoSubject = document.getElementById('contato-subject'),
    contatoMessage = document.getElementById('contato-message'),
    mensagemErro = document.getElementById('mensagem-erro');

const enviarEmail = (e) => {
    e.preventDefault();

    // Verificar se o campo a ser preenchido tem algum tipo de valor
    if (
        contatoName.value === '' ||
        contatoEmail.value === '' ||
        contatoSubject.value === '' ||
        contatoMessage.value === ''
    ) {

        // Mensagem de erro
        mensagemErro.textContent = 'Preencha todos os campos obrigatórios 😉'
    }

    else {
        // serviceID - TemplateID - #form - publickey
        emailjs.sendForm(
            'service_2p69k8o',
            'template_cw32qnj',
            '#contato-form',
            '_Gm7QNIMivzH5JnTV'
        ).then(() => {
            // Show menssage and add color, window + dot to open emoji
            mensagemErro.classList.add('color-first');
            mensagemErro.textContent = 'Mensagem enviada com sucesso! ✔️';

            // Remover mensagem depois de 7 segundos
            setTimeout(() => {
                mensagemErro.textContent = '';
            }, 5000);
        },
            (error) => {
                alert('Oxe! Alguma coisa aconteceu de errado...', error);
            }
        );

        // limpar campos de entrada
        contatoName.value = '';
        contatoEmail.value = '';
        contatoSubject.value = '';
        contatoMessage.value = '';
    }
};

contatoForm.addEventListener('submit', enviarEmail);


/* Efeito Máscara */

/*const items = document.querySelectorAll(".portifolio__img");
const mascara = document.querySelectorAll(".mascara-off");
items.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
        item.classList.add("mascara-on");
        mascara[index].classList.remove("mascara-off");
        mascara[index].classList.add("mascara-on");
    });

    item.addEventListener("mouseout", () => {
        item.classList.remove("mascara-on");
        mascara[index].classList.remove("mascara-on");
        mascara[index].classList.add("mascara-off");
    });
});*/
