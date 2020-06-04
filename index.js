let n = 0

update = () => {
    // console.log('uploding...')
    n += 1;
    item1 = document.getElementById('input1').value;
    item2 = document.getElementById('input2').value;
    if ((item1 != "") || (item2 != "")) {

        document.getElementById("indicator").innerHTML = ""
        if (n == 1) {
            // console.log('here n is 1')
            itemjsonarray = [[item1, item2]]
        }

        else {
            itemjsonarray = itemjsonarray.concat([[item1, item2]]);
            localStorage.setItem('file', JSON.stringify(itemjsonarray));
            ls = localStorage.getItem('file');
            itemjsonarray1 = JSON.parse(ls);
            // console.log(itemjsonarray);
        }
        localStorage.setItem('items', JSON.stringify(itemjsonarray))
        liform = JSON.parse(localStorage.getItem('items'))



        let tablebody = document.getElementById('tablebody');
        itemslist = liform;
        let str = "";
        for (i = 0; i < itemslist.length; i++) {
            str += `
        <tr scope='row'>
        <th>${i + 1}</th>
        <td>${itemslist[i][0]}</td>
        <td>${itemslist[i][1]}</td>
        <td> <button type="submit" class="btn btn-sm btn-danger"  onclick= klicked(${i})>DELETE</button></td>
        </tr>`;
        }
        tablebody.innerHTML = str;
    }
    else {
        itemjsonarray = Array()
        document.getElementById("indicator").style.color = "red"
        document.getElementById("indicator").innerHTML = "<em>please fill the above columns</em>"
    }
}

function otherupdate() {
    let str = "";
    for (i = 0; i < itemslist.length; i++) {
        str += `
        <tr scope='row'>
        <th>${i + 1}</th>
        <td>${itemslist[i][0]}</td>
        <td>${itemslist[i][1]}</td>
        <td> <button type="submit" class="btn btn-sm btn-danger"  onclick= klicked(${i})>DELETE</button></td>
        </tr>`;
    }
    tablebody.innerHTML = str;
}





//CALLING A FUNCTION
document.getElementById('button1').addEventListener("click", update);




function klicked(item) {
    console.log('i clicked on ' + item);
    itemslist.splice(item, 1);
    itemjsonarray = itemslist;
    otherupdate();
    localStorage.removeItem(itemslist[item])
}

