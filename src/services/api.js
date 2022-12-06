
import axios from 'axios';

const instance = axios.create({
    baseURL: "https://marcelle-portfolio-back.glitch.me/",
});


export default instance;