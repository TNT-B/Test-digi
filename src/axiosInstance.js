import axios from 'axios';

const tokenInstance = axios.create({
    baseURL: 'https://dev-pos.digibird.io/api/v1/front/self',
});

tokenInstance.interceptors.request.use(
    (config) => {

        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Rlc3QtcG9zLmRpZ2liaXJkLmlvL2FwaS92MS9mcm9udC9sb2dpbiIsImlhdCI6MTY4OTIzMDE5NywiZXhwIjoxNjg5MjUyMDk3LCJuYmYiOjE2ODkyMzAxOTcsImp0aSI6Im52dnFuVTNyVUpuaDJJMWMiLCJzdWIiOiI1IiwicHJ2IjoiMWQwYTAyMGFjZjVjNGI2YzQ5Nzk4OWRmMWFiZjBmYmQ0ZThjOGQ2MyJ9.O4Bw3xZdETUkUsQ7RSlxdJL7cKxELhOy6pOOK2RUCuc';
        console.log(token)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default tokenInstance;