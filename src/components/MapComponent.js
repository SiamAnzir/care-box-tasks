import {useMemo, useState} from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import {Card, Col, Container, InputGroup, Row, Form, Button} from "react-bootstrap";
import {mapDistance} from "../methods/calculateDistance";
import axios from "axios";

const MapComponent = () => {
    const [distance,setDistance] = useState(0)
    const { isLoaded } = useLoadScript({
        googleMapsApiKey:  process.env["NEXT_PUBLIC_GOOGLE_MAPS_API_KEY"] ,
    });

    /** Setting Center of the Map **/

    const center = useMemo(() => ({ lat: 23.8103, lng: 90.4125 }), []);

    /** Setting Markers **/

    const markers = [{
        id:1,
        position:{ lat: 23.760553125947684, lng: 90.38927467742258 }
    },{
        id:2,
        position: {lat: 23.813676977644572,lng: 90.42413504023418}
    }]

    /** Calculate Distance with the button Click **/

    const calculateDistanceHandler = () => {
        setDistance(mapDistance({
            lat1:23.760553125947684,
            lon1:90.38927467742258,
            lat2:23.813676977644572,
            lon2:90.42413504023418
        }))
    }

    /** Forming Post Request **/

    const apiToken = 'siamanzir18@gmail.com';
    const headers = {
        'Authorization' : `${apiToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };
    const postRequest = async () => {
        try{
            const response = await axios.post('https://care-box-backend.herokuapp.com/api/v1/applicant_test/post_distance/',
                {Distance:distance}, {
                    headers: headers
                })
            console.log(response)
        } catch(error) {
                console.log(error.response);
                console.log('error')
        }
    }

    return(
        <Container className="page-container">
            <h1 className="text-center pt-4">Distance Between Two Points</h1>
            <Row>
                <Col lg={9}>
                    <div>
                        {(!isLoaded) ? (
                            <div>Loading...</div>
                        ) : (
                            <div className="map-card">
                                <GoogleMap zoom={11} center={center} mapContainerClassName="map-container">
                                    {
                                        markers.map(({id,position}) => (
                                            <MarkerF key={id} position={position} />
                                        ))
                                    }
                                </GoogleMap>
                            </div>
                        )}
                    </div>
                </Col>
                <Col lg={3}>
                    <Card className="result-card" bg="dark" text="white">
                        <Row style={{textIndent:'120px'}}>Position 1</Row>
                        <InputGroup className="mb-3 mt-3">
                            <InputGroup.Text>Longitude</InputGroup.Text>
                            <Form.Control value="90.38927467742258" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text> Latitude</InputGroup.Text>
                            <Form.Control value="23.760553125947684"/>
                        </InputGroup>
                        <Row style={{textIndent:'120px'}}>Position 2</Row>
                        <InputGroup className="mb-3 mt-3">
                            <InputGroup.Text>Longitude</InputGroup.Text>
                            <Form.Control value="90.42413504023418"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text> Latitude</InputGroup.Text>
                            <Form.Control value="23.813676977644572"/>
                        </InputGroup>
                        <p className="text-center">Calculate Distance between two points</p>
                        <div className="center-items">
                            <Button onClick={() => calculateDistanceHandler()}>Calculate</Button>
                        </div>
                        <div>
                            {
                                (distance !== 0) ? (
                                    <div>
                                        <h6 className="text-center pt-3">{(Math.round(distance * 100) / 100).toFixed(2)} km </h6>
                                        <div className="center-items" style={{paddingBottom:'10px'}}>
                                            <Button onClick={() => postRequest()}>Post Response</Button>
                                        </div>
                                    </div>
                                ) : (
                                    <p></p>
                                )
                            }
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default MapComponent;