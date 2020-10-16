import React from 'react';
import Hero from '../../layout/Hero';
import Navbar from '../../layout/Navbar';
import FAQ from './FAQ';

const Policies = () => {
    const msg = 'Policies';

    return (
        <div>
            <div className='container-fluid'>
                <Navbar />
                <Hero msg={msg} />
            </div>
            <div className='policy-content'>
                <h3>Cancellation</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare consectetur enim malesuada tristique pellentesque. Quis quam tellus volutpat nibh at consectetur. Risus nibh ac facilisi id mauris. Leo, ipsum vitae in laoreet vel nulla. Velit maecenas consectetur eu posuere leo fermentum rhoncus non integer. Sit morbi.
            </p>

                <h3>Late</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare consectetur enim malesuada tristique pellentesque. Quis quam tellus volutpat nibh at consectetur. Risus nibh ac facilisi id mauris. Leo, ipsum vitae in laoreet vel nulla. Velit maecenas consectetur eu posuere leo fermentum rhoncus non integer. Sit morbi.
            </p>

                <h3>No Shows</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare consectetur enim malesuada tristique pellentesque. Quis quam tellus volutpat nibh at consectetur. Risus nibh ac facilisi id mauris. Leo, ipsum vitae in laoreet vel nulla. Velit maecenas consectetur eu posuere leo fermentum rhoncus non integer. Sit morbi.
            </p>
            </div>
            <div className="FAQ">
                <FAQ />
            </div>
        </div>
    );
};

export default Policies;
