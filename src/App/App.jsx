import { useState } from 'react'
import { GlobalStyle } from '../global/globalStyled'
import { Container } from './styled'
import { Card } from '../components/Card'


export function App() {
  const [taskAction, setTaskAction] = useState("")
  const [showTask, setShowTask] = useState([])

 function action(){
    if(taskAction !== "" && !taskAction.match(/^[ \t]+$/)){
      const newItem = {
          value: taskAction,
          id: Date.now()
        }
        setShowTask((prevState)=> [...prevState, newItem])
    }
    setTaskAction("")
 }



  function removeTask(id){
    const deleteItem = showTask.filter((task) =>task.id !== id)
    setShowTask(deleteItem)
  }


  return (
    <>
    <GlobalStyle />

      <Container>
        <div className='Container-card'>
            <label htmlFor="input" >Qual a sua tarefa ?</label>
            <input type="text" name='task' value={taskAction} onChange={(e) => setTaskAction(e.target.value)} />
            <button onClick={action}>Adicionar</button>
        </div>

        <Card showTask={showTask}  removeTask={removeTask} />

      </Container>

    </>
  )
}


