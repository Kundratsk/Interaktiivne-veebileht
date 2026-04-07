// TO-DO LIST
function addTask() {
  const input = document.getElementById("taskInput"); // leiab input-välja, kuhu kasutaja kirjutab ülesande
  const taskText = input.value.trim(); // võtab väärtuse ja eemaldab tühikud ees ja taga

  if (taskText === "") return; // kui input on tühi, siis ei tee midagi

  const li = document.createElement("li"); // loob uue listi elemendi (li)
  li.textContent = taskText; // paneb sinna ülesande teksti

  const removeBtn = document.createElement("button"); // loob nuppu ülesande eemaldamiseks
  removeBtn.textContent = "❌"; // määrab nupu tekstiks rist
  removeBtn.onclick = () => li.remove(); // kui nuppu klikitakse, eemaldatakse see li element

  li.appendChild(removeBtn); // lisab nupu li elemendi sisse
  document.getElementById("taskList").appendChild(li); // lisab li kogu ülesannete listi

  input.value = ""; // tühjendab input-välja, et saab uue ülesande kirjutada
}

// KALKULAATOR
function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value); // võtab esimese numbri ja muudab ujukomaarvuks
  const num2 = parseFloat(document.getElementById("num2").value); // võtab teise numbri ja muudab ujukomaarvuks
  const op = document.getElementById("operation").value; // võtab valitud tehte (+, -, *, /)

  let result; // siin hoitakse arvutuse tulemust

  if (isNaN(num1) || isNaN(num2)) { // kontrollib, kas mõni väärtus ei ole number
    result = "Palun sisesta numbrid!"; // annab veateate
  } else {
    switch(op) { // kontrollib, millist tehet kasutaja valis
      case "+": result = num1 + num2; break; // liitmine
      case "-": result = num1 - num2; break; // lahutamine
      case "*": result = num1 * num2; break; // korrutamine
      case "/": result = num2 !== 0 ? num1 / num2 : "Ei saa jagada nulliga"; break; // jagamine, kontrollib nulliga jagamist
    }
  }

  document.getElementById("calcResult").textContent = "Tulemus: " + result; // kuvab tulemuse HTML-is
}

// VORMI VALIDEERIMINE
function validateForm() {
  const name = document.getElementById("name").value.trim(); // võtab nime ja eemaldab tühikud ees ja taga
  const email = document.getElementById("email").value.trim(); // võtab emaili ja eemaldab tühikud ees ja taga
  const errorDiv = document.getElementById("formError"); // leiab koha, kuhu veateated kuvatakse

  if (name === "" || email === "") { // kontrollib, kas mõni väli on tühi
    errorDiv.textContent = "Kõik väljad peavad olema täidetud!"; // kuvab veateate
    return; // lõpetab funktsiooni, ei jätka
  }

  if (!email.includes("@")) { // kontrollib, kas email sisaldab @ märki
    errorDiv.textContent = "Email ei ole korrektne!"; // kuvab veateate
    return; // lõpetab funktsiooni
  }

  errorDiv.style.color = "green"; // muudab teksti värvi roheliseks
  errorDiv.textContent = "Registreerimine õnnestus!"; // kuvab eduteate
}