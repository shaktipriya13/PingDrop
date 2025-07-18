import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
export const serverUrl = 'http://localhost:8000';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      {/* Provider store ko app me har jagah provide kr dega  */}
      {/* provide here the store u hav created */}
      <App />
    </Provider>
  </BrowserRouter>
)
