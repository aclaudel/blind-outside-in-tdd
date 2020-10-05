export default class DataApi {
    getItems(): Promise<any[]> {
        return Promise.resolve([{id: 1}, {id: 2}])
    }
}