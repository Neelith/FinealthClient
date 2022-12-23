export class CashMovement{
  public cashMovementId : number = 0;
  public description : string = '';
  public date : Date | null = null;
  public amount : number = 0;
  public categoryId : number = 0;

  public constructor(){}
}
