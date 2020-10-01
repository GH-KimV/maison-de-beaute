import React from 'react';

const SelectedMainService = ({ mainServices, service1, service2, service3, service4 }) => {

    if (mainServices == 2) {
        return (
            <div>
                <div>
                    <h2>{service1}</h2>
                </div>
                <div>
                    <h2>{service2}</h2>
                </div>
            </div>
        )
    }
    else if (mainServices == 4) {
        return (
            <div>
                <div>
                    <h2>{service1}</h2>
                </div>
                <div>
                    <h2>{service2}</h2>
                </div>
                <div>
                    <h2>{service3}</h2>
                </div>
                <div>
                    <h2>{service4}</h2>
                </div>
            </div>
        )
    }

    return (
        <div>
        </div>
    )
}

export default SelectedMainService;