import React, { useReducer ,useState, lazy, Suspense} from 'react'
import './App.css';
// import { Information } from './components/Information'
const Information = lazy(() => import(/* webpackChunkName: 'Information' */ './components/Information'));

function App() {
  const [river, setRiver] = useState('nile')
  const [show, toggle] = useReducer(state => !state, true)
  return (
    <div className="container">
      <h1>World's Longest Rivers</h1>
      <div>
        <button onClick={toggle}>Toggle Details</button>
      </div>
      <button onClick={() => setRiver('nile')}>Nile</button>
      <button onClick={() => setRiver('amazon')}>Amazon</button>
      <button onClick={() => setRiver('mississippi')}>Mississippi</button>
      <button onClick={() => setRiver('yangtze')}>yangtze</button>
      <Suspense fallback={<div>Loading Components</div>}>
        {show &&  <Information name={river}/>}
      </Suspense>
    </div>
  );
}

export default App;
