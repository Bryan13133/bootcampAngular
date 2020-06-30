export class User{
  id: number;
  name: string;
  password: string;
  email: string;
  phoneNumber: string;
  birthDate: string;
  termsAndConditions: boolean;


  constructor(values: any = {}){
    Object.assign(this, values);
  }
}
