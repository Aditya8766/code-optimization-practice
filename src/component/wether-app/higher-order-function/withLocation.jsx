import React, { useState, useEffect } from "react";

const withLocation = (WrappedComponent) => {
    return (props) => {
        const [latitude, setLatitude] = useState(null);
        const [longitude, setLongitude] = useState(null);
        const [locationFetched, setLocationFetched] = useState(false);

        useEffect(() => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    setLatitude(pos.coords.latitude);
                    setLongitude(pos.coords.longitude);
                    setLocationFetched(true);
                });
            }
        }, []);

        if (!locationFetched) return <p>Fetching location...</p>;

        return <WrappedComponent latitude={latitude} longitude={longitude} {...props} />;
    };
};

export default withLocation;
