import React from 'react';
import { View, Image, StyleSheet, SectionList, Text, TouchableOpacity} from 'react-native';



const HomeScreen = ({navigator}) => {
    return (
        // Main Container
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Últimos conteúdos acessados</Text>
                <Image source={require('../img/relogio.png')} style={styles.frames} />
            </View>

            <View>
                <Text style={styles.title}>Conteúdos para serem revisados</Text>
                <Image source={require('../img/livro.png')} style={styles.frames} /> /*Colocar a lupa depois*/
            </View>

            <View>
                <Text style={styles.title}>Recomendações</Text>
                <Image source={require('../img/menu.png')} style={styles.frames} /> /*Colocar a bandeirinha de salvar*/
            </View>

        // Header
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigator.openDrawer()}>
                <Image source={require('../img/menu.png')} style={styles.menu} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigator.navigate()}>
                <Image source={require('../img/livro.png')} style={styles.logo} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigator.navigate()}>
                <Image source={require('../img/relogio.png')} style={styles.logo} />
            </TouchableOpacity>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22272C',
    },
    header: {
        backgroundColor: '2E343B',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        width: '100%',
        height: '7.5%',
        bottom: 0,
        gap: 20,
    },
});

export default HomeScreen;