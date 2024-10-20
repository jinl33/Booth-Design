import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";

// Initialize ShapeDiver
import { 
  createSession,
  createViewport,
  BUSY_MODE_DISPLAY, 
  FLAG_TYPE, 
  SPINNER_POSITIONING, 
  VISIBILITY_MODE 
} from "@shapediver/viewer";
// import { createParameterMenu } from "./parameters";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);

(async () => {
  const canvasElement = document.getElementById("canvas") as HTMLCanvasElement;

  const viewport = await createViewport({
    canvas: canvasElement,
  });

  const session = await createSession({
    ticket: "efb3afd006a3f4b860725b312a4f13d03ff00e1f02173f1c5c307a69d5c1f72e633754207cb480848453bab13be9cd65d39e877efa1f84e92af6be75188efe55f3ed30900c04b4891aaeb3ae75c8a6a85d6f2cc60d8f4d52ebf734f00409a491c369fc32d317d0-5b21930ff95c72b301b935c5f79643d5",
    modelViewUrl: "https://sdr7euc1.eu-central-1.shapediver.com",
  });

  // createParameterMenu(session);
})();