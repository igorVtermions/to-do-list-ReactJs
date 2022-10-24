import { Container } from "./style"


export function Card({showTask}){


    return(
        <>
        <Container>

{showTask.map((item) => <div key={item.id} className= "cardContent">
    <h3>{item.value}</h3>
    <p><ion-icon name="close-outline"></ion-icon></p>
    </div>)}
    </Container>
        </>
    )
}