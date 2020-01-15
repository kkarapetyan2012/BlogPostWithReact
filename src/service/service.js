export default class Service {
    static set(key, data) {
        try {
            const value = JSON.stringify(data);
            localStorage.setItem(key, value);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    static get(key) {
        try {
            const res = localStorage.getItem(key);
            const data = JSON.parse(res) || null;
            return data;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    static remove(key) {
        try {
            localStorage.removeItem(key);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}