import logo from './image/icon.svg';
import styles from './Topic.css';

export default function Topic({ name }) {
    const li = document.createElement('li');
    li.classList.add('topic');
    li.addEventListener('click', () => {
        alert(name);
    })
    li.innerHTML = `<img  src= "${logo}" alt="${name}">${name} `;
    return li;
}
