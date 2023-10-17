import axios from 'axios';

export const fetcher = async url => await axios.get(url).then(res => res.data);
