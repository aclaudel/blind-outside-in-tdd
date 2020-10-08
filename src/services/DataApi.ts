export default class DataApi {
  getItems(): Promise<any[]> {
    return new Promise((resolve) =>
      setTimeout(
        () => resolve([{id: 1, name: 'Arnaud'}, {id: 2, name: 'Jose'}]),
        2000))
  }
}