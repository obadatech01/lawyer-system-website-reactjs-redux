import axios from 'axios';

const baseURL = axios.create({ baseURL: "http://localhost:4000" });
// const baseURL = axios.create({ baseURL: "http://127.0.0.1:4000" });

export default baseURL;