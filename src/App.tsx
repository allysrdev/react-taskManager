import { ThemeProvider } from "./features/theme/ThemeProvider";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
