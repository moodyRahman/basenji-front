import { useEffect, useRef, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import ModelEntry from "../components/ModelEntry";

import data from "../params_react.json"

function Home() {
    
    const [layers, setLayers] = useState([])
    const [selected, setSelected] = useState("")
    const horizontalScrollElement = useRef();

    useEffect(()=> {
        setSelected('conv_block')
    }, [])


    // we put this into a useEffect so it forces a rerender every new layer
    useEffect(() => {
        horizontalScrollElement.current.scrollLeft += 5000;
    }, [layers])



    const newLayer = (e) => {
        setLayers([...layers, data.find(elem => {
            return elem.function_name === selected
        })]);
    }



    return (
        <Container>
            <div style={{justifyContent:"flex-start", alignContent:"flex-start"}}>

            <Row >
                <Col>
                    <select name="layer" id="layer" value={selected}
                    onChange={(e) => {
                        setSelected(e.target.value);
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
                </Col>

                <Col>
                hello
                </Col>
            </Row>


            <Row ref={horizontalScrollElement} 
            style={{ justifyContent:"flex-start", overflow: "scroll", flexWrap: "nowrap", alignContent:"left", width:"80rem", scrollBehavior:"smooth", height:"45rem"}}>

                {layers.map((elem, i) => <Col id={i} xs={4}><ModelEntry key={i} name={elem.function_name} params={elem.params}/> </Col>)}

            </Row>
            

            <Row>
                {layers.map((elem, i) =>
                    <Col style={{width:"10rem"}}>
                         <Button href={'#' + i}>
                         {elem.function_name}
                         </Button>
                    </Col>
                )}
            </Row>
            </div>
        </Container>
    ) 
}

// ADD A QUICK ACCESS BOX TO CLIKC ON AND ACCESS EACH LAYER
// ADD NUMBERS FOR EACH OF THE LAYERS

export default Home;