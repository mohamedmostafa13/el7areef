import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { playgroundInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="owners">
              <Route index element={<List />} />
              <Route path=":ownerId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Owner" />}
              />
            </Route>
            <Route path="playgrounds">
              <Route index element={<List />} />
              <Route path=":playgroundId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={playgroundInputs} title="Add New Playground" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
