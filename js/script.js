var div1 = document.getElementById("hitungkeliling");
var div2 = document.getElementById("hitungluas");
var div3 = document.getElementById("jawabankeliling");
var div4 = document.getElementById("jawabanluas");
var display = 0;

function keliling() {
  if (display == 1) {
    div1.style.display = "none";
    display = 0;
  } else {
    div1.style.display = "block";
    display = 1;
  }
}

function luas() {
  if (display == 1) {
    div2.style.display = "none";
    display = 0;
  } else {
    div2.style.display = "block";
    display = 1;
  }
}

function hitungkeliling() {
  var kelilingsisi = document.getElementById("kelilingsisi").value;
  var totalkelilingsisi = kelilingsisi * 4;
  document.getElementById("totalkel").innerHTML = totalkelilingsisi;

  if (display == 1) {
    div3.style.display = "none";
    display = 0;
  } else {
    div3.style.display = "block";
    display = 1;
  }
}

function hitungluas() {
  var luassisi = document.getElementById("sisiluas").value;
  var totalluassisi = luassisi * luassisi;
  document.getElementById("totalluas").innerHTML = totalluassisi;

  if (display == 1) {
    div4.style.display = "block";
    display = 1;
  } else {
    div4.style.display = "inline";
    display = 1;
  }
}
