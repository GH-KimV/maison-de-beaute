import React from 'react';
import Data from "../data/servicesData.json";

const SelectedServices = ({ serviceKey }) => {

    let currentService;

    for (let service in Data) {
        if (service === serviceKey) {
            currentService = Data[service]
        }
    }

    console.log(currentService)

    return (
        <div>
            <div>
                <div className="right-row-container">
                    {currentService.map(s => {
                        return (
                            <div>
                                <h2>{s.serviceName}</h2>
                                <p>{s.servicePrice} </p>
                                <p>{s.serviceContent}</p>
                                <img src={s.serviceLargeImage} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )

}

export default SelectedServices;