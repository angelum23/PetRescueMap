import { FabIcon } from "@gluestack-ui/themed";
import { Box, Fab, AddIcon } from "@gluestack-ui/themed";
import CardPost from "../../components/Card";
import React, { useCallback, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { firebase_db } from "../../components/firebase/firebaseConfig";
import { FlatList, ActivityIndicator, Dimensions, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";


const {width} = Dimensions.get('window')

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [animais, setAnimais] = useState([]);
  async function fetchData() {
    try {
      setLoading(true);
      const animaisCollection = collection(firebase_db, "animais");
      const animaisQuery = query(animaisCollection, orderBy("data", "desc"));
      const querySnapshot = await getDocs(animaisQuery);
      if (querySnapshot.empty) {
        return;
      }
      const array = [];
      querySnapshot.forEach((doc) => {
        array.push({ id: doc.id, ...doc.data() });
      });
      setAnimais(array);
    } finally {
      setLoading(false);
    }
  }
  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  return (
    <Box flex={1} justifyContent="flex-start" m={10}>
      {loading && <ActivityIndicator size="large" color="#F15156" />}
      <FlatList
        data={animais}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={true}
        horizontal
        snapToOffsets={[...Array(animais.length)].map(
          (x, i) => i * (width*0.75-20) + (i-1.85)*20
        )}
        snapToAlignment={'start'}
        scrollEventThrottle={16}
        style={{marginTop: 20}}
        decelerationRate="fast"
        renderItem={({ item }) => (
          <View
            style={{
              width: width*0.75 - 10,
              marginHorizontal:5,
            }}
          >
            <CardPost
              nomeAnimal={item?.nomeAnimal}
              idade={item?.idade}
              raca={item?.raca}
              genero={item?.genero}
              descricao={item?.descricao}
              telefone={item?.telefone}
              imagemValue={item?.imagem}
            />
          </View>

        )}
      />
      <Fab
        size="lg"
        bg="#2D384C"
        placement="bottom right"
        isHovered={false}
        isDisabled={false}
        isPressed={false}
        onPress={() => navigation.navigate("Cadastrar Animais")}
      >
        <FabIcon as={AddIcon} />
      </Fab>
    </Box>
  );
};

export default Home;
