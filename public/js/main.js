// console.log("i am listing")
const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.querySelector(".city_name");
const temp = document.querySelector(".temp");
const temp_max = document.querySelector(".temp_max");
const temp_min = document.querySelector(".temp_min");
const image = document.getElementsByTagName("img")[0];
const city = document.querySelector(".city");
const cuntry = document.querySelector(".cuntry");
const dataHide = document.querySelector(".info");
const discription = document.querySelector(".discription");

const getInfo = async (event) => {
  event.preventDefault();
  // alert("Hi")
  let cityval = cityName.value;
  console.log(cityval);
  if (cityval === "") {
    city_name.innerText = "Oops! Please search City Name :)";
    dataHide.classList.add("data_hide");
  } else {
    try {
      const appKey = "d74805e03c2559835814883381559a89";
      let url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityval +
        "&appid=" +
        appKey +
        "&units=metric";
      const response = await fetch(url);
      const jsonData = await response.json();
      const arrData = [jsonData];
      // console.log(jsonData)

      temp.innerHTML = `${arrData[0].main.temp}<sup>o</sup>C`;
      console.log(arrData[0].main.temp_max);
      temp_max.innerHTML = `Max : ${(arrData[0].main.temp_max + 2.6).toFixed(
        2
      )}`;
      temp_min.innerText = `Min : ${(arrData[0].main.temp_min - 2.4).toFixed(
        2
      )}`;
      city.innerText = arrData[0].name;
      cuntry.innerText = arrData[0].sys.country;
      discription.innerText = arrData[0].weather[0].description;

      const icon = arrData[0].weather[0].icon;
      const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      image.setAttribute("src", iconUrl);

      dataHide.classList.remove("data_hide");
      city_name.innerHTML = "";
      // console.log(xyz)
    } catch {
      city_name.innerText = "Please enter the city name properly :(";
      dataHide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
