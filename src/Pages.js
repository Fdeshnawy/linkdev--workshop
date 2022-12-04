import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Newsitem from "./components/News/Newsitem";
import News from "./components/News/News";


function Pages() {
  return (
    <div>
    
      <BrowserRouter>
   
        <Routes>
          
        <Route path="/" element={<App />} />
     
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Pages;
