import People from "./People";
import Posts from "./Posts";

class MyApi {
     constructor() {
        this.people = new People();
        this.posts = new Posts();
     }
}

const Api = new MyApi();
export default Api;
