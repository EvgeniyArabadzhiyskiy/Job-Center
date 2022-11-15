import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const apiKey = process.env.REACT_APP_GOOGLE_MAP_APIkey
console.log("apiKey", apiKey);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <BrowserRouter basename="/job-center">
      <App />
    </BrowserRouter>
  </>
);
