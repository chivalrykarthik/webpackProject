class parent{
    constructor(){
        console.log("parent constructor called");
    }
    add(a,b){
        return a+b;

    }
}



class child extends parent{
    constructor(){
        console.log("My first webpack app updatedNO:7");
        super();
    }
}




let obj = new child();
console.log(obj.add(1,2));
