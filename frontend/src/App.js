// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import SymptomChecker from "./components/SymptomChecker";
// import SymptomCheckerResult from "./components/SymptomCheckerResult";
// import Layout from "./components/Layout";
// // import NoPage from './components/NoPage';
// import BottomNavbar from "./components/BottomNavbar";
// import Eg from "./components/Eg";
// const App = () => {
//   return (
//     <>
//       <Layout />
//       <Routes>
//         <Route path="/" element={<Home />}>
//           {/* <Route index element={<Home />} /> */}
//           <Route path="/sy" element={<SymptomChecker />} />
//           <Route path="/sy1" element={<Eg />} />

//           <Route
//             path="/symptom-checker-result"
//             element={<SymptomCheckerResult />}
//           />
//           {/* <Route path="*" element={<NoPage />} /> */}
//         </Route>
//       </Routes>
//       <BottomNavbar />
//     </>
//   );
// };

// export default App;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SymptomChecker from "./components/SymptomChecker";
import SymptomCheckerResult from "./components/SymptomCheckerResult";
import Layout from "./components/Layout";
import BottomNavbar from "./components/BottomNavbar";
import Eg from "./components/Eg";

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sy" element={<SymptomChecker />} />
        <Route path="/sy1" element={<Eg />} />
        <Route
          path="/symptom-checker-result"
          element={<SymptomCheckerResult />}
        />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <BottomNavbar />
    </>
  );
};

export default App;
