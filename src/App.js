import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutSite from "./layouts/LayoutSite";
import RouterSite from './router/index';
import LayoutAdmin from "./layouts/LayoutAdmin";
import RouterPublic from "./router/RouterPublic";
import RouterPrivate from "./router/RouterPrivate";





//function component


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutSite />}>
          {
            RouterPublic.map(function (router, index) {
              const Page = router.component;
              return <Route key={index} path={router.path} element={<Page />} />
            })}
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          {RouterPrivate.map(function (router, index) {
            const Page = router.component;
            return <Route key={index} path={router.path} element={<Page />} />
          })}
        </Route>
      </Routes>

    </BrowserRouter>
  )
};

export default App;

