// let number = [1,2,3,4,5];
// let doubles = [...number];
// console.log(doubles);

// function global()
// {
//     var a = 1;
// }

// global();
// console.log(a);

var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];
  
  function pluck(list, propertyName) {
    properties = [];
    for (const singer of list) {
        properties.push(singer[propertyName]);
    }
    return properties;
  }
  
  console.log( pluck(singers, 'name') );
  // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
  
  console.log( pluck(singers, 'band') );
  // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
  
  console.log( pluck(singers, 'born') );
  // [1948, 1950, 1967, 1964]

  function createPhoneNumber(numbers)
  {
    let number = "(";
    if(numbers.lenght != 10)
      return "The number provided is incorrect";
    for(let i=0;i<numbers.lenght;i++)
    {
      if(numbers[i] >= 10)
        return "The number provided is incorrect";
      if(i < 3)
      {
        if(i == 2)
          number+=`${number[i]} `;
        else
          number+=numbers[i];
      }
      else if(i < 5)
      {
        if(i == 2)
          number+=`${number[i]} `;
        else
          number+=numbers[i];
      }
    }
  }


  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"


  function findMissingNumbers(numbers)
  {
    let maxNumber = -Infinity;
    for (const number of numbers) {
      maxNumber = maxNumber > number ? maxNumber : number;
    }
    let appears = new Array(maxNumber);
    appears.fill(0);
    for (const number of numbers) {
      appears[number-1] = 1;
    }
    let missingNumbers = [];
    for(let i=0;i<numbers.lenght;i++)
      if(!numbers[i])
        missingNumbers.push(i+1);

    return missingNumbers;
  }

  findMissingNumbers([2, 1, 9, 5, 7, 3, 10]); // [4, 6, 8]