import { useEffect, useState } from "react";
import ModelEntry from "../components/ModelEntry";

import data from "../params_react.json"

function Home() {
    
    const [layers, setLayers] = useState([])
    const [selected, setSelected] = useState("")

    useEffect(()=> {
        setSelected('attention')
    }, [])

    const newLayer = (e) => {

        setLayers([...layers, data.find(elem => {
            return elem.function_name === selected
        })]);
        console.log(layers)
    }

    return (
        <div>

            <select name="layer" id="layer" 
            onChange={(e) => {
                setSelected(e.target.value); 
                console.log("selected: ", selected)
            }}>

                {data.map((elem, i) => {
                    return (
                        <option key={i} value={elem.function_name}>
                            {elem.function_name}
                        </option>
                    )
                })}
                
            </select>
            <input type="button" onClick={newLayer} value="add layer"/>
            

            <div>
                {/* render these elements into their own box, horizontal aligned */}
                {/* use bootstrap horizontal-flexbox */}

                {layers.map((elem, i) => {
                        return (
                            <ModelEntry key={i} name={elem.function_name} params={elem.params} />
                            )
                        })}

            </div>
        </div>
    )
}

export default Home;