import React from 'react';
import GoogleMaps from 'simple-react-google-maps';
const Maps = () => {
        return(
            <div>
                <div className='container'>
                    <GoogleMaps
                    apiKey={'AIzaSyAKEyJXo3HxVTw4y8VKrNEz5bARXVPSEvk'}
                    style={{ height: '630px', width:'350px' }}
                    zoom={17}
                    center={{
                        lat: 19.390467180415126,
                        lng: -99.17332031783118
                         
                    }}
                    markers={[
                        { lat: 19.371824869382195, lng:-99.1408129725013},
                        { lat: 19.390589302274932, lng:-99.16574154384854},
                        { lat: 19.390456421303625, lng:-99.1733147717725},
                        { lat: 19.373844032630952, lng:-99.17852054305231},
                        { lat: 19.363973385433766, lng:-99.18185639301143},
                        { lat: 19.38548663068882, lng: -99.17493152467829},
                        { lat: 19.37496900320532, lng: -99.16329179185472},
                        { lat: 19.380461588940516, lng: -99.18475073057446},
                        { lat: 19.38379271990766, lng: -99.18799733539937},
                        { lat: 19.393230846542668, lng: -99.18799733539937},
                        { lat: 19.394541489199636, lng: -99.17364147385214}
                    ]}
                    />
                </div>
            </div>
        );
    }
    export default Maps;