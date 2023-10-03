import './App.css'
import Todos from './components/Todo'
import AddTodo from './components/AddTodo'

function App() {
 

  return (
    <>
     <h1 className='bg-gray-600 text-3xl'>Redux Tool</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
