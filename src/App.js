import "./App.css";
import { useState, useRef } from "react";
import NavigationRail from "./Components/NavigationRail";
import { ThemeContext } from "./ThemeContext";

function App() {
  const lightTheme = useRef(JSON.parse(`{
    "primary": "#705D00",
    "onPrimary": "#FFFFFF",
    "primaryContainer": "#FFE16E",
    "onPrimaryContainer": "#221B00",
    "primaryFixed": "#FFE16E",
    "onPrimaryFixed": "#221B00",
    "primaryFixedDim": "#E9C400",
    "onPrimaryFixedVariant": "#544600",
    "secondary": "#675E40",
    "onSecondary": "#FFFFFF",
    "secondaryContainer": "#EFE2BC",
    "onSecondaryContainer": "#211B04",
    "secondaryFixed": "#EFE2BC",
    "onSecondaryFixed": "#211B04",
    "secondaryFixedDim": "#D2C6A1",
    "onSecondaryFixedVariant": "#4E462A",
    "tertiary": "#44664D",
    "onTertiary": "#FFFFFF",
    "tertiaryContainer": "#C6ECCD",
    "onTertiaryContainer": "#00210E",
    "tertiaryFixed": "#C6ECCD",
    "onTertiaryFixed": "#00210E",
    "tertiaryFixedDim": "#AAD0B2",
    "onTertiaryFixedVariant": "#2D4E37",
    "error": "#BA1A1A",
    "onError": "#FFFFFF",
    "errorContainer": "#FFDAD6",
    "onErrorContainer": "#410002",
    "outline": "#7C7767",
    "background": "#FFFBFF",
    "onBackground": "#1D1B16",
    "surface": "#FFF9EF",
    "onSurface": "#1D1B16",
    "surfaceVariant": "#EAE2CF",
    "onSurfaceVariant": "#4B4739",
    "inverseSurface": "#33302A",
    "inverseOnSurface": "#F6F0E7",
    "inversePrimary": "#E9C400",
    "shadow": "#000000",
    "surfaceTint": "#705D00",
    "outlineVariant": "#CDC6B4",
    "scrim": "#000000",
    "surfaceContainerHighest": "#E8E2D9",
    "surfaceContainerHigh": "#EDE7DE",
    "surfaceContainer": "#F3EDE4",
    "surfaceContainerLow": "#F9F3EA",
    "surfaceContainerLowest": "#FFFFFF",
    "surfaceBright": "#FFF9EF",
    "surfaceDim": "#DFD9D0"
  }`));

  const darkTheme = useRef(JSON.parse(`{
    "primary": "#E9C400",
    "onPrimary": "#3A3000",
    "primaryContainer": "#544600",
    "onPrimaryContainer": "#FFE16E",
    "primaryFixed": "#FFE16E",
    "onPrimaryFixed": "#221B00",
    "primaryFixedDim": "#E9C400",
    "onPrimaryFixedVariant": "#544600",
    "secondary": "#D2C6A1",
    "onSecondary": "#373016",
    "secondaryContainer": "#4E462A",
    "onSecondaryContainer": "#EFE2BC",
    "secondaryFixed": "#EFE2BC",
    "onSecondaryFixed": "#211B04",
    "secondaryFixedDim": "#D2C6A1",
    "onSecondaryFixedVariant": "#4E462A",
    "tertiary": "#AAD0B2",
    "onTertiary": "#163722",
    "tertiaryContainer": "#2D4E37",
    "onTertiaryContainer": "#C6ECCD",
    "tertiaryFixed": "#C6ECCD",
    "onTertiaryFixed": "#00210E",
    "tertiaryFixedDim": "#AAD0B2",
    "onTertiaryFixedVariant": "#2D4E37",
    "error": "#FFB4AB",
    "onError": "#690005",
    "errorContainer": "#93000A",
    "onErrorContainer": "#FFDAD6",
    "outline": "#979080",
    "background": "#1D1B16",
    "onBackground": "#E8E2D9",
    "surface": "#15130E",
    "onSurface": "#CBC6BD",
    "surfaceVariant": "#4B4739",
    "onSurfaceVariant": "#CDC6B4",
    "inverseSurface": "#E8E2D9",
    "inverseOnSurface": "#1D1B16",
    "inversePrimary": "#705D00",
    "shadow": "#000000",
    "surfaceTint": "#E9C400",
    "outlineVariant": "#4B4739",
    "scrim": "#000000",
    "surfaceContainerHighest": "#37352E",
    "surfaceContainerHigh": "#2C2A24",
    "surfaceContainer": "#211F1A",
    "surfaceContainerLow": "#1D1B16",
    "surfaceContainerLowest": "#100E09",
    "surfaceBright": "#3C3933",
    "surfaceDim": "#15130E"
  }`));

  const theme = useRef("light");
  const [colors, setColors] = useState(lightTheme.current);

  const toggleTheme = () => {
    if (theme.current === "light") {
      setColors(() => darkTheme.current);
      theme.current = "dark";
    } else {
      setColors(() => lightTheme.current);
      theme.current = "light";
    }
  };

  return (
    <ThemeContext.Provider value = {colors}>
    <div className="App">
      <NavigationRail  toggle={toggleTheme} />
    </div>
    </ThemeContext.Provider>


  );
}
export default App;
