import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReduxCounter from './components/ReduxCounter.jsx'
import Uncontrolled from './components/Uncontrolled.jsx'
import ColorChange from './components/ColorChange.jsx'
import ColorUSeRef from './components/ColorUSeRef.jsx'
import PassingValue from './components/PassingValue.jsx'
import FormSubmit from './components/FormSubmit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ReduxCounter/> */}
    {/* <Uncontrolled/> */}
    <ColorChange/>
    {/* <ColorUSeRef/> */}
  {/* <PassingValue/> */}
  {/* <FormSubmit/> */}
  </StrictMode>,
)
