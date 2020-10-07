export default class DataApi {
  getItems(): Promise<any[]> {
    return new Promise((resolve) =>
      setTimeout(
        () => resolve([{id: 1}, {id: 2}]),
        2000))
  }
}