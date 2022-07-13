let hemisphere;
let date;

function getSeason() {
  let hemisphere = document.getElementById("hemi").value;
  let date = document.getElementById("mydate").value;

  //Hemisphere Validation..
  if (
    hemisphere == "s" ||
    hemisphere == "S" ||
    hemisphere == "n" ||
    hemisphere == "N"
  ) {
  } else {
    alert("Enter valid Direction N/S");
  }

  //Get Date from the date
  let mainDate = new Date(date);
  let month = mainDate.getMonth() + 1;

  //check switch case for N/S...
  switch (hemisphere) {
    case "N" || "n":
      if (month == "3" || month == "4" || month == "5") {
        text = "Spring In North Hemisphere";
      } else if (month == "6" || month == "7" || month == "8") {
        text = "Summer In North Hemisphere";
      } else if (month == "9" || month == "10" || month == "11") {
        text = "Autumn In North Hemisphere";
      } else if (month == "12" || month == "1" || month == "2") {
        text = "Winter In North Hemisphere";
      }
      break;

    case "S" || "s":
      if (month == "3" || month == "4" || month == "5") {
        text = "Autumn In South Hemisphere";
      } else if (month == "6" || month == "7" || month == "8") {
        text = "Winter In SouthHemisphere";
      } else if (month == "9" || month == "10" || month == "11") {
        text = "Spring In South Hemisphere";
      } else if (month == "12" || month == "1" || month == "2") {
        text = "Summer In South Hemisphere";
      }
      break;

    default:
      alert("Invalid");
  }

  document.getElementById("result").innerHTML = text;
}
