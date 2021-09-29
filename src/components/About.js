import {Container, Button} from 'react-bootstrap'
import FadeIn from 'react-fade-in'

export default function About () {
    return (
        <FadeIn>
        <Container>
            <h1 className="my-5">Welcome to this page!</h1>
            <p>This page is a helper tool for the game "Keep talking and nobody explodes". It's an exciting game in which you have to work together with a friend to dismantle an bomb. One person has the bomb, and the other needs to give instructions from the manual.</p>
            <p>Since I'm so terribly bad at giving instructions while reading the manual, I decided to experiment with React.JS to create an interactive manual.</p>
            <p>Please be aware that using the original PDF manual adds fun to the game, and using this tool is essentially cheating. Also, I'm not in any way connected to Steel Crate Games.</p>
            <div className="my-5">
            <a rel="noreferrer" href="https://store.steampowered.com/app/341800/Keep_Talking_and_Nobody_Explodes/" target="_blank" className="p-1"><Button variant="primary">Steam shop</Button></a>
            <a rel="noreferrer" href="https://www.bombmanual.com/" target="_blank" className="p-1"><Button variant="primary">Original manual</Button></a>
            <a rel="noreferrer" href="https://store.steampowered.com/app/341800/Keep_Talking_and_Nobody_Explodes/" target="_blank" className="p-1"><Button variant="primary">Website</Button></a>
            </div>
        </Container>
        </FadeIn>
    )
}