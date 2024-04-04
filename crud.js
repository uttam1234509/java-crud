let data = []

function demo() {
    let fname = document.getElementById("fname").value
    console.log(fname);
    let agee = document.getElementById("age").value
    console.log(agee);
    let email = document.getElementById("mail").value
    console.log(email);
    let password = document.getElementById("pass").value
    console.log(password);
    let person = { fname: fname, age: agee, mail: email, pass: password }
    data.push(person)
    tender()
}

const tender = () => {
    document.getElementById("tbody").innerHTML = data.map((item, index) => {
        return `<tr>
            <td>${item.fname}</td>
            <td>${item.age}</td>
            <td>${item.mail}</td>
            <td>${item.pass}</td>
            <td  onclick="deletedata(${index})"><button>Delete</button></td>
            <td  onclick="editdata(${index})"><button>Edit</button></td>
        </tr>`;
    }).join("");
}

const deletedata = (index) => {
    data.splice(index, 1)
    tender()
}

const editdata = (inx) => {
    const editrecord = data.filter((item, index) => { return inx === index })[0];
    document.getElementById("fname").value = editrecord.fname;
    document.getElementById("age").value = editrecord.age;
    document.getElementById("mail").value = editrecord.mail;
    document.getElementById("pass").value = editrecord.pass;
}

