export const flightEndpoint = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/RU/RUB/ru-RU/SVO-sky/JFK-sky/2021-01'
export const userEndpoint = 'https://jsonplaceholder.typicode.com/users/1'
export const transformDate = (data,param) => new Date(data.Quotes[0].QuoteDateTime).toLocaleString('en',  param );
export const dateToString = (date, param) => date.toLocaleString('en', param);