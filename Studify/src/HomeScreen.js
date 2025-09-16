import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';


const HomeScreen = ({ navigator }) => {
  return (
    <View style={styles.main}>
      {/* Botão de menu */}
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigator.navigate('')}>
          <Image source={require('../img/menu.png')} style={styles.logo} />
        </TouchableOpacity>
      </View>

      {/* Conteúdo */}
      <View style={styles.container}>
        <View>
        <View style={styles.icones}>
          <Text style={styles.title}>Últimos conteúdos acessados</Text>
          <Image source={require('../img/Relogio-iconP.png')} style={styles.frames} />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.row}>
            {[...Array(4)].map((_, i) => (
              <View key={i} style={styles.rectangle} />
            ))}
          </ScrollView>
          
        </View>

        <View>
            <View style={styles.icones}>
          <Text style={styles.title}>Conteúdos para serem revisados</Text>
          <Image source={require('../img/Pesquisar-iconP.png')} style={styles.frames} />
            </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.row}>
            {[...Array(5)].map((_, i) => (
              <View key={i} style={styles.rectangle} />
            ))}
          </ScrollView>
          
        </View>

        <View>
        <View style={styles.icones}>
          <Text style={styles.title}>Recomendações</Text>
          <Image source={require('../img/FitaBookMark-icon.png')} style={styles.frames} />
            </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.row}>
            {[...Array(4)].map((_, i) => (
              <View key={i} style={styles.rectangle} />
            ))}
          </ScrollView>
          
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigator.navigate('')}>
          <Image source={require('../img/Pesquisar-iconG.png')} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigator.navigate('')}>
          <Image source={require('../img/livro.png')} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigator.navigate('')}>
          <Image source={require('../img/Relogio-iconG.png')} style={styles.logo} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
    main: {
        flex: 1,
        backgroundColor: '#22272C',
        paddingHorizontal: 12,
      },
      container: {
        flex: 1,
        marginTop: '10%',
        marginLeft: '5%',
      },
      title: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Roboto',
        marginTop: 20,
        marginLeft: 10,
      },
      header: {
        backgroundColor: '#4C545A',
        borderRadius: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '7.5%',
        bottom: '2.5%',
        alignItems: 'center',
        paddingHorizontal: '5%',
      },
      buttons: {
        paddingTop: '10%',
        height: 2.5,
      },
      row: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        marginTop: 10,
      },
      rectangle: {
        width: 150,
        height: 90,
        backgroundColor: '#ccc',
        borderRadius: 8,
        marginRight: 10,
      },
      logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
      },
      frames: {
        width: 30,
        height: 20,
        resizeMode: 'contain',
        marginTop: 10,
        paddingTop: 20,
      },
      icones: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        gap: 10,
      },
    };


export default HomeScreen;
