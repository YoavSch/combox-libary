export class UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company

}
export class Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export class Geo {
  lat: string;
  lng: string;
}
export class Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
export class PostData {
  userId : number;
  id : number;
  title : string;
  body : string;
}
