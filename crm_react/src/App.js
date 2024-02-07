import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import { Header } from './components/navbar/Header'

function App() {
  return (
    <div className="App">
      <div class="header">
        <Header/>
      </div>
      <div class="page-content">
        Page Content
      </div>
    </div>
  );
}

export default App;
