"use strict";

// light.addEventListener("input", () => {
//    document.body.style.backgroundColor = "white";
// })
// night.addEventListener("input", () => {
//    document.body.style.backgroundColor = "black";
// })

//  masalixlar box
let masalix = [];

$("#pomidori").addEventListener("change", (e) => {
  if (e.target.checked) {
    masalix.push(e.target.value);
    console.log(masalix);
  } else {
    const index = masalix.findIndex((item) => item == e.target.value);
    masalix.splice(index, 1);
    console.log(masalix);
  }
});

$("zaytun").addEventListener("change", (e) => {
  if (e.target.checked) {
    masalix.push(e.target.value);
    console.log(masalix);
  } else {
    const index = masalix.findIndex((item) => item == e.target.value);
    console.log(e.target.value);

    masalix.splice(index, 1);
    console.log(masalix);
  }

  

});

const div=div.innerHTML(`
masalix
${masalix[0]}
`)

$(".box-right").appendChild(div);





console.log(masalix);



////***********************    modal   ******************/////

sendBtn.addEventListener('click',(e)=>{
  modalWrapper.setAttribute("class","modal-wrapper d-none")
      
})