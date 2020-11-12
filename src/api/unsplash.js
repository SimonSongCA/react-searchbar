import axios from 'axios';

export default axios.create ({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ZeD8I6L3Crv9VYMW6eWjcsteoFTcg9-MaFBIkuVuVmo'
    }
});

