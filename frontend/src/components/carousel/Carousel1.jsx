import React from 'react';
import { View, StyleSheetm, Dimensions } from 'react-native';

// Biblioteca de Carousel
import Carousel from 'react-native-snap-carousel'

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.88

// Dados Carousel
const carouselItems = [
    {
        imgUrl: 
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.azpetshop.com.br%2Fblog%2Fgatos%2Fadotar-gato-o-que-voce-precisa-saber%2F&psig=AOvVaw3D351mbxiM6pK-072KGTaD&ust=1718236741983000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDp5IPh1IYDFQAAAAAdAAAAABAE'
    },
    {
        imgUrl:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.petz.com.br%2Fblog%2Fdicas%2Fadocao-de-gatos%2F&psig=AOvVaw3D351mbxiM6pK-072KGTaD&ust=1718236741983000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDp5IPh1IYDFQAAAAAdAAAAABAJ'
    },
    {
        imgUrl:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.petz.com.br%2Fblog%2Fpets%2Fgato%2F&psig=AOvVaw3D351mbxiM6pK-072KGTaD&ust=1718236741983000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDp5IPh1IYDFQAAAAAdAAAAABAR'
    }
]



const Carousel1 = () => {
    return (
        <View style={styles.container}>
        <Carousel
            data={carouselItems}
            renderItem={}
            sliderWidth={}
            itemWidth={}
            useScrollView={true}
        />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default Carousel1;