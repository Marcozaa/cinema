import axios from "axios";

const instance = axios.create({
    //baseURL: "https://87.250.73.22/html/diCastri/ProgettoCinema"
    baseURL: "https://api.themoviedb.org/3",
    basePersonalDB: "https://87.250.73.22/html/Zanchin/ProgettoCinema"
})
export default instance;