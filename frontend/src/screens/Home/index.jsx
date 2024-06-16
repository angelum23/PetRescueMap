import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

// Biblioteca de Carousel
import Carousel from 'react-native-snap-carousel'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    cardCarousel: {
        width: ITEM_WIDTH,
    },
    image: {
        height: 250,
        borderRadius: 8,
    },
        container: {
        flex: 1,
        backgroundColor: 'white'
    }
})

console.log(styles)


const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.88

const Props = {
    item: {
        imgUrl: string       
    }, 
    index: number
}

function carouselCardItem({item, index}){  
    return(
        <View style={styles.cardCarousel} key={index}>
            <Image style={styles.image} source={{ uri: item.imgUrl }}/>
        </View>
    )
}

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



const Home = () => {
    return (
        <View style={styles.container}>
        <Carousel
            data={carouselItems}
            renderItem={carouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            useScrollView={true}
        />
        </View>
    )
}


export default Home;