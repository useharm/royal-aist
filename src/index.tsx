import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
const findRoot = document.getElementById('root');

  if (findRoot) 
 { const root = ReactDOM.createRoot(findRoot) 
root.render(
  <div>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </div>
)}