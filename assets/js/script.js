// toggle mobile menu
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('#menu a');
const menuToggler = document.getElementById('menu-toggler');
const closeMenuBtn = document.getElementById('menu-close-btn');

function toggleMenu(event, prevent = true) {
  if (prevent) event.preventDefault();
  document.body.classList.toggle('no-scroll');
  menu.classList.toggle('show');
}

menuToggler.addEventListener('click', (event) => {
  toggleMenu(event);
});

closeMenuBtn.addEventListener('click', (event) => {
  toggleMenu(event);
});

menuLinks.forEach((link) => link.addEventListener(
  'click',
  (event) => toggleMenu(event, false),
));

// Dynamic Speakers insertion
const speakers = [
  {
    name: 'Mostafa',
    title: 'Software Freedom Activist',
    image: 'person1.jpg',
    bio: 'I support Software Freedom as it is the only way to achieve justice in IT.',
  },
  {
    name: 'Hanna',
    title: 'Digital Painter',
    image: 'person2.jpg',
    bio: 'I use Krita for my creative art works. I help others to do the same.',
  },
  {
    name: 'Reza',
    title: 'Lawer',
    image: 'person3.jpg',
    bio: 'I help individuals and companies to make sure noboby violate GPL licenses',
  },
  {
    name: 'Shirin',
    title: 'Laravel Developer',
    image: 'person4.jpg',
    bio: 'We deserve more that being merely operator of proprietary software.',
  },
];

const speakersPlaceHolder = document.querySelector('#speakers .persons');

speakers.forEach((speaker, index) => {
  speakersPlaceHolder.innerHTML += `
  <div class="person ${index > 1 ? 'mobile-hide' : ''}">
    <div class="person-graphic">
      <img src="./assets/img/${speaker.image}" alt="" />
    </div>
    <div class="person-info">
      <h4 class="person-name">${speaker.name}</h4>
      <p class="person-title"><em>${speaker.title}</em></p>
      <p class="person-bio">${speaker.bio}</p>
    </div>
  </div>
  `;
});

// Show more speackers by clicking on more button
const moreSpeakerButton = document.getElementById('toggle-more-speakers');
moreSpeakerButton.addEventListener(
  'click',
  (event) => {
    event.preventDefault();
    document.querySelectorAll('.mobile-hide').forEach((el) => {
      el.classList.toggle('mobile-hide');
    });
    moreSpeakerButton.style.display = 'none';
  },
);