import axios from "axios";

export function load(url, setState) {
    axios.get(url)
        .then(res => setState(res.data.data))
        .catch(err => console.error(err))
}
