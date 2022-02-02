import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoute from './AppRoute'
function App() {
  return (
    <Router>
    <div className="App">
        <AppRoute />
    </div>
    </Router>
  );
}

export default App;
