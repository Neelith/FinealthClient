export class CashMovement {
  //A quanto pare IndexedDb ha problemi con AutoIncrement e una proprietà settata
  //@ts-ignore
  public cashMovementId: number;
  public description: string = '';
  public date!: string;
  public amount: number = 0;
  public categoryId: number = 0;

  public constructor() {}
}
