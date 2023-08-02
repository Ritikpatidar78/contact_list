// const form = document.querySelector("form");
// const name = document.querySelector(".name");
// const num = document.querySelector(".num");
// const table = document.querySelector("table");
// const button = document.querySelector(".btn-success");

// const create = (e) => {
//     e.preventDefault();
//     if(name.value.length == 0 || num.value.length == 0){
//         window.confirm("Fill the info.?")
//         exit;
//     }
//     const tr = document.createElement("tr");
//     const td1 = document.createElement("td");
//     const td2 = document.createElement("td");
//     td1.innerText = name.value;


//     for (let i = 0;i<num.value.length;i++){
//         if (num.value.charAt(i) < '0'
//         || num.value.charAt(i) > '9') {
//             window.confirm("Check the no.?")
//             exit;
//         }
//         else
//         {
//             td2.innerText = num.value;
//         }
//         }
//     tr.appendChild(td1);
//     tr.appendChild(td2);
    
//     const btn = document.createElement("button");
//     btn.innerText = "Delete";
//     btn.className = "btn btn-danger";
//     const td3 = document.createElement("td");
//     td3.appendChild(btn);
//     tr.appendChild(td3);
//     table.appendChild(tr);

//     form.reset();
// }



// form.addEventListener("submit", create);

// const dltcontact = (e) => {
//     if (e.target.className.includes("btn-danger")) {
//         let td = e.target.parentElement;
//         let tr = td.parentElement;
//         if (window.confirm("Are You Sure?")) {
//             table.removeChild(tr);
//     }
// }

// }
// table.addEventListener("click", dltcontact);


const form = document.querySelector("form");
const name = document.querySelector(".name");
const num = document.querySelector(".num");
const cardcontain = document.querySelector(".card-container");

const create = (e) => {
    e.preventDefault();
    if(name.value.length == 0 || num.value.length == 0){
                window.confirm("Fill the info.?")
                exit;
            }
    let card = document.createElement("div");
    card.classList.add("card");
    let h1 = document.createElement("h1");
    h1.innerText = name.value[0];
    let h2 = document.createElement("h2");
    h2.innerText = name.value;
    let h3 = document.createElement("h3");

    for (let i = 0;i<num.value.length;i++){
                if (num.value.charAt(i) < '0'
                || num.value.charAt(i) > '9') {
                    window.confirm("Check the no.?")
                    exit;
                }
                else
                {
                    h3.innerText = num.value;
                }
                }


   
    card.appendChild(h1);
    card.appendChild(h2);
    card.appendChild(h3);
    
    let span = document.createElement("span");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    btn1.className = "btn btn-success";
    btn2.className = "btn btn-danger";
    // btn1.innerText = "Call..";
    btn2.innerText = "Delete";
    let a = document.createElement("a");
    a.href = "tel:"+num.value;
    a.innerText = "Call";
    btn1.appendChild(a);
    span.appendChild(btn1);
    span.appendChild(btn2);

    card.appendChild(span);
    cardcontain.appendChild(card);
    form.reset();

}
form.addEventListener("submit", create);


const dltcontact = (e) => {
    if (e.target.className.includes("btn-danger")) {
        let span = e.target.parentElement;
        let card = span.parentElement;
        if (window.confirm("Are You Sure?")) {
           cardcontain.removeChild(card);

    }
}
}

cardcontain.addEventListener("click", dltcontact);


