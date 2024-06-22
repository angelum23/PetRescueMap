import React from 'react';
import { ScrollView } from "@gluestack-ui/themed";
import { Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { collection, getDocs } from "firebase/firestore";
import { firebase_db } from "../../components/firebase/firebaseConfig";
import MapHook from "../Mapa/mapHook"

const { height: screenHeight } = Dimensions.get('window');
const markerCriciuma = {
    coordinate: { latitude: -28.6835, longitude: -49.3699 },
    title: "Criciuma",
    description: "Descrição do novo marcador"
}


const Mapa = () => {
    const [markers, setMarkers] = React.useState([markerCriciuma]);
    const [fullMap, setFullMap] = React.useState(true);
    const {handleRegionChange, region} = MapHook();

    const handleClickMarker = (event) => {
        if(!fullMap) return;
        setFullMap(false);
    }

    const mapHeight = fullMap ? screenHeight : screenHeight / 3;

    const buscarAnimais = async () => {
        const querySnapshot = await getDocs(collection(firebase_db, "animais"));

        querySnapshot.forEach((doc) => {
            if(!doc || !doc.data()) return;
            
            console.log("Document data:", doc.data());
        });
    }

    React.useEffect(() => {
        buscarAnimais;
    }, []);

    return (
        <ScrollView flex={1}>
            <MapView style={{height: mapHeight}} region={region} onRegionChangeComplete={handleRegionChange}>
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.coordinate}
                        title={marker.title}
                        description={marker.description}
                        onPress={handleClickMarker}
                    />
                ))}
            </MapView>
            {!fullMap && <ScrollView flex={1}>
                {/* aqui vao os dados do pet */}
            </ScrollView>}
        </ScrollView>
    );
}


export default Mapa;