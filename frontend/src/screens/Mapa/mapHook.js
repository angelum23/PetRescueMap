import React from 'react';

const regionCriciuma = {
    latitude: -28.6835,
    longitude: -49.3699,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

const MapHook = () => {
    const [region, setRegion] = React.useState(regionCriciuma);
    const [detais, setDetails] = React.useState();

    const handleRegionChange = (_region, _details) => {
        setRegion(_region);
        setDetails(_details);
    }

    return {handleRegionChange, region}
}

export default MapHook;

