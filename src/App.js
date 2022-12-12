import './App.css';
import Map from './Components/Map';

function App() {
  const location = {
    address: "Avenue Taieb M'hiri 2100 Gafsa, Gafsa, Tunisia .",
    lat: 34.431141,
    lng: 8.775656,
  };
  return (
    <div className="App">
      <Map location={location} zoomLevel={17}/>
    </div>
  );
}

export default App;
