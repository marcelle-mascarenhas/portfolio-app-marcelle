
import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api-node-portfolio.herokuapp.com/",
});

export default instance;