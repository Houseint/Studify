import React from 'react';
import { View, Image, StyleSheet, SectionList, Text, TouchableOpacity} from 'react-native';



const TelaInicial = ({navigator}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                //Botão do menu
                <TouchableOpacity onPress={() => navigator.openDrawer()}>
                    <Image source={require('../img/menu.png')} style={styles.menu} />
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigator.navigate()}>
                    <Image source={require('../img/livro.png')} style={styles.logo} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default TelaInicial;