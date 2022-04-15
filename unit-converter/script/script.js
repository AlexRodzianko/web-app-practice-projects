function Calculate(element) {
  let length = document.getElementById("output-content-p1");
  let volume = document.getElementById("output-content-p2");
  let mass = document.getElementById("output-content-p3");
  let input = document.getElementById("input-num").value;

    Ft = (input * 3.28084).toFixed(3);
    M = (input * 0.3048).toFixed(3);
    L = (input * 3.78541).toFixed(3);
    Gal = (input * 0.264172).toFixed(3);
    Kg = (input * 0.453592).toFixed(3);
    Lb = (input * 2.20462).toFixed(3);

  length.innerHTML = element.value + " meters = " + Ft + " feet | " + element.value + " feet = " + M + " meters";
  volume.innerHTML = element.value + " liters = " + Gal + " gallons | " + element.value + " gallons = " + L + " liters";
  mass.innerHTML = element.value + " kilograms = " + Lb + " pounds | " + element.value + " pounds = " + Kg + " kilograms";
}

document.querySelector(".input-number")
 .addEventListener("keypress", function(e) {
  e.preventDefault();
  var input = e.target;
  var value = Number(input.value);
  var key = Number(e.key);
  if (Number.isInteger(key)) {
    value = Number("" + value + key);
    if (value > 100000) {
      return false;
    }
    input.value = value;
  }
 });

 function limit() {
  let input = document.getElementById("input-num").value;
  input.value = !!input.value && Math.abs(input.value) >= 0 ? Math.abs(input.value) : null
 }