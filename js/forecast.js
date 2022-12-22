const KEY = "848a264a71e364766ee7e9056da89bf3";

const getData = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  let query = `?q=${city}&units=metric&appid=${KEY}`;
  const request = await fetch(base + query);
  const data = await request.json();
  return data;
};
