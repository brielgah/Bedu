const paragraphs = document.body.getElementsByTagName('p')

console.log('Colección de nodos: ', paragraphs);

console.log('Primer nodo: ', paragraphs[0]);
console.log('Segundo nodo: ', paragraphs[1]);
console.log('Tercer nodo: ', paragraphs[2]);
document.body.insertBefore(paragraphs[2],paragraphs[0])

const h1 = document.createElement('h1');
h1.appendChild(document.createTextNode("Hello world"));
console.log(h1);
document.body.appendChild(h1);