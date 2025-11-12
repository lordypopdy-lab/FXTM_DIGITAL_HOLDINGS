import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { Buffer } from "buffer";
import * as process from "process";
window.Buffer = Buffer;
window.process = process;


// TON Connect UI Provider
import { TonConnectUIProvider } from "@tonconnect/ui-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl="https://kapital-pluss.vercel.app/tonconnect-manifest.json">
      <App />
    </TonConnectUIProvider>
  </StrictMode>
);
