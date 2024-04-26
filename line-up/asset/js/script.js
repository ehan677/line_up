const gk = document.querySelector(".gk");
const def = document.querySelector(".def");
const mid = document.querySelector(".mid");
const maju = document.querySelector(".maju");
let players = document.getElementById("players");
  let gkHTML = "";
for (let i = 1; i <= 3; i++) {
  const playersHTML = dataPlayers
    .filter((player) => player.id === i)
    .map(
      (player) =>
        `<div class="gawang kiper"><p class="p" id="${player.id}">${player.name}</p></div>`
    )
    .join("");
  gkHTML += playersHTML;
}
gk.innerHTML = gkHTML;

let defHTML = "";
for (let i = 4; i <= 7; i++) {
  const playersHTML = dataPlayers
    .filter((player) => player.id === i)
    .map(
      (player) =>
        `<div class="pemain belakang"><p class="p" id="${player.id}">${player.name}</p></div>`
    )
    .join("");
  defHTML += playersHTML;
}
def.innerHTML = defHTML;

let midHTML = "";
for (let i = 12; i <= 14; i++) {
  const playersHTML = dataPlayers
    .filter((player) => player.id === i)
    .map(
      (player) =>
        `<div class="atur tengah"><p class="p" id="${player.id}">${player.name}</p></div>`
    )
    .join("");
  midHTML += playersHTML;
}
mid.innerHTML = midHTML;

let majuHTML = "";
for (let i = 20; i <= 22; i++) {
  const playersHTML = dataPlayers
    .filter((player) => player.id === i)
    .map(
      (player) =>
        `<div class="penyerang depan"><p class="p" id="${player.id}">${player.name}</p></div>`
    )
    .join("");
  majuHTML += playersHTML;
}
maju.innerHTML = majuHTML;

// Menambahkan event listener untuk setiap elemen pemain
const pemain = document.querySelectorAll(".pemain");
const gawang = document.querySelectorAll(".gawang");
const penyerang = document.querySelectorAll(".penyerang");
const atur = document.querySelectorAll(".atur");
const belakang = document.querySelectorAll(".belakang");
const kiper = document.querySelectorAll(".kiper");
const tengah = document.querySelectorAll(".tengah");
let idPemain = "";
let idPengganti = ""; 
function penjagagawang() {
  const datasub = dataPlayers.find((player) => player.id === idPemain) || datasubstitution.find((player) => player.id === idPemain);
  const datasubIndex = dataPlayers.indexOf(datasub);
  const datapeman = datasubstitution.find((player) => player.id === idPengganti) || dataPlayers.find((player) => player.id === idPengganti);
  const datapemanIndex = datasubstitution.indexOf(datapeman);
  if (datapeman && datapeman.Posisi === "gk") {
      datasubstitution.splice(datapemanIndex, 1, datasub);
      dataPlayers.splice(datasubIndex, 1, datapeman);

      const gkHTML = dataPlayers
        .filter((player) => player.id == 1 || player.id == 3
        || player.id ==2)
        .map(
          (player) =>
            `<div class="gawang kiper"><p class="p" id="${player.id}">${player.name}</p></div>`
        )
        .join("");
      gk.innerHTML = gkHTML;

      const gawang = document.querySelectorAll(".gawang");
      gawang.forEach((tombol) => {
        tombol.addEventListener("click", function () {
          if (!idPengganti) {
            modal.style.display = "block";
            idPemain = parseInt(this.querySelector("p").getAttribute("id"));
            const datasub = dataPlayers.find((player) => player.id === idPemain) || dataPlayers.find((player) => player.id === idPemain);
            namaplayer.innerHTML = `<h2 class="namaplayer">${datasub.name}</h2>`;
            console.log("ID yang main:", idPemain);
          }else {
            idPemain = parseInt(tombol.querySelector(".p").getAttribute("id"));
            console.log(idPemain);
            penjagagawang();
          }
        });
      });

      let substitutionHTML = "";
      datasubstitution.forEach((player) => {
        substitutionHTML += `<button class="ganti" ><p id="${player.id}">${player.name}</p></button>`;
      });
      players.innerHTML = substitutionHTML;

      const gantiButtons = document.querySelectorAll(".ganti");
      const namaplayer = document.querySelector(".namaplayer");
      gantiButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const datasub = dataPlayers.find((player) => player.id === idPemain) || datasubstitution.find((player) => player.id === idPemain);
          if(!idPemain){
          modal.style.display = "block";
          idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
          const substitutedPlayer = datasubstitution.find((player) => player.id === idPengganti) || dataPlayers.find((player) => player.id === idPengganti);
          namaplayer.innerHTML = `<h2 class="namaplayer">${substitutedPlayer.name}</h2>`;
          console.log("ID Pemain Pengganti:", idPengganti);
          }else if (datasub.Posisi == "gk"){
            idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
            console.log("ID Pemain Pengganti:", idPengganti);
            penjagagawang();
          }else if(datasub.Posisi == "def"){
            idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
            console.log("ID Pemain Pengganti:", idPengganti);
            defganti();
          }else if(datasub.Posisi == "mid"){
            idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
            console.log("ID Pemain Pengganti:", idPengganti);
            defganti();
          }else if(datasub.Posisi == "maju"){
            idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
            console.log("ID Pemain Pengganti:", idPengganti);
            defganti();
          }
        });
      });
  } else {
    alert('Maaf, pemain ini bukan kiper.');
  }
  idPemain="";
  idPengganti="";
}

function defganti(){
  const datasub = dataPlayers.find((player) => player.id === idPemain) || datasubstitution.find((player) => player.id === idPemain);
  const datasubIndex = dataPlayers.indexOf(datasub);
  const datapeman = datasubstitution.find((player) => player.id === idPengganti) || dataPlayers.find((player) => player.id === idPengganti);
  const datapemanIndex = datasubstitution.indexOf(datapeman);
  if (datapeman && datapeman.Posisi == "def") {
      datasubstitution.splice(datapemanIndex, 1, datasub);
      dataPlayers.splice(datasubIndex, 1, datapeman);
      let defHTML = "";
      for (let i = 4; i <= 11; i++) {
         const playersHTML = dataPlayers
         .filter((player) => player.id === i)
         .map(
         (player) =>
        `<div class="pemain belakang"><p class="p" id="${player.id}">${player.name}</p></div>`
          )
          .join("");
     defHTML += playersHTML;
}
def.innerHTML = defHTML;
let midHTML = "";
for (let i = 12; i <= 19; i++) {
  const playersHTML = dataPlayers
    .filter((player) => player.id === i)
    .map(
      (player) =>
        `<div class="atur tengah"><p class="p" id="${player.id}">${player.name}</p></div>`
    )
    .join("");
  midHTML += playersHTML;
}
mid.innerHTML = midHTML;
let majuHTML = "";
for (let i = 20; i <= 25; i++) {
  const playersHTML = dataPlayers
    .filter((player) => player.id === i)
    .map(
      (player) =>
        `<div class="penyerang depan"><p class="p" id="${player.id}">${player.name}</p></div>`
    )
    .join("");
  majuHTML += playersHTML;
}
maju.innerHTML = majuHTML;
const penyerang = document.querySelectorAll(".penyerang")
const pemain = document.querySelectorAll(".pemain")
const atur = document.querySelectorAll(".atur");
pemain.forEach((tombol, index) => {
tombol.addEventListener("click", function() {
  if(!idPengganti){ 
    modal.style.display = "block";
    idPemain = parseInt(this.querySelector("p").getAttribute("id"));
    const datasub = dataPlayers.find((player) => player.id === idPemain) || dataPlayers.find((player) => player.id === idPemain);
    namaplayer.innerHTML = `<h2 class="namaplayer">${datasub.name}</h2>`;
    console.log("ID yang main:", idPemain);
  }else{
    idPemain = parseInt(tombol.querySelector(".p").getAttribute("id"));
  console.log(idPemain);
  defganti(index)
  }

});

});
atur.forEach((tombol, index) => {
  tombol.addEventListener("click", function() {
    if(!idPengganti){ 
      modal.style.display = "block";
      idPemain = parseInt(this.querySelector("p").getAttribute("id"));
      const datasub = dataPlayers.find((player) => player.id === idPemain) || dataPlayers.find((player) => player.id === idPemain);
      namaplayer.innerHTML = `<h2 class="namaplayer">${datasub.name}</h2>`;
      console.log("ID yang main:", idPemain);
    }else{
      idPemain = parseInt(tombol.querySelector(".p").getAttribute("id"));
    console.log(idPemain);
    defganti(index)
    }
  });
});
penyerang.forEach((tombol, index) => {
  tombol.addEventListener("click", function() {
    if(!idPengganti){ 
      modal.style.display = "block";
      idPemain = parseInt(this.querySelector("p").getAttribute("id"));
      const datasub = dataPlayers.find((player) => player.id === idPemain) || dataPlayers.find((player) => player.id === idPemain);
      namaplayer.innerHTML = `<h2 class="namaplayer">${datasub.name}</h2>`;
      console.log("ID yang main:", idPemain);
    }else{
      idPemain = parseInt(tombol.querySelector(".p").getAttribute("id"));
    console.log(idPemain);
    defganti(index)
    }
  });

});

      let substitutionHTML = "";
      datasubstitution.forEach((player) => {
        substitutionHTML += `<button class="ganti" ><p id="${player.id}">${player.name}</p></button>`;
      });
      players.innerHTML = substitutionHTML;

      const gantiButtons = document.querySelectorAll(".ganti");
      const namaplayer = document.querySelector(".namaplayer");
      gantiButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const datasub = dataPlayers.find((player) => player.id === idPemain) || datasubstitution.find((player) => player.id === idPemain);
          if(!idPemain){
          modal.style.display = "block";
          idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
          const substitutedPlayer = datasubstitution.find((player) => player.id === idPengganti) || dataPlayers.find((player) => player.id === idPengganti);
          namaplayer.innerHTML = `<h2 class="namaplayer">${substitutedPlayer.name}</h2>`;
          console.log("ID Pemain Pengganti:", idPengganti);
          }else if (datasub.Posisi == "gk"){
            idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
            console.log("ID Pemain Pengganti:", idPengganti);
            penjagagawang();
          }else if(datasub.Posisi == "def"){
            idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
            console.log("ID Pemain Pengganti:", idPengganti);
            defganti();
          }else if(datasub.Posisi == "mid"){
            idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
            console.log("ID Pemain Pengganti:", idPengganti);
            defganti();
          }else if(datasub.Posisi == "maju"){
            idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
            console.log("ID Pemain Pengganti:", idPengganti);
            defganti();
          }
        });
      });
  }else if(datapeman && datapeman.Posisi == "mid"){
    datasubstitution.splice(datapemanIndex, 1, datasub);
    dataPlayers.splice(datasubIndex, 1, datapeman);
    let defHTML = "";
    for (let i = 4; i <= 11; i++) {
       const playersHTML = dataPlayers
       .filter((player) => player.id === i)
       .map(
       (player) =>
      `<div class="pemain belakang"><p class="p" id="${player.id}">${player.name}</p></div>`
        )
        .join("");
   defHTML += playersHTML;
}
def.innerHTML = defHTML;
let midHTML = "";
for (let i = 12; i <= 19; i++) {
const playersHTML = dataPlayers
  .filter((player) => player.id === i)
  .map(
    (player) =>
      `<div class="atur tengah"><p class="p" id="${player.id}">${player.name}</p></div>`
  )
  .join("");
midHTML += playersHTML;
}
mid.innerHTML = midHTML;
let majuHTML = "";
for (let i = 20; i <= 25; i++) {
const playersHTML = dataPlayers
  .filter((player) => player.id === i)
  .map(
    (player) =>
      `<div class="penyerang depan"><p class="p" id="${player.id}">${player.name}</p></div>`
  )
  .join("");
majuHTML += playersHTML;
}
maju.innerHTML = majuHTML;
const penyerang = document.querySelectorAll(".penyerang")
const pemain = document.querySelectorAll(".pemain")
const atur = document.querySelectorAll(".atur");
pemain.forEach((tombol, index) => {
tombol.addEventListener("click", function() {
if(!idPengganti){ 
  modal.style.display = "block";
  idPemain = parseInt(this.querySelector("p").getAttribute("id"));
  const datasub = dataPlayers.find((player) => player.id === idPemain) || dataPlayers.find((player) => player.id === idPemain);
  namaplayer.innerHTML = `<h2 class="namaplayer">${datasub.name}</h2>`;
  console.log("ID yang main:", idPemain);
}else{
  idPemain = parseInt(tombol.querySelector(".p").getAttribute("id"));
console.log(idPemain);
defganti(index)
}

});

});
atur.forEach((tombol, index) => {
tombol.addEventListener("click", function() {
  if(!idPengganti){ 
    modal.style.display = "block";
    idPemain = parseInt(this.querySelector("p").getAttribute("id"));
    const datasub = dataPlayers.find((player) => player.id === idPemain) || dataPlayers.find((player) => player.id === idPemain);
    namaplayer.innerHTML = `<h2 class="namaplayer">${datasub.name}</h2>`;
    console.log("ID yang main:", idPemain);
  }else{
    idPemain = parseInt(tombol.querySelector(".p").getAttribute("id"));
  console.log(idPemain);
  defganti(index)
  }
});
});
penyerang.forEach((tombol, index) => {
tombol.addEventListener("click", function() {
  if(!idPengganti){ 
    modal.style.display = "block";
    idPemain = parseInt(this.querySelector("p").getAttribute("id"));
    const datasub = dataPlayers.find((player) => player.id === idPemain) || dataPlayers.find((player) => player.id === idPemain);
    namaplayer.innerHTML = `<h2 class="namaplayer">${datasub.name}</h2>`;
    console.log("ID yang main:", idPemain);
  }else{
    idPemain = parseInt(tombol.querySelector(".p").getAttribute("id"));
  console.log(idPemain);
  defganti(index)
  }
});

});

    let substitutionHTML = "";
    datasubstitution.forEach((player) => {
      substitutionHTML += `<button class="ganti" ><p id="${player.id}">${player.name}</p></button>`;
    });
    players.innerHTML = substitutionHTML;

    const gantiButtons = document.querySelectorAll(".ganti");
    const namaplayer = document.querySelector(".namaplayer");
    gantiButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const datasub = dataPlayers.find((player) => player.id === idPemain) || datasubstitution.find((player) => player.id === idPemain);
        if(!idPemain){
        modal.style.display = "block";
        idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
        const substitutedPlayer = datasubstitution.find((player) => player.id === idPengganti) || dataPlayers.find((player) => player.id === idPengganti);
        namaplayer.innerHTML = `<h2 class="namaplayer">${substitutedPlayer.name}</h2>`;
        console.log("ID Pemain Pengganti:", idPengganti);
        }else if (datasub.Posisi == "gk"){
          idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
          console.log("ID Pemain Pengganti:", idPengganti);
          penjagagawang();
        }else if(datasub.Posisi == "def"){
          idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
          console.log("ID Pemain Pengganti:", idPengganti);
          defganti();
        }else if(datasub.Posisi == "mid"){
          idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
          console.log("ID Pemain Pengganti:", idPengganti);
          defganti();
        }else if(datasub.Posisi == "maju"){
          idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
          console.log("ID Pemain Pengganti:", idPengganti);
          defganti();
        }
      });
    });
 } else if (datapeman && datapeman.Posisi == "maju"){
  datasubstitution.splice(datapemanIndex, 1, datasub);
  dataPlayers.splice(datasubIndex, 1, datapeman);
  let defHTML = "";
  for (let i = 4; i <= 11; i++) {
     const playersHTML = dataPlayers
     .filter((player) => player.id === i)
     .map(
     (player) =>
    `<div class="pemain belakang"><p class="p" id="${player.id}">${player.name}</p></div>`
      )
      .join("");
 defHTML += playersHTML;
}
def.innerHTML = defHTML;
let midHTML = "";
for (let i = 12; i <= 19; i++) {
const playersHTML = dataPlayers
.filter((player) => player.id === i)
.map(
  (player) =>
    `<div class="atur tengah"><p class="p" id="${player.id}">${player.name}</p></div>`
)
.join("");
midHTML += playersHTML;
}
mid.innerHTML = midHTML;
let majuHTML = "";
for (let i = 20; i <= 25; i++) {
const playersHTML = dataPlayers
.filter((player) => player.id === i)
.map(
  (player) =>
    `<div class="penyerang depan"><p class="p" id="${player.id}">${player.name}</p></div>`
)
.join("");
majuHTML += playersHTML;
}
maju.innerHTML = majuHTML;
const penyerang = document.querySelectorAll(".penyerang")
const pemain = document.querySelectorAll(".pemain")
const atur = document.querySelectorAll(".atur");
pemain.forEach((tombol, index) => {
tombol.addEventListener("click", function() {
if(!idPengganti){ 
modal.style.display = "block";
idPemain = parseInt(this.querySelector("p").getAttribute("id"));
const datasub = dataPlayers.find((player) => player.id === idPemain) || dataPlayers.find((player) => player.id === idPemain);
namaplayer.innerHTML = `<h2 class="namaplayer">${datasub.name}</h2>`;
console.log("ID yang main:", idPemain);
}else{
idPemain = parseInt(tombol.querySelector(".p").getAttribute("id"));
console.log(idPemain);
defganti(index)
}

});

});
atur.forEach((tombol, index) => {
tombol.addEventListener("click", function() {
if(!idPengganti){ 
  modal.style.display = "block";
  idPemain = parseInt(this.querySelector("p").getAttribute("id"));
  const datasub = dataPlayers.find((player) => player.id === idPemain) || dataPlayers.find((player) => player.id === idPemain);
  namaplayer.innerHTML = `<h2 class="namaplayer">${datasub.name}</h2>`;
  console.log("ID yang main:", idPemain);
}else{
  idPemain = parseInt(tombol.querySelector(".p").getAttribute("id"));
console.log(idPemain);
defganti(index)
}
});
});
penyerang.forEach((tombol, index) => {
tombol.addEventListener("click", function() {
if(!idPengganti){ 
  modal.style.display = "block";
  idPemain = parseInt(this.querySelector("p").getAttribute("id"));
  const datasub = dataPlayers.find((player) => player.id === idPemain) || dataPlayers.find((player) => player.id === idPemain);
  namaplayer.innerHTML = `<h2 class="namaplayer">${datasub.name}</h2>`;
  console.log("ID yang main:", idPemain);
}else{
  idPemain = parseInt(tombol.querySelector(".p").getAttribute("id"));
console.log(idPemain);
defganti(index)
}
});

});

  let substitutionHTML = "";
  datasubstitution.forEach((player) => {
    substitutionHTML += `<button class="ganti" ><p id="${player.id}">${player.name}</p></button>`;
  });
  players.innerHTML = substitutionHTML;

  const gantiButtons = document.querySelectorAll(".ganti");
  const namaplayer = document.querySelector(".namaplayer");
  gantiButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const datasub = dataPlayers.find((player) => player.id === idPemain) || datasubstitution.find((player) => player.id === idPemain);
      if(!idPemain){
      modal.style.display = "block";
      idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
      const substitutedPlayer = datasubstitution.find((player) => player.id === idPengganti) || dataPlayers.find((player) => player.id === idPengganti);
      namaplayer.innerHTML = `<h2 class="namaplayer">${substitutedPlayer.name}</h2>`;
      console.log("ID Pemain Pengganti:", idPengganti);
      }else if (datasub.Posisi == "gk"){
        idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
        console.log("ID Pemain Pengganti:", idPengganti);
        penjagagawang();
      }else if(datasub.Posisi == "def"){
        idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
        console.log("ID Pemain Pengganti:", idPengganti);
        defganti();
      }else if(datasub.Posisi == "mid"){
        idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
        console.log("ID Pemain Pengganti:", idPengganti);
        defganti();
      }else if(datasub.Posisi == "maju"){
        idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
        console.log("ID Pemain Pengganti:", idPengganti);
        defganti();
      }
    });
  });
 }else{
    alert('Maaf, pemain ini bukan kiper.');
  }
  idPemain="";
  idPengganti="";
}
  


gawang.forEach((tombol, index) => {
  tombol.addEventListener("click", function() {
    if(!idPengganti){ 
      modal.style.display = "block";
      idPemain = parseInt(this.querySelector("p").getAttribute("id"));
      const datasub = dataPlayers.find((player) => player.id === idPemain) || dataPlayers.find((player) => player.id === idPemain);
      namaplayer.innerHTML = `<h2 class="namaplayer">${datasub.name}</h2>`;
      console.log("ID yang main:", idPemain);
    }else{
      idPemain = parseInt(tombol.querySelector(".p").getAttribute("id"));
    console.log(idPemain);
    penjagagawang(index)
    }

  });
  
});


pemain.forEach((tombol, index) => {
  tombol.addEventListener("click", function() {
    if(!idPengganti){ 
      modal.style.display = "block";
      idPemain = parseInt(this.querySelector("p").getAttribute("id"));
      const datasub = dataPlayers.find((player) => player.id === idPemain) || dataPlayers.find((player) => player.id === idPemain);
      namaplayer.innerHTML = `<h2 class="namaplayer">${datasub.name}</h2>`;
      console.log("ID yang main:", idPemain);
    }else{
      idPemain = parseInt(tombol.querySelector(".p").getAttribute("id"));
    console.log(idPemain);
    defganti(index)
    }
  });

});
atur.forEach((tombol, index) => {
  tombol.addEventListener("click", function() {
    if(!idPengganti){ 
      modal.style.display = "block";
      idPemain = parseInt(this.querySelector("p").getAttribute("id"));
      const datasub = dataPlayers.find((player) => player.id === idPemain) || dataPlayers.find((player) => player.id === idPemain);
      namaplayer.innerHTML = `<h2 class="namaplayer">${datasub.name}</h2>`;
      console.log("ID yang main:", idPemain);
    }else{
      idPemain = parseInt(tombol.querySelector(".p").getAttribute("id"));
    console.log(idPemain);
    defganti(index)
    }
  });

});
penyerang.forEach((tombol, index) => {
  tombol.addEventListener("click", function() {
    if(!idPengganti){ 
      modal.style.display = "block";
      idPemain = parseInt(this.querySelector("p").getAttribute("id"));
      const datasub = dataPlayers.find((player) => player.id === idPemain) || dataPlayers.find((player) => player.id === idPemain);
      namaplayer.innerHTML = `<h2 class="namaplayer">${datasub.name}</h2>`;
      console.log("ID yang main:", idPemain);
    }else{
      idPemain = parseInt(tombol.querySelector(".p").getAttribute("id"));
    console.log(idPemain);
    defganti(index)
    }
  });

});


let substitutionHTML = "";
datasubstitution.forEach((player) => {
  substitutionHTML += `<button class="ganti" ><p id="${player.id}">${player.name}</p></button>`;
});
players.innerHTML = substitutionHTML;
const modal = document.querySelector(".modal");
const modal1 = document.querySelector(".modal1");
const gantiButtons = document.querySelectorAll(".ganti");
const namaplayer = document.querySelector(".namaplayer");
gantiButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const datasub = dataPlayers.find((player) => player.id === idPemain) || datasubstitution.find((player) => player.id === idPemain);
    if(!idPemain){
    modal.style.display = "block";
    idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
    const substitutedPlayer = datasubstitution.find((player) => player.id === idPengganti) || dataPlayers.find((player) => player.id === idPengganti);
    namaplayer.innerHTML = `<h2 class="namaplayer">${substitutedPlayer.name}</h2>`;
    console.log("ID Pemain Pengganti:", idPengganti);
    }else if (datasub.Posisi == "gk"){
      idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
      console.log("ID Pemain Pengganti:", idPengganti);
      penjagagawang();
    }else if(datasub.Posisi == "def"){
      idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
      console.log("ID Pemain Pengganti:", idPengganti);
      defganti();
    }else if(datasub.Posisi == "mid"){
      idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
      console.log("ID Pemain Pengganti:", idPengganti);
      defganti();
    }else if(datasub.Posisi == "maju"){
      idPengganti = parseInt(this.querySelector("p").getAttribute("id"));
      console.log("ID Pemain Pengganti:", idPengganti);
      defganti();
    }
  });
});

const tutup = document.querySelector(".tutup");
tutup.addEventListener("click", function () {
  modal.style.display = "none";
});

const a = document.querySelector(".a");
a.addEventListener("click", function () {
  modal.style.display = "none";
});

const b = document.querySelector(".b");
const namaplayer1 = document.querySelector(".namaplayer1");
const posisi = document.querySelector(".posisi");

b.addEventListener("click", function () {
  modal.style.display = "none";
  modal1.style.display = "block";
  const substitutedPlayer = datasubstitution.find((player) => player.id === idPengganti) || dataPlayers.find((player) => player.id === idPemain);
  namaplayer1.innerHTML = `<h2 class="namaplayer1">${substitutedPlayer.name}</h2>`;
  posisi.innerHTML = `<p>${substitutedPlayer.Posisi}</p>`;
});

const tutup1 = document.querySelector(".tutup1");
tutup1.addEventListener("click", function () {
  modal1.style.display = "none";
});