function loaded() {
    i = 0;
    while (localStorage.getItem(i)) {
      const node = document.createElement('li');
      const firstname = localStorage.getItem(i);
      const textnode = document.createTextNode(firstname);
      node.appendChild(textnode);
      document.getElementById('demo').appendChild(node);
      i++;
    }
  }
  
  function addEntry() {
  
    i = 0;
    while (localStorage.getItem(i)) {
      i++;
    }
  
    localStorage.setItem(i, document.getElementById("user_input").value);
  
    const node = document.createElement('li');
    const firstname = localStorage.getItem(i);
    const textnode = document.createTextNode(firstname);
    node.appendChild(textnode);
    document.getElementById('demo').appendChild(node);
  
  }
  
  function clearStorage() {
    localStorage.clear();
    document.location.reload(true);
  }