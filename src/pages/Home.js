import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
        horizontalScrollElement.current.scrollLeft += 500;
    }, [layers])



    const newLayer = (e) => {
        setLayers([...layers, data.find(elem => {
            return elem.function_name === selected
        })]);
    }



    return (
        <Container>

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
            style={{ justifyContent:"left", overflow: "scroll", flexWrap: "nowrap", alignContent:"left"}}>

                {layers.map((elem, i) => <Col xs={4}><ModelEntry key={i} name={elem.function_name} params={elem.params}/> </Col>)}

            </Row>
        </Container>
    )
}

export default Home;