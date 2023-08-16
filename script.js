const api_url = "https://jsonplaceholder.typicode.com/users";

let data = ""; 

getApi(api_url);

async function getApi(url) {
    const response = await fetch(url);
    data = await response.json();
    show(data);
}

function show(dataArray) {
    document.querySelector("thead").innerHTML = `<tr>
                                                     <th>ID</th>
                                                     <th>NAME</th>
                                                     <th>USER-NAME</th>
                                                     <th>E-MAIL</th>
                                                     <th>ADDRESS</th>
                                                     <th>PHONE</th>
                                                     <th>WEBSITE</th>
                                                     <th>COMPANY</th>
                                                </tr>`;

    for (let num = 0; num < dataArray.length; num++) {
        document.querySelector("tbody").innerHTML += `<tr>
                                                    <td>${dataArray[num].id} </td>
                                                    <td>${dataArray[num].name} </td>
                                                    <td>${dataArray[num].username} </td>
                                                    <td>${dataArray[num].email} </td>
                                                    <td><ul><li><p><span>Street : </span>${dataArray[num].address.street}</p></li>
                                                            <li><p><span>Suite : </span>${dataArray[num].address.suite}</p></li>
                                                            <li><p><span>City : </span>${dataArray[num].address.city}</p></li>
                                                            <li><p><span>Zipcode : </span>${dataArray[num].address.zipcode}</p></li>
                                                            <li><p><span>Latitude : </span>${dataArray[num].address.geo.lat}</p></li>
                                                            <li><p><span>Longitude : </span>${dataArray[num].address.geo.lng}</p></li>
                                                        </ul>
                                                    </td>
                                                    <td>${dataArray[num].phone} </td>
                                                    <td>${dataArray[num].website} </td>
                                                    <td><ul><li><p><span>Name : </span>${dataArray[num].company.name}</p></li>
                                                            <li><p><span>Catch-Phrase : </span>${dataArray[num].company.catchPhrase}</p></li> 
                                                            <li><p><span>BS : </span>${dataArray[num].company.bs}</p></li>
                                                       </ul>
                                                    </td>
                                                </tr>`
                                                
    }
}


