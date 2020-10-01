import React from 'react';

const SelectedOtherService = ({ otherServices, otherService1, otherService2, otherService3, otherService4 }) => {

    if (otherServices == 2) {
        return (
            <div>
                <div>
                    <h3>{otherService1}</h3>
                </div>
                <div>
                    <h3>{otherService2}</h3>
                </div>
            </div>
        )
    }
    else if (otherServices == 4) {
        return (
            <div>
                <div>
                    <h3>{otherService1}</h3>
                </div>
                <div>
                    <h3>{otherService2}</h3>
                </div>
                <div>
                    <h3>{otherService3}</h3>
                </div>
                <div>
                    <h3>{otherService4}</h3>
                </div>
            </div>
        )
    }

    return (
        <div>
        </div>
    )
}

export default SelectedOtherService;