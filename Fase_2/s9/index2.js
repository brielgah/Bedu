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
  
  console.log(createNode('h1', 'Hello World')); // <h1>Hello World</h1>
  console.log(createNode('h1', createNode('strong', 'Hello World')));
  document.getElementById("quote").appendChild(createNode("footer", createNode("strong", "- Karl Popper")))
  const link = document.getElementById('link');

  link.href = "http://google.com";
  link.className = "styled-link";
  console.log(link); // <a id="link" href="http://google.com">Some cool link</a>
