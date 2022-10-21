let BaseVector = {
    x:0,
    y:0,

    add:function(v){
        if(!(v instanceof Vector)){
            throw "Error!";
        }
        this.x += v.x;
        this.y += v.y;
    }
}

getLength = () => Math.sqrt(this.x * this.x + this.y * this.y);

toString = () => "Vector's data : " + this.x + " " + this.y + "\n"; //Equals to: toString: function(){}, or toString(){} as well

let Vector = function(x,y){
    this.x = x;
    this.y = y;
}

Vector.prototype = BaseVector;

let v1 = new Vector(10,20);
let v2 = new Vector(30,30);

console.log("Valore : " + v1);
console.log("Valore : " + v2);



//Below, functions closures topic


let CreateCounter = function(){
    let base = 0;

    let c =  function(){
        let newVal = base;
        newVal += 1;
        base = base + 1;
        return base;
    }

    return c;
}

let c1 = CreateCounter();
let c2 = CreateCounter();

let v = c1();

v = c1();
v = c2();
v = c1();