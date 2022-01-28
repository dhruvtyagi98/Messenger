export class User {
  constructor(
    public name: string,
    public email: string,
    public phone: number,
    public password: string,
    public confirm_password: string,
  ){}

  confirmPassword(){
    return this.password == this.confirm_password ? true : false;
  }
}
