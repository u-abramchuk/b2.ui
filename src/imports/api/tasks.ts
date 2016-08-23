export default class Task {
  constructor(id: number, text: string) {
    this.id = id;
    this.text = text;
  }

  public id: number;
  public text: string;
}