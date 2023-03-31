fetch("http://universities.hipolabs.com/search?country=India").then((data)=>{
return data.json();
}).then((objectdata)=>{
    //console.log(objectdata[0]);
    let tabledata="";
    objectdata.map((values)=>{
        tabledata+=` <tr >
        <td></td>
        <td>${values.web_pages}</td>
        <td>${values.country}</td>
        <td>${values.name}</td>
        <td>${values.domains}</td>
      </tr>`;
    });

    document.getElementById('table').innerHTML=tabledata;



    
})