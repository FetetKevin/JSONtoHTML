// Replace ./data.json with your JSON feed
fetch('./cities.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    //console.log(data)
    
    function create_btn(){
        let select = document.createElement('select');
        select.className = 'city';
        let elem = document.getElementById('cities');
        elem.appendChild(select);
        for(i=0; i<data.length;i++){
            let op = document.createElement('option');
            op.setAttribute('value', `${data[i].name}`);
            op.innerHTML = `${data[i].name}`;
            select.appendChild(op);
        }
        let btn = document.createElement('button');
        btn.className = 'btn';
        btn.innerHTML = 'click me';
        elem.appendChild(btn);
    }
    function show(){
        let btn = document.querySelector('.btn');
        btn.addEventListener("click", function(){
            let value = document.querySelector('.city').value;
            document.getElementById('res').innerHTML = value;
        })
    }
    create_btn();
    show();
  })
  .catch((err) => {
    // Do something for an error here
  })