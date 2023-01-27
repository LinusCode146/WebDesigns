gsap.registerPlugin(Flip);

const links = document.querySelectorAll('.nav-item a');
const activeNav = document.querySelector('.active-nav');

links.forEach((link) => {
    link.addEventListener('click', (e) => {

        gsap.to(links, { color: 'black' });
        if( document.activeElement === link ) {
            gsap.to(link, { color: '#385ae0' });
        }

        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);
        Flip.from(state, {
            duration: 1.25,
            absolute: true,
            ease: 'elastic.out(1, 0.5)',
        });
    });
});


const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
    card.addEventListener('click', (e) => {
        const state = Flip.getState(cards);

        const isCardActive = card.classList.contains('active');
        cards.forEach((otherCards, otherIndexes) => {
            otherCards.classList.remove('active');
            otherCards.classList.remove('is-inactive');
            if(!isCardActive && index!== otherIndexes) {
                otherCards.classList.add('is-inactive');
            }
        });


        if(!isCardActive ) {
            card.classList.add('active');
        }

        Flip.from(state, {
            duration: 1,
            absolute: true,
            ease: 'expo.out',

        })
    })
})