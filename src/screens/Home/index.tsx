import React from "react";

import * as S from "./styles";
import useFetch from "./data";
import { ListRenderItem } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home: React.FC = () => {
  const navigation = useNavigation<any>();
  const { api } = useFetch();

  const renderItem: ListRenderItem<S.Props> = React.useCallback(({ item }) => {
    return (
      <S.Box onPress={() => navigation.navigate("Detail", { data: item })}>
        <S.ItemImage source={{ uri: item.imagen }} />
        <S.ItemTitle numberOfLines={1}>{item.nome}</S.ItemTitle>
        <S.ItemPrice numberOfLines={1}>{item.telefone}</S.ItemPrice>
        <S.ItemBlock numberOfLines={1}>
          {item.cidade} - {item.estado}
        </S.ItemBlock>
      </S.Box>
    );
  }, []);

  return (
    <S.Container>
      <S.Title>Facilitadores encontrados</S.Title>
      {api.length > 0 ? (
        <S.List
          data={api}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderItem}
          numColumns={2}
        />
      ) : (
        <S.NoContent>Nenhum facilitador encontrado</S.NoContent>
      )}
    </S.Container>
  );
};

export default Home;
