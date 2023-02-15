import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import Home from "./pages/Home";
import Bookmark from "./pages/Bookmark";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="bg-mainBg min-h-[100vh]">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/bookmark" element={<Bookmark />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
