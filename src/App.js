//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import DashBoard from './components/dashBoard';
import CreateAd from './components/createAd';
import { Route, Routes } from 'react-router-dom';
import TextAd from './components/textAd';
import MediaAd from './components/mediaAd';
import Submit from './components/submit';

function App() {
  return (
    <div className="App">
      {/* <DashBoard /> */}
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/createad" element={<CreateAd />} />
        <Route path="/textad" element={<TextAd />} />
        <Route path="/mediaad" element={<MediaAd />} />
        <Route path="/submit" element={<Submit />} />
        

      </Routes>
    </div>
  );
}

export default App;
