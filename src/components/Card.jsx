import { Container } from "./style"


export function Card({showTask}){


    return(
        <>
        <Container>
        <h3>{showTask}</h3>
        <p> <ion-icon name="close-outline"></ion-icon></p>
        </Container>
        </>
    )
}