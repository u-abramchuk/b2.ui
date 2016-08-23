export default class WorkItem {
  constructor(id: string, text: string) {
    this.id = id;
    this.text = text;
  }

  public id: string;
  public text: string;
}