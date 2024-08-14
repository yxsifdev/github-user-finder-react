import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@pages/Home";
import UserPage from "@pages/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:username" element={<UserPage />} />
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
