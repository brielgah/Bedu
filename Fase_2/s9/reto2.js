const data = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" },
  ];
  const headers = ["name", "height", "place"];
  
  const table = createTable();
  document.getElementById("mountains").appendChild(table);
  console.log(table.innerHTML);

  function createTable()
  {
    let table = document.createElement("table");
    table.appendChild(createHeader())
    data.forEach(element => {
        table.appendChild(createRow(element));
    });
    return table;
  }

  function createHeader()
  {
    let header = document.createElement("tr");
    headers.forEach(element =>{
        let column = document.createElement("th");
        column.textContent = element;
        header.appendChild(column);
    });
    return header;
  }

  function createRow(row) {
    let rowElement = document.createElement("tr");
    for (const head of headers) {
        let column = document.createElement("td");
        column.textContent = row[head];
        if(head == 'height')
            column.style.textAlign = 'right';
        rowElement.appendChild(column);
    }
    return rowElement;
  }