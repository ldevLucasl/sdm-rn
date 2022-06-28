import React from "react";

import * as S from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useFetch from "../Home/data";

const Detail: React.FC = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const data = route.params.data;
  const [token, setToken] = React.useState<string | null>(null);
  const { handlers } = useFetch();

  React.useEffect(() => {
    const load = async () => {
      const token = await AsyncStorage.getItem("token");
      setToken(token);
    };
    load();
  }, []);

  const handleWhatsAppContact = () => {
    Linking.openURL(
      `whatsapp://send?text=Olá, gostaria de saber mais sobre o ${data.nome}`
    );
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.ImgBox>
          <S.BackButton onPress={() => navigation.goBack()}>
            <S.BackIcon name="arrowleft" />
          </S.BackButton>
          {token === data.token && (
            <S.DeleteButton
              onPress={() => {
                handlers.handleDelete(data.id);
                navigation.navigate("Footer", {
                  screen: "Home",
                });
              }}
            >
              <S.DeleteIcon name="trash" />
            </S.DeleteButton>
          )}
          <S.ItemImage source={{ uri: data.imagen }} />
        </S.ImgBox>
        <S.Title>{data.nome}</S.Title>
        <S.Line />

        <S.Label>Descrição:</S.Label>
        <S.ItemDescription>{data.descricao}</S.ItemDescription>
        <S.Line />

        <S.Label>Telefone:</S.Label>
        <S.ItemPrice>{data.telefone}</S.ItemPrice>
        <S.Line />

        <S.Label>Localização:</S.Label>
        <S.ItemBlock>
          {data.cidade} - {data.estado}
        </S.ItemBlock>
      </S.Wrapper>
      <S.Button onPress={handleWhatsAppContact}>
        <S.ButtonText>Entrar em contato</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default Detail;
