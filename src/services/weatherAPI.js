const API_KEY = "d4a9e9c0b8382576620016fe7a7b7f19";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const GEO = "https://api.openweathermap.org/geo/1.0";

export const getCurrentWeather = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}$units=metric`
    );

    if (!response.ok) {
      if (response.status == 404) {
        throw new Error(
          `Город ${city} не найдет, пожалуйста проверьте название города и попробуйте снова`
        );
      } else if (response.status == 401) {
        throw new Error(
          `Неправильный API key, проверьте ваши настройки OpenWeatherMap API `
        );
      }
    } else {
      throw new Error(
        "Погодный сервис временно недоступен. Попробуйте снова через пару минут."
      );
    }

    const data = await response.json();

    if (!data.dt) {
      data.dt = Math.floor(Date.now() / 1000);
    }
    return data;
  } catch (error) {
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error("Проблема сети, проверьте ваше подключение к интернету.");
    }
    throw error;
  }
};

export const getCurrentWeatherByCoords = async (lat, lon) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}appid=${API_KEY}$units=metric`
    );

    if (!response.ok) {
      if (response.status == 401) {
        throw new Error(
          `Неправильный API key, проверьте ваши настройки OpenWeatherMap API`
        );
      } 
    } else {
      throw new Error(
        "Погодный сервис временно недоступен. Попробуйте снова через пару минут."
      );
    }

    const data = await response.json();

    if (!data.dt) {
      data.dt = Math.floor(Date.now() / 1000);
    }
    return data;
  } catch (error) {
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error("Проблема сети, проверьте ваше подключение к интернету.");
    }
    throw error;
  }
};
