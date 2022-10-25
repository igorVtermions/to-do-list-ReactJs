import { Container } from "./style"


export function Card({showTask, removeTask}){


    return(
        <>
        <Container>

{showTask.map((item) => <div key={item.id} className= "cardContent">
    <input type="checkbox" name="checkBox" className="checkBox" />
    <h3>{item.value}</h3>
    <p onClick={() => removeTask(item.id)}><ion-icon name="close-outline"></ion-icon></p>
    </div>)}
    </Container>
        </>
    )
}