import React from 'react';
import { View, Image, StyleSheet, SectionList, Text, TouchableOpacity} from 'react-native';



const HomeScreen = ({navigator}) => {
    return (
        // Main Container
        <View style={styles.main}>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => navigator.navigate('')}>
                    <Image source={require('../img/menu.png')} style={styles.logo} />
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Últimos conteúdos acessados</Text>
                    <Image source={require('../img/Relogio-iconP.png')} style={styles.frames} />
                </View>

                <View>
                    <Text style={styles.title}>Conteúdos para serem revisados</Text>
                    <Image source={require('../img/Pesquisar-iconP.png')} style={styles.frames} />
                </View>

                <View>
                    <Text style={styles.title}>Recomendações</Text>
                    <Image source={require('../img/FitaBookMark-icon.png')} style={styles.frames} />
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
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#22272C',
        paddingLeft: 12,
        paddingRight: 12,
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
        padding: '5%',
    },
});

export default HomeScreen;