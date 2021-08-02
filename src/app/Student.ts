export class Student{
    name!:string
    
    email!:string
    password!:string
    address!:string
    
    city!:string
constructor(
    name:string,
    email:string,
    password:string,
    address:string,
    city:string
){
    this.name=name;
    this. email=email;
    this.password=password;
    this.address=address;
    this.city=city;
}
}