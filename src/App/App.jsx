import { useState } from 'react'
import { GlobalStyle } from '../global/globalStyled'
import { Container } from './styled'
import { Card } from '../components/Card'


export function App() {
  const [taskAction, setTaskAction] = useState()
  const [showTask, setShowTask] = useState()

 function action(){
    return setShowTask(taskAction)
 }
  return (
    <>
    <GlobalStyle />

      <Container>
        <div className='Container-card'>
            <label htmlFor="input" >Qual a sua tarefa ?</label>
            <input type="text" name='task' onChange={(e) => setTaskAction(e.target.value)} />
            <button onClick={action}>Adicionar</button>
        </div>

        <Card showTask={showTask} />

      </Container>

    </>
  )
}


