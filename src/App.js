import './App.css';
import Colors from './components/Colors';
import Components from './components/UiComponents/UiComponents';
import Typography from './components/Typography';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SiteMain from './site';
import Destinations from './site/views/Destinations';
import Crew from './site/views/Crew';
import Technology from './site/views/Technology';


function App() {
  return (
    <Router>

      <div className="App">
        <Routes>
          <Route 
            path='/'
            element={<SiteMain/>}
          />
            
          <Route
            path='/destinations'
            element={<Destinations/>}
          />
          <Route
            path='/crew'
            element={<Crew/>}
          />
          <Route
            path='/technology'
            element={<Technology/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
