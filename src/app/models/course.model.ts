export class Course {
  public id? : number = 1;
  public name? : string = '';
  public description? : string = '';
  public fee? : number =  0;

  constructor( name: string, description: string, fee: number) {
    // this.id = id;
    this.name = name;
    this.description = description;
    this.fee = fee;
  }
}
