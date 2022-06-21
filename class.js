/* class cat {
    let property=1;     //will produce error
    this.property=2;
}
*/

class cat{
    constructor(){
        let property=1;
        this.something=2;

    }
    methods(){
       
        console.log(this.property);
        console.log(this.something);
    }
}

const a = new cat();

a.methods();