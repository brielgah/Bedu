let images = document.body.getElementsByTagName('img');
console.log(images)
for(let index=0;index<images.length;index++)
{
    document.body.appendChild(createNode('h1',images[index].alt));
}
while(images.length)
{
    images[0].remove();
}

console.log(images);
function createNode(type, child) {
    const node = document.createElement(type);
    if(typeof child === "string") {
        const text = document.createTextNode(child);
        node.appendChild(text);
      } else {
        node.appendChild(child);
      }
  
    return node;
  }
