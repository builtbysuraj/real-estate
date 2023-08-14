import { CssBaseline } from "@mui/material"
import { createRoot } from "react-dom/client"
import App from "./App"
import { AppContextProvider } from "./state/AppContext"
createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <CssBaseline />
    <App />
  </AppContextProvider>
)
