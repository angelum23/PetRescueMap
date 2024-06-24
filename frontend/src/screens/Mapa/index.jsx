import React from 'react';
import { ScrollView, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { collection, getDocs } from "firebase/firestore";
import { firebase_db } from "../../components/firebase/firebaseConfig";
import MapHook from "../Mapa/mapHook";
import CardPost from "../../components/Card";
import { set } from '@gluestack-style/react';

const { height: screenHeight } = Dimensions.get('window');

const markerCriciuma = {
    coordinate: { latitude: -28.6835, longitude: -49.3699 },
    title: "Criciuma",
    description: "Descrição do novo marcador"
};

const Mapa = () => {
    const [markers, setMarkers] = React.useState([markerCriciuma]);
    const [fullMap, setFullMap] = React.useState(true);
    const [selectedPet, setSelectedPet] = React.useState(null);
    const { handleRegionChange, region } = MapHook();

    const handleClickMarker = (event, petData) => {
        if (fullMap) {
            setFullMap(false);
            setSelectedPet(petData);
        } else {
            setFullMap(true);
            setSelectedPet(petData);
        }
    };

    const mapHeight = fullMap ? screenHeight : screenHeight / 3;

    const buscarAnimais = async () => {
        const querySnapshot = await getDocs(collection(firebase_db, "animais"));
        const newMarkers = [];

        querySnapshot.forEach((doc) => {
            if (!doc || !doc.data()) return;

            const data = doc.data();
            const { cordenadas, nomeAnimal, descricao } = data;

            if (cordenadas) {
                newMarkers.push({
                    coordinate: cordenadas,
                    title: nomeAnimal || "Sem nome",
                    description: descricao || "Sem descrição",
                    petData: data,
                });
            }

        });

        setMarkers(newMarkers);
    };

    React.useEffect(() => {
        buscarAnimais();
    }, []);

    return (
        <ScrollView flex={1}>
            <MapView style={{ height: mapHeight }} region={region} onRegionChangeComplete={handleRegionChange}>
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.coordinate}
                        title={marker.title}
                        description={marker.description}
                        onPress={(e) => handleClickMarker(e, marker.petData)}
                    />
                ))}
            </MapView>
            {fullMap && selectedPet && (
                <ScrollView>
                    <CardPost
                        nomeAnimal={selectedPet?.nomeAnimal}
                        idade={selectedPet?.idade}
                        raca={selectedPet?.raca}
                        genero={selectedPet?.genero}
                        descricao={selectedPet?.descricao}
                        telefone={selectedPet?.telefone}
                        imagemValue={selectedPet?.imagem}
                    />
                </ScrollView>
            )}
        </ScrollView>
    );
};

export default Mapa;
