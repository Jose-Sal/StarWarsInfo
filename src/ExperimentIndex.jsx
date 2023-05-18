import { Overlay } from './ExperimentOverlay'
import ReactDOM from 'react-dom/client'
import App from './Experiement.jsx' 

const root = ReactDOM.createRoot(document.querySelector('#Filmroot'))

// renders within the element with the root id
root.render(
  <>
        <App />
        <Overlay />
 </>
)
