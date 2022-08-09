


class Userservice {
    sayHi(){
        console.log('Hi') ; 
    }
} 

class Component { 
    constructor(public user : Userservice){} ; 
}


class Injector  { 
    private _container = new Map() ; 

    // map gurantees the order of keys 
    // key can be anything boolean ,string etc.. 
    constructor( private _providers : any [] = []){
        this._providers.forEach(service => this._container.set(service,new service()))
    } ; 
    get(service : any ) { 
        const serviceInstance = this._container.get(service) ; 
        if(!serviceInstance) {
            throw Error('No provider found ') ;
             
        }
        return serviceInstance ; 
    }
}


// somewher in application 

const injector = new Injector([Userservice]);
const component = new Component(injector.get(Userservice)) ; 
component.user.sayHi() ; 