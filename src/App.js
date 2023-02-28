import "./App.css";
import { Routes, Route } from "react-router-dom";
import { authRoute } from "./routes/route";
import { publicRoute } from "./routes/route";

// import withLayouts from "./component/NavBar/NavBar";
function App() {
  return (
    <>
      <Routes>
        <>
          {authRoute.map((route) => (
            <>
              <Route exact path={route.path} element={route.element} />
              {route.subnav &&
                route.subnav.map((subRoute) => (
                  <Route
                    exact
                    path={subRoute.path}
                    element={subRoute.element}
                  />
                ))}
            </>
          ))}
          {publicRoute.map((route) => (
            <Route exact path={route.path} element={route.element} />
          ))}
        </>
      </Routes>
    </>
  );
}

export default App;
