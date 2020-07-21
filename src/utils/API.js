import axios from "axios";

const BASEURL = 'https://randomuser.me/api/'

export default {
    search: function() {
        return axios.get(BASEURL + '?results=50&nat=us');
    }
}