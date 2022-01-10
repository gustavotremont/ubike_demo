import './styles/styles.scss';
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
