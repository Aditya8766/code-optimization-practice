import React from "react";
import Practice from "./component/Practice";
import ToggleTheme from "./component/ToggleTheme";
import WeatherComponent from "./component/wether-app/WeatherApp";
import withLocation from "./component/wether-app/higher-order-function/withLocation";


const WeatherWithLocation = withLocation(WeatherComponent);

function App() {
  return (
    <>
     {/*below code is fully functional and well-structured and optimized for real-world use. If you apply the above small tweaks, it’ll be production-ready and top-tier polished.*/}
      <Practice/>
      <ToggleTheme/>
      <WeatherWithLocation/>
    </>
  )
}

export default App
