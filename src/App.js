import "./App.css";
import React from "react";
import { Header } from "./Header.js";
import { Header2 } from "./Header.js";
import { Header3 } from "./Header.js";
import { Header5 } from "./Header.js";
import { Alert } from "./Alert/Alert.js";
import { Alert2 } from "./Alert/Alert.js";
import { Alert3 } from "./Alert/Alert.js";
import { Button } from "./Button/Button.js";

//-----------------------------------------------------------------//
///sposob 2 -> zmienna przechowujaca style
const headerStyle = {
  backgroundColor: "lightpink",
};

//sposób 3 osobny komponent ze stylami
function App() {
  return (
    <div className="App">
      <Alert3 text={"StyledContainer"} />
      <Alert2 text={"StyledContainer"} />
      <Alert text={"Hello!"} />
      <Button text={"Click Me!"} />
      <Header5 isShadowed={true} value={"Nagłowek 6  - style z module"} />
      <Header3
        isOutlined //alternatywny zapis, nie musi byc {true}
        value={"Nagłowek 5b  - w ramce"}
      />
      <Header3
        variant={"marked"}
        value={"Nagłowek 5  - zewnetrzny css, dynamiczne variant"}
      />
      <Header2 value={"Nagłowek 4 - zewnetrzny css"} />
      <Header
        variant={"pink"}
        value={"Nagłowek 3b (variant pink) - osobny plik comp+style i import"}
      />
      <Header
        variant={"darkgrey"}
        value={
          "Nagłowek 3b (variant darkgrey) - osobny plik comp+style i import"
        }
      />
      <Header
        variant={"grey"}
        value={
          "Nagłowek 3b (variant default) - osobny plik comp+style i import"
        }
      />
      <Header
        padding={30}
        variant={"darkgrey"}
        value={"Nagłowek 3c style dynamiczne - osobny plik comp+style i import"}
      />
      <Header value={"Nagłowek 3a - osobny plik comp+style i import"} />
      <h1 style={headerStyle}>Nagłowek 2 - obiekt ze stylami</h1>
      <h2 style={{ backgroundColor: "lightgrey" }}>Nagłowek 1 - Inline</h2>
    </div>
  );
}

//-----------------------------------------------------------------//
//sposob 1, niepolecany -> inline
/* function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "lightpink" }}>Nagłowek</h1>
      <h2 style={{ backgroundColor: "lightgrey" }}>Nagłowek</h2>
    </div>
  );
} */

/* function App() {
  return (
    <div className="App">
      <header className="App-header">Testing</header>
    </div>
  );
} */
export default App;
