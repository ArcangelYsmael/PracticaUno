import axios from "axios";

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:"Bearer YTW3gQ0bu6SbklY725nV161em32gckNQEnSOkRbvxxO0uNsl4oAy9xxFsLevSAepwlR60qgiPtVSRVKhxoy-qmx7EeMV3BuhkeuZhpf2rAov9JyBFGOUwfx25_MbYHYx"
    }
});