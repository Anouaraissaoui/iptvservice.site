import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure CDN resources are loaded before mounting
window.addEventListener('load', () => {
  createRoot(document.getElementById("root")!).render(<App />);
});