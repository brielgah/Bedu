// Crear un function constructor Vec el cual representa un vector en dos dimensiones. Recibe dos parámetros x y y, ambos valores numéricos que deben ser las propiedades del objeto.

// Agregar los siguientes métodos al prototype de Vec:

// plus: Recibe otro vector como parámetro y retorna un nuevo vector con la suma de ambos vectores.

// minus: Recibe otro vector como parámetro y retorna un nuevo vector con la diferencia de ambos vectores.

// length: Retorna la longitud del vector, es decir, la distancia del punto (x, y) desde el origen (0, 0).

const Vector = function(x,y)
{
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(vector2)
{
    return new Vector(vector2.x+this.x,vector2.y+this.y);
}

Vector.prototype.minus = function(vector2)
{
    return new Vector(this.x-vector2.x,this.y-vector2.y);
}

Vector.prototype.length = function()
{
    return Math.sqrt(this.x**2+this.y**2);
}

const Group = function()
{
    this.list = [];
      
}

Group.from = function from(numbers)
{
    let group = new Group();
    group.list = [...numbers];
    return group;
}  

Group.prototype.add = function(number)
{e
    if(!this.has(number))
        this.list.push(number);
}

Group.prototype.has = function(number)
{
    return this.list.includes(number);
}

const group = Group.from([1, 2, 3, 4, 5]);
console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false

group.add(10);
console.log(group.has(10)); // true