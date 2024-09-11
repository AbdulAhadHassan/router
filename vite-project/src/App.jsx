import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home4 from "./pages/Home4";
import Home5 from "./pages/Home5";
import Home6 from "./pages/Home6";
import Home7 from "./pages/Home7";
import Home8 from "./pages/Home8";
import Home9 from "./pages/Home9";
import Header from "./comps/Header";


function AppRouter() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home2" element={<Home2 />} />
        <Route path="/Home3" element={<Home3 />} />
        <Route path="/Home4" element={<Home4 />} />
        <Route path="/Home5" element={<Home5 />} />
        <Route path="/Home6" element={<Home6 />} />
        <Route path="/Home7" element={<Home7 />} />
        <Route path="/Home8" element={<Home8 />} />
        <Route path="/Home9" element={<Home9 />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;