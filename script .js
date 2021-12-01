// Creating the async function called foo()
async function foo() {
  var d1 = document.getElementById("inp").value;

  var data = await fetch(`https://api.ip2country.info/ip?${d1}`); // Fetching the Api data

  var data1 = await data.json(); // Parsing the json data

  console.log(data1); // Parsed data

  // Retriving an div element from the html to display an result
  document.getElementById(
    "result"
  ).innerHTML = ` <h5> Country Name : </h5> ${data1.countryName}`;
}

foo();
