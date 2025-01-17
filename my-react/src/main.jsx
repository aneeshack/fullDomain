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
import SampleUsememo from './components/SampleUsememo.jsx'
import SampleUsecallback from './components/SampleUsecallback.jsx'
import SampleReactmemo from './components/SampleReactmemo.jsx'
import Customhook from './components/Customhook.jsx'
import SiblingCom from './components/SiblingCom.jsx'
import SampleUseref from './components/SampleUseref.jsx'
import ForwarRef from './components/ForwarRef.jsx'
import HocExample from './components/HocExample.jsx'
import AutoCounter from './components/AutoCounter.jsx'
import NewComponent from './components/NewComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ReduxCounter/> */}
    {/* <Uncontrolled/> */}
    {/* <ColorChange/> */}
    {/* <SampleUsememo/> */}
    {/* <SampleUsecallback/> */}
    {/* <SampleReactmemo/> */}
    {/* <Customhook/> */}
    {/* <SiblingCom/> */}
    {/* <SampleUseref/> */}
    {/* <ForwarRef/> */}
    {/* <HocExample/> */}
    {/* <ColorUSeRef/> */}
  {/* <PassingValue/> */}
  {/* <FormSubmit/> */}
  {/* <AutoCounter/> */}

  <NewComponent/>
  </StrictMode>,
)
