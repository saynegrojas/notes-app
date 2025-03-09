export class Note {
  public id: string = new Date().getTime().toString();
  public title: string = '';
  public content: string = '';
  public createdAt: Date = new Date();
}
