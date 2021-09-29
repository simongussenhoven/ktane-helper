import { Form, Dropdown, Button} from "react-bootstrap"
import { useState } from 'react'
import uuid from 'react-uuid'
import FadeIn from 'react-fade-in'
import getAdvice from '../functions/wires.js'


export default function Wires() {

    const [wires, setWires] = useState([
        {color: "Not selected"},
        {color: "Not selected"},
        {color: "Not selected"}
    ]);
    const[serialn, setSerial] = useState('')
    const addSerial = (event) => {
        event.target.value.length >= 6 ? setSerial(event.target.value): setSerial('')
    }
    //use state hook to set advice
    const [advice, setAdvice] = useState ("Set all selected wires to a color")    

    //select color on wire
    const wireSelect = (index, newColor) => {
       const newWires = wires.map ((wire, wireIndex) => {
           if (index === wireIndex){
               wire.color = newColor;
               return wire
           }
           else {
               return wire
           }
       })
       setWires(newWires)
       setAdvice(getAdvice(wires, serialn))
    }

    //add a new wire
    const addWire = () => {
        setWires([...wires, {color: "Not selected"}])
        setAdvice(getAdvice(wires, serialn))
    }

    //reset the form to default
    const resetWires = () => {
        const newWires = [];
        for (let i = 0; i <= 2; i++){
            newWires.push({color: "Not selected"})
        }
        setWires(newWires)
        setAdvice(getAdvice(wires, serialn))
    }
    return (
        <FadeIn>
            <section className="container my-5">
            <h1 className="p-3">About Wires</h1>
            <Form className="d-flex flex-column">
            <div className="d-flex">
                <div className="col col-12 col-md-6">
                    <h2>Select the wires on the bomb ({wires.length})</h2>
                    <div className="row">
                        <div className="col-6">
                        {wires.map((el, index) => {
                        return (
                            <Dropdown variant="outline-secondary" onChange={wireSelect} className="col-col-12 col-md-4 p-1" key={uuid()}>
                                <Dropdown.Toggle id="dropdown-basic"  variant="outline-secondary" >
                                    Wire {index +1} : {el.color}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onSelect={() => { wireSelect(index, "Not selected") }} value="3">Not selected</Dropdown.Item>
                                    <Dropdown.Item onSelect={() => { wireSelect(index, "Yellow") }} value="3">Yellow</Dropdown.Item>
                                    <Dropdown.Item onSelect={() => { wireSelect(index, "Red") }} value="3">Red</Dropdown.Item>
                                    <Dropdown.Item onSelect={() => { wireSelect(index, "Blue") }} value="3">Blue</Dropdown.Item>
                                    <Dropdown.Item onSelect={() => { wireSelect(index, "White") }} value="3">White</Dropdown.Item>
                                    <Dropdown.Item onSelect={() => { wireSelect(index, "Black") }} value="3">Black</Dropdown.Item>
                                    
                                </Dropdown.Menu>
                            </Dropdown>
                            
                            )
                        })}
                        <Button className="m-1" disabled={wires.length < 6 ? false : true} onClick={wires.length < 6 ? addWire : ""}>Add</Button>
                        <Button variant="secondary" onClick={resetWires}>Reset</Button>
                        </div>                    
                    </div>
                </div>
                <div className="col col-12 col-md-6 border-left px-3">
                <h2>Advice</h2>
                    {advice}
                </div>
            </div>
            </Form>
        </section>
        </FadeIn>
    )
}