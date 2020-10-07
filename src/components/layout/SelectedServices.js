import React from 'react';
import Data from "../data/servicesData.json";

const SelectedServices = ({ serviceKey }) => {

    let currentService;

    for(let service in Data) {
        if(service === serviceKey) {
            currentService = Data[service]
        }
    }

    console.log(currentService)

    return (
        <div>
            <div>
                {/* {Data.((key) => {
                    console.log(Data[key])
                    return (
                        <div className="right-row-container">
                            <h2>{Data[key].serviceName}</h2>
                            <p>{data[key].servicePrice} </p>
                            <p>{data[key].serviceContent}</p>
                            <img src={data[key].serviceLargeImage} />
                        </div>
                    );
                }
                )} */}
            </div>
            {/* <div>
                {OtherData.map((key, value) => {
                    return (
                        <div value={value}>
                            <h3>{key.serviceName}</h3>
                            <p>{key.servicePrice}</p>
                        </div>
                    )
                })}
            </div> */}
        </div>
    )

}

export default SelectedServices;