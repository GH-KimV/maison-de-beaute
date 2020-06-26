import React from 'react';
import Hero from '../layout/Hero';

const Services = () => {
    const msg = 'Services';

    return (
        <div className='container'>
            <Hero msg={msg} />
            <div className='media'>
                <div className='media-body'>
                    <h5 className='mt-0'>Service Name 1</h5>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                    </p>
                    <button type='button' class='btn btn-secondary'>
                        Learn More
                    </button>
                </div>
                <img
                    className='align-self-center mr-3'
                    src='...'
                    alt='Generic placeholder image'
                />
            </div>
            <div class='media'>
                <img
                    class='align-self-center mr-3'
                    src='...'
                    alt='Generic placeholder image 2'
                />
                <div class='media-body'>
                    <h5 class='mt-0'>Service Name 2</h5>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                    </p>
                    <button type='button' class='btn btn-secondary'>
                        Learn More
                    </button>
                </div>
            </div>
            <div className='media'>
                <div className='media-body'>
                    <h5 className='mt-0'>Service Name 3</h5>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                    </p>
                    <button type='button' class='btn btn-secondary'>
                        Learn More
                    </button>
                </div>
                <img
                    className='align-self-center mr-3'
                    src='...'
                    alt='Generic placeholder image 3'
                />
            </div>
        </div>
    );
};

export default Services;
