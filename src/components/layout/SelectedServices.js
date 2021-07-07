import React from 'react';
import Data from "../data/servicesData.json";

const SelectedServices = () => {

    let currentService;
    let serviceKey = localStorage.getItem('serviceKey')
    serviceKey = JSON.parse(serviceKey);
    console.log(serviceKey)

    for (let service in Data) {
        if (service === serviceKey) {
            currentService = Data[service]
        }
    }

    console.log(serviceKey)

    return (
        <div>
            <div>
                <div className="right-row-container">
                    {
                        serviceKey
                            ?
                            currentService.map(s => {
                                return (
                                    <div>
                                        <h2>{s.serviceName}</h2>
                                        <p>{s.servicePrice} </p>
                                        <p>{s.serviceContent}</p>
                                        <img src={s.serviceLargeImage} />
                                    </div>
                                )
                            })
                            :
                            <p>Loading....</p>
                    }
                </div>
            </div>
        </div>
    )

}

export default SelectedServices;