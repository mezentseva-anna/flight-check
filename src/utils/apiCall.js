import { flightEndpoint,userEndpoint} from './variables';

export const fetchUser = async (payload) => {
    const user = await fetch(userEndpoint);
    const userJSON = await user.json();
    if (userJSON.email === payload.email && userJSON.address.city === payload.password) {
        window.localStorage.setItem('user', JSON.stringify(userJSON));
        return userJSON
    }
};

export const fetchFlight = async () => {
    const data = await fetch(flightEndpoint, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '0933592171msh0b00e0e1eb3c5e0p18ef42jsn87400e160e5b',
            'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
            'useQueryString': true
        }
    })
    const dataJSON = await data.json()
    return dataJSON
}
