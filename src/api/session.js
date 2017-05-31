import CONST from '../constants'

class SearchFriend {
    static searchFriend(query) {
        let apiPath = CONST.GOOGLE_SEARCH_FRIENDS;
        const request = new Request(apiPath, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({query: query})
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        })
    }
}

export default SearchFriend;