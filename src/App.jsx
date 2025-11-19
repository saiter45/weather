import React from "react";
import SearchBar from "./components/SearchBar";
import TemperatureToggle from "./components/TemperatureToggle";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Бекграунд картинка с оверлеем */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg")`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40">
          <div className="absolute inset-0 bg-black-20"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen">
          <div className="max-w-7xl mx-auto">
            {/*Хедер*/}
            <div className="text-center mb-12">
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight">
                  Weather{" "}
                  <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Pro
                  </span>
                </h1>
                <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                  Следите за прогнозом погоды на сайте с приятным визуалом и
                  точными данными для любой точки мира
                </p>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6 mb-12">
                <SearchBar />
                <TemperatureToggle />
              </div>
            </div>

            {/* Основной контент */}
            <div className="space-y-8">
              {/* Условный рендеринг */}
              <div className="flex justify-center">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                  <LoadingSpinner />
                  <p className="text-white/80 text-center mt-4 font-medium">
                    Получение последних данных о погоде...
                  </p>
                </div>
              </div>

              {/* Условный рендеринг */}
              <div className="max-w-2xl mx-auto">
                <ErrorMessage/>
              </div>

              {/* Условный рендеринг */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2">
                  <WeatherCard />
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
