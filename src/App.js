import { useState } from 'react';
import { v4 } from 'uuid'
import './App.css';

function App() {

  const [item, setItem] = useState('')
  const [list, setList] = useState([])

  const save = (e) => {
    if(e.key === 'Enter'){
      let l = list
      l.push(e.target.value)
      setList(l)
      setItem("")
    }
  }

  const deleteItem = (ind) => {
    let l = list
    l = l.filter((i, index) => index !== ind)
    setList(l)
  }

  return (
    <div className="App">
      <input className='input-box' value={item} onChange={e => setItem(e.target.value)} onKeyPress={save}/>
      <table className='table'>
        <tbody>
          {list && list.map((i, ind) => {
            return <tr key={v4()} onClick={e => deleteItem(ind)}>
              <td className='list-item'>{i}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
