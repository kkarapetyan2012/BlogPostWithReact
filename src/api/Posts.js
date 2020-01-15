import { baseUrl } from "./url"
import Service from "../service/service"

const endpoint = "posts/"

class Posts {
    get() {
        return fetch(`${baseUrl}${endpoint}`)
    }

    set(post) {
        return fetch(`${baseUrl}${endpoint}`, {
          method: "POST",
          body: JSON.stringify(post),
          headers: {
            'Content-Type': 'application/json'
          }
        })
    }

    remove(id) {
      return fetch(`${baseUrl}${endpoint}${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    post(newPost) {
      return fetch(baseUrl+"?access_token="+Service.get("token"),{
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newPost)
      }).then(res=>res.json())
      .catch(err=>console.log(err))
    }

    edit(post,id,data){
      return fetch(`${baseUrl}${endpoint}${id}`,{
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    }

    // update(id, data) {
    //   return fetch(`${baseUrl}${endpoint}${id}`, {
    //     method: "PUT",
    //     body: JSON.stringify(data),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    // }
}

export default Posts;