import React from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <View style={styles.iconContainer}>
            <AntDesign name="user" size={24} color="black" />
          </View>
          <Text style={styles.localizacao}>Rua Vereador José Elías Zaquem</Text>
        </View>
        <TextInput style={styles.searchBar} placeholder="Busque o que você precisa" />
      </View>
      <View style={styles.circulos}>
        {circulos.map((circulo, index) => (
          <View key={index} style={styles.circuloContainer}>
            <View style={styles.circuloWrapper}>
              <Image source={{ uri: circulo.image }} style={styles.circuloImagem} />
            </View>
            <Text style={styles.circuloTexto}>{circulo.title}</Text>
          </View>
        ))}
      </View>
      <View style={styles.categoriasPrincipais}>
        <View style={styles.row}>
          {categoriasPrincipais.slice(0, 4).map((categoria, index) => (
            <View key={index} style={styles.categoriaPrincipal}>
              <Image
                source={{ uri: categoria.image }}
                style={styles.image}
              />
              <Text style={styles.textoCategoriaPrincipal}>{categoria.title}</Text>
            </View>
          ))}
        </View>
        <View style={styles.row}>
          {categoriasPrincipais.slice(4).map((categoria, index) => (
            <View key={index} style={styles.categoriaPrincipal}>
              <Image
                source={{ uri: categoria.image }}
                style={styles.image}
              />
              <Text style={styles.textoCategoriaPrincipal}>{categoria.title}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.ofertas}>
        <Text style={styles.tituloOfertas}>Ofertas da Semana</Text>
        <View style={styles.ofertasLinha}>
          {ofertas.map((oferta, index) => (
          <View key={index} style={styles.ofertaItem}>
           <View style={styles.ofertaContainer}>
             <Text style={styles.textoOferta}>{oferta.title}</Text>
             {oferta.image && (
                <Image source={{ uri: oferta.image }} style={styles.ofertaImagem} />
              )}
           </View>
          </View>
         ))}
        </View>
      </View>

    </ScrollView>
  );
};

const categorias = [
  "Sua tampinha vale+",
  "Destilados no precinho",
  "Aqui tem CUPOM!",
  "Vinhozinho? Tem no zé!"
];

const categoriasPrincipais = [
  { title: "Black Friday", image: "https://images.pexels.com/photos/1267292/pexels-photo-1267292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { title: "Cervejas", image: "https://images.pexels.com/photos/1435598/pexels-photo-1435598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { title: "Destilados", image: "https://images.pexels.com/photos/29436469/pexels-photo-29436469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { title: "Vinhos", image: "https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { title: "Não alcoólicos", image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { title: "Águas e Gelo", image: "https://images.pexels.com/photos/3124674/pexels-photo-3124674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { title: "Comidinhas", image: "https://images.pexels.com/photos/1894325/pexels-photo-1894325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { title: "Drinks Prontos", image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
];

const circulos = [
  { title: "Sua tampinha vale+", image: "https://images.pexels.com/photos/5538168/pexels-photo-5538168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { title: "Destilados no precinho", image: "https://images.pexels.com/photos/29435754/pexels-photo-29435754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { title: "Aqui tem CUPOM", image: "https://images.pexels.com/photos/5625108/pexels-photo-5625108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { title: "Vinhozinho? Tem no zé!", image: "https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
];

const ofertas = [
  {
    title: "Drinks em promo",
    image: "https://w7.pngwing.com/pngs/91/672/png-transparent-tennessee-whiskey-liquor-jack-daniel-s-bourbon-whiskey-jack-daniel-thumbnail.png"
  },
  {
    title: "Até 25% off",
    image: "https://e7.pngegg.com/pngimages/47/717/png-clipart-vodka-distilled-beverage-cocktail-wine-smirnoff-green-apple-vodka-distilled-beverage-alcohol-by-volume-thumbnail.png"
  }
];



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    paddingTop: 32,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  localizacao: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  searchBar: {
    marginTop: 8,
    padding: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  circulos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  circuloContainer: {
    alignItems: 'center',
    maxWidth: 80,
  },
  circuloWrapper: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  circuloImagem: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  circuloTexto: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 4,
  },
  categorias: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  categoria: {
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 14,
    textAlign: 'center',
  },
  categoriasPrincipais: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoriaPrincipal: {
    width: '22%',
    alignItems: 'center',
    marginVertical: 8,
  },
  textoCategoriaPrincipal: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
  },
  ofertas: {
    padding: 16,
  },
  tituloOfertas: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  oferta: {
    marginVertical: 8,
    alignItems: 'center',
  },
  textoOferta: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 0,
    paddingTop: '100%',
    borderRadius: 10,
    marginBottom: 8
  },
  ofertaImagem: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 8,
  },
  ofertaContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
  },
  ofertasLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  ofertaItem: {
    flex: 1,
    marginHorizontal: 8,
  },
})