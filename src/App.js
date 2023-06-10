import {Routes,Route} from "react-router-dom"
import {Home} from "./pages/home"
import {Questions} from "./pages/questions"
import {Result} from "./pages/result"
import {ErrorPage} from "./pages/error"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/questions" element={<Questions/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
