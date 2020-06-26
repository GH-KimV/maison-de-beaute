import React from 'react';
import Hero from '../layout/Hero';
import {Accordion, Card, Button} from 'react-bootstrap';

const Policies = () => {
    const msg = 'Policies';

    return (
        <div className='container'>
            <Hero msg={msg} />
            <h5>Cancellation</h5>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corrupti sit itaque, explicabo sequi quis delectus voluptates
                aliquam nihil tempore, facere dolores. Consequuntur accusamus
                unde itaque quis beatae recusandae sint officiis.
            </p>
            <div class='media'>
                <img
                    class='align-self-center mr-3'
                    src='...'
                    alt='Generic placeholder image'
                />
                <div class='media-body'>
                    <h5 class='mt-0'>Late</h5>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
            <h5>No Shows</h5>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit nostrum minus, eum ipsum natus provident minima
                itaque laboriosam enim obcaecati. Aliquam labore praesentium
                fugiat, voluptates aspernatur vel consequuntur molestiae
                explicabo.
            </p>
            <h1>Frequently Asked Questions</h1>
            <Accordion defaultActiveKey='0'>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle
                            as={Button}
                            variant='link'
                            eventKey='0'
                        >
                            Click me!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='0'>
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle
                            as={Button}
                            variant='link'
                            eventKey='1'
                        >
                            Click me!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='1'>
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
};

export default Policies;
