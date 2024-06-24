import { FabIcon } from "@gluestack-ui/themed";
import { Box, Fab, AddIcon } from "@gluestack-ui/themed";
import CardPost from "../../components/Card";
import React, { useCallback, useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore"; // Adicionando 'where'
import { firebase_db } from "../../components/firebase/firebaseConfig";
import { FlatList, ActivityIndicator, Dimensions, View, ScrollView, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { getAuth } from "firebase/auth"; // Para obter a autenticação do usuário
import UserCard from "../../components/Card/index2";

const { width } = Dimensions.get('window');

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [animais, setAnimais] = useState([]);
  const [animaisUsuario, setAnimaisUsuario] = useState([]);
  const userId = getAuth().currentUser?.uid; // Obter o ID do usuário autenticado

  useEffect(() => {
    fetchData();
  }, []);

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
      const arrayUsuario = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        array.push({ id: doc.id, ...data });
        if (data.userId === userId) {
          arrayUsuario.push({ id: doc.id, ...data });
        }
      });
      setAnimais(array);
      setAnimaisUsuario(arrayUsuario);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box flex={1} justifyContent="flex-start" m={10}>
      {loading && <ActivityIndicator size="large" color="#F15156" />}
      <ScrollView>
        <Box mb={10}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 2 }}>Meus animais:</Text>
          <FlatList
            data={animaisUsuario}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={true}
            horizontal
            snapToOffsets={[...Array(animaisUsuario.length)].map(
              (x, i) => i * (width * 0.75 - 20) + (i - 1.85) * 20
            )}
            snapToAlignment={'start'}
            scrollEventThrottle={16}
            decelerationRate="fast"
            renderItem={({ item, index }) => (
              <View
                style={{
                  height: width / 1, // Altura reduzida do card
                  width: width * 0.75 - 10,
                  marginHorizontal: 5,
                }}
              >
                <UserCard
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
        </Box>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 2, marginTop: 20}}>Disponível para adoção:</Text>
        <FlatList
          data={animais}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 0 }}
          renderItem={({ item }) => (
            <CardPost
              nomeAnimal={item?.nomeAnimal}
              idade={item?.idade}
              raca={item?.raca}
              genero={item?.genero}
              descricao={item?.descricao}
              telefone={item?.telefone}
              imagemValue={item?.imagem}
            />
          )}
        />
      </ScrollView>
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
