import {Card, Col, Form, Row} from "react-bootstrap"

function ModelEntry({name, params}) {


    return (
            <Card style={{ width: '25rem', flex: 1}}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                <Row>

                {params.map((elem, i) => {
                    return (
                        <Col>
                        <Form.Group>
                                <Form.Control style={{ width: '10rem'}} type="text" placeholder="null" defaultValue={elem.value==null?"":elem.value} />
                                <Form.Text className="text-muted">
                                {elem.name}
                                </Form.Text>
                                </Form.Group>
                        </Col>
                            )
                        })}
                </Row>
                </Card.Text>
            </Card.Body>
            </Card>
    )
}

export default ModelEntry;