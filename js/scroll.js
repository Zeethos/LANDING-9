const linkPortfolio = document.querySelector('.link__portfolio');
const portfolioSection = document.querySelector('#portfolio');
const linkAbout = document.querySelector('.link__about');
const aboutSection = document.querySelector('#about__us');
const linkContact = document.querySelector('.link__contact');
const contactSection = document.querySelector('#contact');

linkPortfolio.addEventListener('click', (e) => {
    e.preventDefault();
    portfolioSection.scrollIntoView({behavior: "smooth", block: "start"})
})

linkAbout.addEventListener('click', (e) => {
    e.preventDefault();
    aboutSection.scrollIntoView({behavior: "smooth", block: "start"})
})

linkContact.addEventListener('click', (e) => {
    e.preventDefault();
    contactSection.scrollIntoView({behavior: "smooth", block: "start"})
})