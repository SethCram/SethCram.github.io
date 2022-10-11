import ReactDom from 'react-dom'
import App from './App'
import './index.css'

ReactDom.render(<App />, document.querySelector("#root"));

// After
//import { createRoot } from 'react-dom/client';
//const container = document.getElementById('app');
//const root = createRoot(container); // createRoot(container!) if you use TypeScript
//root.render(<App tab="home" />);
