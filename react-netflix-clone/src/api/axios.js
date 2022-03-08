import axios from "axios";

const instance = axios.create({
    baseUrl: "https://api.themoviedb.org/3",
    params: {
        api_key: "9787fd33cb9511e792e7c3cd811e2294",
        language: "ko-KR"
    },
});

export default instance;