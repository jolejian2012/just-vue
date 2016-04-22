// index.js
// JustClear updated at 2016-04-22

const API = ` https://hacker-news.firebaseio.com/v0/topstories.json`;
const store = {};

export default store;

store.fetchData = () => {
    fetch(API)
    .then((respone) => respone.json())
    .then((data) => {
        console.log(data);
        return data;
    })
    .catch((error) => {
        console.log(error);
    })
}
