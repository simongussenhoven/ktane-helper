import '../styles/buttons.css';
export default function getAdvice (wires, serialn) {

    if (wires.length === 3){
        if (wires.filter(wire => wire.color == "Not selected").length > 0){
            return "⚠️ Not all of the selected wires are assigned a colour"
        }
        else if (wires.filter(wire => wire.color === "Red").length <= 0){
            return "No red wires? Cut the 2nd wire"
        }
        else if (wires[2].color === "White") {
            return "Last wire = white! Cut the last wire!"
        }
        else if (wires.filter(wire => wire.color === "Blue").length > 0 && wires.filter(wire => wire.color === "Blue").length > 1) {
            return "More than 2 blue wires? Cut the last blue wire"
        }        
        else {
            return "Otherwise: Cut the last wire"
        }
    }
    else if (wires.length === 4){
        if (wires.filter(wire => wire.color == "Not selected").length > 0){
            return "⚠️ Not all of the selected wires are assigned a colour"
        }
        else if (serialn = ''){
            return "⚠️ Please enter a valid bomb serial number"
        }
    }
    else if (wires.length === 5){
    //some code
    }
    else if (wires.length === 6){
        
    }
}
