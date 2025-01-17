import { lazy, Suspense } from 'react'

const LazyComponent = lazy(()=>import('./components/LazyComponent'))
const App = () => {
  return (
    <div>
      <h2>lazy loading example</h2>
      <Suspense fallback={<div >Loading...</div>} >
        <LazyComponent/>
      </Suspense>
    </div>
  )
}

export default App
