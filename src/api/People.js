import { baseUrl } from "./url";

// const endpoint = "people"

// class People {
//     get() {
//         return fetch(`${baseUrl}${endpoint}`)
//     }

// }

const link = {
    people: "people/",
    login: "people/login"
}

export class People {

    get() {
        return fetch(`${baseUrl}${link.people}`)
    }

    postLogin(user) {
        return fetch(`${baseUrl}${link.login}`,{
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    
    getById(id) {
        return fetch(`${baseUrl}${link.people}${id}`)
                .then(response => response.json())
    }
    
    registerUser(data) {
        return fetch(`${baseUrl}${link.people}`,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

export default People;