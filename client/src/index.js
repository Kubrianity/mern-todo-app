import App from './App'
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux";
import { store } from './store/store'
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)
root.render(
  <Provider store = {store} >
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </Provider>
)

export default App