export class Recipe {
  constructor(
    public _id: string,
    public title: string,
    public editMode: boolean,
    public img: string,
    public cur_version: any,
    public prev_version: any,
  ) {
  }
}
