{
    // 1.泛型
    function dump<T extends {length:number}|string|any[]>(value: T):number {
        return value.length
    }
    // 2.泛型
    function dump1<T>(value: T[]):number {
        return value.length
    }
    let a=dump<string>("string")
    let b=dump1<number>([1,2,3])
    console.log(a);
    console.log(b);
}
{
    class Dump<T>{
        arr:T[] = []
        public push(...item:T[]){
            this.arr.push(...item);
        }
    }
    type User={name:string,age:number}
    const u1:User = {name:"hyla",age:22}
    const u2:User = {name:"hyl",age:22}

    const result=new Dump<User>();
    result.push(u1,u2)
    console.log(result);
    
}
{
    // 练习
    interface UserType{
        name: string
        age: number
    }
    class User<T>{
       public constructor(private user:T){}
       public get():T{return this.user;}
    }
    const user = new User<UserType>({name:"hyla",age:22})
    console.log(user.get().name);
    
}
{
    // practice练习
    interface Actor<A,B> {
        title: string
        isLock:A
        content:B
    }
    type Com={
        name: string
        age?: number
    }
    const hyla:Actor<boolean,Com> ={
        title: "hyla",
        isLock:false,
        content:
            {
                name: "hyla",
            }
           
    }
    console.log(hyla);
    
}