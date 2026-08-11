const cl = console.log;

const stdForm = document.getElementById('stdForm')
const fnameControl = document.getElementById('fname')
const lnameControl = document.getElementById('lname')
const emailControl = document.getElementById('email')
const contactControl = document.getElementById('contact')
const stdContainer = document.getElementById('stdList')

let stdArr = [
    {
        fname: "John",
        lname: "Doe",
        email: "john@gmail.com",
        contact: "9876543210",
        stdId: "std101"
    },
    {
        fname: "Rahul",
        lname: "Sharma",
        email: "rahul@gmail.com",
        contact: "9876543211",
        stdId: "std102"
    },
    {
        fname: "Priya",
        lname: "Patil",
        email: "priya@gmail.com",
        contact: "9876543212",
        stdId: "std103"
    },
    {
        fname: "Sneha",
        lname: "Deshmukh",
        email: "sneha@gmail.com",
        contact: "9876543213",
        stdId: "std104"
    },
    {
        fname: "Amit",
        lname: "Joshi",
        email: "amit@gmail.com",
        contact: "9876543214",
        stdId: "std105"
    },
    {
        fname: "Pooja",
        lname: "Kulkarni",
        email: "pooja@gmail.com",
        contact: "9876543215",
        stdId: "std106"
    },
    {
        fname: "Akash",
        lname: "Pawar",
        email: "akash@gmail.com",
        contact: "9876543216",
        stdId: "std107"
    }
];


function onCreateStdList(arr) {
    let res = '';

    arr.forEach((ele, i) => {
        res += `<tr>
                    <td>${i + 1}</td>
                    <td>${ele.fname}</td>
                    <td>${ele.lname}</td>
                    <td>${ele.email}</td>
                    <td>${ele.contact}</td>
                    <td><i onclick="onEditStdList(this)" class="fa-solid fa-pen-to-square text-success"></td>
                    <td><i onclick="onDeleteStdList(this)" class="fa-solid fa-trash text-danger"></td>
                </tr>`
    });

    stdContainer.innerHTML = res;
}

onCreateStdList(stdArr)




function onStdAdd(eve) {
    eve.preventDefault();

    let newStd = {
        fname : fnameControl.value,
        lname : lnameControl.value,
        email : emailControl.value,
        contact : contactControl.value,
        stdId : Date.now().toString()
    }

    stdArr.push(newStd)
    stdForm.reset();

    let tr = document.createElement('tr')
    tr.className = 'table table-bordered text-center'
    tr.setAttribute('id', newStd.stdId)
    tr.innerHTML = `
                    <td>${stdArr.length}</td>
                    <td>${newStd.fname}</td>
                    <td>${newStd.lname}</td>
                    <td>${newStd.email}</td>
                    <td>${newStd.contact}</td>
                    <td><i onclick="onEditStdList(this)" class="fa-solid fa-pen-to-square text-success"></td>
                    <td><i onclick="onDeleteStdList(this)" class="fa-solid fa-trash text-danger"></td>
    `
    stdContainer.append(tr)

}










stdForm.addEventListener('submit', onStdAdd)