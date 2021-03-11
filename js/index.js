// <ul>
//   <li><a class="active" href="/home">Accueil</a></li>
//   <li><a href="/presentation">Présentation</a></li>
//   <li><a href="/contact">Contact</a></li>
// </ul>

const tabs = [
  {
    label: 'Accueil',
    link: '/home',
    active: true,
  },
  {
    label: 'Présentation',
    link: '/presentation',
    active: false,
  },
  {
    label: 'Contact',
    link: '/contact',
    active: false,
  },
];

let menuHtml = '<ul>';
for (let tab of tabs) {
  menuHtml += `
    <li>
      <a
        class="${tab.active ? 'active' : ''}"
        href="${tab.link}">
          ${tab.label}
      </a>
    </li>
  `;
}
menuHtml += '</ul>';

document.querySelector('nav').innerHTML = menuHtml;
