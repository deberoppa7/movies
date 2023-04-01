export default ({ config }) => {

    const COMMON = {
        SECRET_KEY : 'e8c1d4f386fbad0ac5b8f6aecfdf4fb3',
        BASE_IMAGE_URL : 'https://image.tmdb.org/t/p',
        ASYNC_STORAGE : {
            FAVORITES : '@FAS'
        }
    }

    if (process.env.MODE === 'production') {
        return {
            ...config,
            extra : {
                ...COMMON,
                MODE : 'production',
                API : "https://api.themoviedb.org/3"
            }
        };
    }
    else{
        return {
            ...config,
            extra : {
                ...COMMON,
                MODE : 'development',
                API : 'https://api.themoviedb.org/3'
            }
        };
    }
   
};