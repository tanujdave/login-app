import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./lib/theme/global";

import Login from "./containers/Login";

function App() {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <Suspense fallback="Loading...">
        <Login />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
