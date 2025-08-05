//import styles
import './styles.css';

const form = document.getElementById('form');
const place = document.getElementById('place');

form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents page reload?

    const location = place.value.trim(); //get rid of any unnecessary spaces

    
})