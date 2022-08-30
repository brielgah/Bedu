function deepEqual(a, b) {
    if(typeof(a) == typeof(b))
    {
        if(typeof(a) == 'object')
        {
            let keysObjectA = Object.keys(a);
            let keysObjectB = Object.keys(b);
            if(keysObjectA.length == keysObjectB.length)
            {
                for (let index = 0; index < keysObjectA.length; index++) {
                    let equal = deepEqual(a[keysObjectA[index]],b[keysObjectB[index]]);
                    if(!equal)
                        return false;
                }
            }
            else
                return false;
        }
        else
            return a == b;
    }
    else
        return false;
    return true;
}

const john = {
firstName: 'John',
lastName: 'Doe'
}
console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false

function chunk(array, size) {
    let newArray = [];
    let left = 0;
    while(left < array.length)
    {
        let index = size;
        let arrayTemp = []
        while(index-- && left < array.length)
        {
            arrayTemp.push(array[left++]);
        }
        newArray.push(arrayTemp);
    }
    return newArray;
};
  
const data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
  

function frequency(string) {
   let ascii = new Array(127);
   ascii.fill(0);
    for (let index = 0; index < string.length; index++)
    {
        ascii[string.charCodeAt(index)]++;
    }   
    let frequencies = {};
    let index = 0;
    for (const character of ascii) {
        if(character != 0)
            frequencies[String.fromCharCode(index)] = character;
        index++;
    }
    return frequencies;
}

console.log('Test 1:', frequency('cccbbbaaa'))
// {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}