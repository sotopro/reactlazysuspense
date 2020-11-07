import React, { useReducer ,useState, lazy, Suspense, useEffect, useRef} from 'react'
import { getList, setItem  } from './services'
import './App.css';
// import { Information } from './components/Information'
// import List from './components/List'
import SetItem from './components/setItem'
const Information = lazy(() => import(/* webpackChunkName: 'Information' */ './components/Information'));
const List = lazy(() => import(/* webpackChunkName: 'List' */ './components/List'))

function App() {
  const [river, setRiver] = useState('nile')
  const [show, toggle] = useReducer(state => !state, true)
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState(false)
  const [itemInput, setItemInput] = useState('');
  let mounted = useRef(true)
    useEffect(() => {
        mounted.current = true
        if(list.length && !alert) {
          return;
        }
        getList()
            .then(items => {
                if(mounted.current) {
                    setList(items)
                }
            })
        return () => mounted.current = false;
    }, [alert, list])

    useEffect(() => {
      if(alert) {
          setTimeout(() => {
              if(mounted.current) {
                setAlert(false)
              }
          }, 1500)
      }
  }, [alert])

    const handleSubmit = (e) => {
        e.preventDefault();
        setItem(itemInput)
        .then(() => {
            if(mounted.current) {
              setItemInput('');
              setAlert(true)
            }
        })
    };
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
        <List list={list} />
      </Suspense>
      <SetItem handleSubmit={handleSubmit} setItemInput={setItemInput} itemInput={itemInput} alert={alert}/>
    </div>
  );
}

export default App;
