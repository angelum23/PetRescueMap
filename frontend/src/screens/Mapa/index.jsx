import React from 'react';
import { ScrollView } from "@gluestack-ui/themed";
import { Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const { height: screenHeight } = Dimensions.get('window');
const markerCriciuma = {
    coordinate: { latitude: -28.6835, longitude: -49.3699 },
    title: "Criciuma",
    description: "Descrição do novo marcador"
}
const regionCriciuma = {
    latitude: -28.6835,
    longitude: -49.3699,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

const Mapa = () => {
    const [region, setRegion] = React.useState(regionCriciuma);
    const [detais, setDetails] = React.useState();
    const [markers, setMarkers] = React.useState([markerCriciuma]);
    const addMarker = (coordinate) => {
        const newMarker = {
            coordinate: coordinate,
            title: "Novo Marcador",
            description: "Descrição do novo marcador"
        };
        setMarkers([...markers, newMarker]);
    }
    
    const handleRegionChange = (_region, _details) => {
        setRegion(_region);
        setDetails(_details);
    }

    return (
        <ScrollView flex={1}>
            <MapView style={{height: screenHeight}} region={region} onPress={(e) => addMarker(e.nativeEvent.coordinate)} onRegionChangeComplete={handleRegionChange}>
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.coordinate}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
            </MapView>
        </ScrollView>
    );
}


export default Mapa;