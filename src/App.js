import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './screens/Home/Home';
import BriefingMarketing from './screens/BriefingMarketing/BriefingMarketing';
import BriefingRedesSociais from './screens/BriefingRedesSociais/BriefingRedesSociais';
import Obrigado from './screens/Obrigado/Obrigado';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/BriefingMarketing' element={<BriefingMarketing/>}/>
        <Route path='/BriefingRedesSociais' element={<BriefingRedesSociais/>}/>
        <Route path='/Obrigado' element={<Obrigado/>}/>
      </Routes>
    </div>
  );
}

export default App;
