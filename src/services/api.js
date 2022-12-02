
import axios from 'axios';

const instance = axios.create({
    baseURL: "https://back-portfolio-marcelle.glitch.me/",
});

export default instance;