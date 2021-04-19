import React, { useState } from 'react';
import {
    Image, Text, View, FlatList, TextInput, StyleSheet,
    Modal, Button, TouchableOpacity, TouchableWithoutFeedback
} from 'react-native';
import CustomToolbar from './genericClasses/CustomToolbar'



class DesignSample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            searchItem: "",
            flowerdata: [
                {
                    id: 1,
                    name: 'Rose'
                },
                {
                    id: 2,
                    name: 'Lily'
                },
                {
                    id: 3,
                    name: 'Tulip'
                },
                {
                    id: 4,
                    name: 'Orchid'
                },
                {
                    id: 5,
                    name: 'Carnation'
                },
                {
                    id: 6,
                    name: 'Freesia'
                },
                {
                    id: 7,
                    name: 'Hyacinth'
                },
                {
                    id: 8,
                    name: 'Peruvian Lily'
                },
                {
                    id: 9,
                    name: 'Chrysanthemum'
                },
                {
                    id: 10,
                    name: 'Sunflower'
                }
            ],
            data: [
                {
                    id: 1,
                    imageurl: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Beautiful_flower_with_petals_that_look_like_candy.jpg',
                    title: 'Rose',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    price: 505650,
                    isFavorite: true
                },
                {
                    id: 2,
                    imageurl: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Leucanthemum_vulgare_%27Filigran%27_Flower_2200px_edit1.jpg',
                    title: 'Lily',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    price: 355450,
                    isFavorite: false
                },
                {
                    id: 3,
                    imageurl: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Tagblume_Commelina_communis_stack25_2019-08-05-RM-8050218-PSD.jpg',
                    title: 'Tulip',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    price: 834350,
                    isFavorite: true
                },
                {
                    id: 4,
                    imageurl: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Beautiful_flower_with_petals_that_look_like_candy.jpg',
                    title: 'Orchid',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    price: 2455134,
                    isFavorite: true
                },
                {
                    id: 5,
                    imageurl: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Leucanthemum_vulgare_%27Filigran%27_Flower_2200px_edit1.jpg',
                    title: 'Carnation',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    price: 1734369,
                    isFavorite: false
                },
                {
                    id: 6,
                    imageurl: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Zinnienbl%C3%BCte_Zinnia_elegans_stack15_20190722-RM-7222254.jpg',
                    title: 'Freesia',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    price: 4344332,
                    isFavorite: true
                },
                {
                    id: 7,
                    imageurl: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Beautiful_flower_with_petals_that_look_like_candy.jpg',
                    title: 'Hyacinth',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    price: 7563489,
                    isFavorite: false
                },
                {
                    id: 8,
                    imageurl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Hemerocallis_lilioasphodelus_flower.jpg',
                    title: 'Peruvian Lily',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    price: 4243636,
                    isFavorite: false
                },
                {
                    id: 9,
                    imageurl: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Zinnienbl%C3%BCte_Zinnia_elegans_stack15_20190722-RM-7222254.jpg',
                    title: 'Chrysanthemum',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    price: 4243636,
                    isFavorite: false
                },
                {
                    id: 10,
                    imageurl: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Tagblume_Commelina_communis_stack25_2019-08-05-RM-8050218-PSD.jpg',
                    title: 'Sunflower',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    price: 4243636,
                    isFavorite: false
                }
            ]
            // ,temp: [],
            , temp: [
                {
                    id: 1,
                    imageurl: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Beautiful_flower_with_petals_that_look_like_candy.jpg',
                    title: 'Rose',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    price: 505650,
                    isFavorite: true
                },
                {
                    id: 2,
                    imageurl: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Leucanthemum_vulgare_%27Filigran%27_Flower_2200px_edit1.jpg',
                    title: 'Lily',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    price: 355450,
                    isFavorite: false
                },
                {
                    id: 3,
                    imageurl: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Tagblume_Commelina_communis_stack25_2019-08-05-RM-8050218-PSD.jpg',
                    title: 'Tulip',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    price: 834350,
                    isFavorite: true
                },
                {
                    id: 4,
                    imageurl: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Beautiful_flower_with_petals_that_look_like_candy.jpg',
                    title: 'Orchid',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    price: 2455134,
                    isFavorite: true
                },
                {
                    id: 5,
                    imageurl: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Leucanthemum_vulgare_%27Filigran%27_Flower_2200px_edit1.jpg',
                    title: 'Carnation',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    price: 1734369,
                    isFavorite: false
                },
                {
                    id: 6,
                    imageurl: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Zinnienbl%C3%BCte_Zinnia_elegans_stack15_20190722-RM-7222254.jpg',
                    title: 'Freesia',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    price: 4344332,
                    isFavorite: true
                },
                {
                    id: 7,
                    imageurl: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Beautiful_flower_with_petals_that_look_like_candy.jpg',
                    title: 'Hyacinth',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    price: 7563489,
                    isFavorite: false
                },
                {
                    id: 8,
                    imageurl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Hemerocallis_lilioasphodelus_flower.jpg',
                    title: 'Peruvian Lily',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    price: 4243636,
                    isFavorite: false
                },
                {
                    id: 9,
                    imageurl: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Zinnienbl%C3%BCte_Zinnia_elegans_stack15_20190722-RM-7222254.jpg',
                    title: 'Chrysanthemum',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    price: 4243636,
                    isFavorite: false
                },
                {
                    id: 10,
                    imageurl: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Tagblume_Commelina_communis_stack25_2019-08-05-RM-8050218-PSD.jpg',
                    title: 'Sunflower',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    price: 4243636,
                    isFavorite: false
                }
            ]




        }
    }

    selectedItem = (item) => {
        this.setState({ searchItem: item, show: false })
    }


    setRenderItemView = ({ item }) => {
        return (
            <View style={myStyle.cardstyle}>
                <View style={myStyle.rowitem}>
                    <View style={myStyle.imagesectionstyle}>
                        <Image
                            style={myStyle.imagestyle}
                            source={{ uri: item.imageurl }}
                            resizeMode='stretch'
                        />
                    </View>

                    <View style={myStyle.textsectionstyle}>
                        <View style={myStyle.coloumitem}>
                            <Text style={myStyle.titlefontstyles}> {item.title} </Text>
                            <Text style={myStyle.descriptionfontstyles}> {item.description} </Text>
                            <Text style={myStyle.pricefontstyles}> {item.price} </Text>
                        </View>
                    </View>

                    <View style={myStyle.fabsectionstyle}>
                        {item.isFavorite ? (
                            <Image source={require('./images/desetfav.png')} style={[myStyle.faviconstyle]} />
                        ) : <Image source={require('./images/setfav.png')} style={[myStyle.faviconstyle]} />
                        }
                    </View>

                </View>

            </View>
        )
    }

    setModalRenderItemView = ({ item }) => {
        return (
            <TouchableWithoutFeedback onPress={() => this.selectedItem(item.name)}>
                <View style={{ borderBottomColor: 'blue', borderBottomWidth: 1, padding: 10, width: 250, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={myStyle.modalfontstyles}> {item.name}  </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    updateSearch(searchText) {
        console.warn("selectedItem", searchText)
        let filteredArray = this.state.temp
        let searchResult = filteredArray.filter(data => data.title.includes(searchText))
        this.setState({ data: searchResult })
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomToolbar title="Design Sample" backgroundColor="#FFFFFF" />
                <View style={{ flex: 0.5 }}>
                    <View style={myStyle.cardstyle}>
                        <View style={myStyle.rowitem}>
                            <View style={{ flex: 6 }}>
                                <TextInput placeholder={"Search here"}
                                    style={{ color: 'blue', backgroundColor: 'white', fontSize: 15, borderRadius: 8, marginLeft: 10 }}
                                    onPressIn={() => { this.setState({ show: true }) }}
                                    value={this.state.searchItem}
                                    // onChangeText={(text) => { this.setState({ searchItem: text }), () => this.updateSearch(text)}}


                                    // onChangeText={
                                    //     (text) => {
                                    //         this.setState({ searchItem: text}),
                                    //         () => alert(text) 
                                    //     }
                                    // }
//   onChangeText={alert("nvnbm")}
                                  


                                />
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('./images/search.png')} style={{ width: 25, height: 25 }} />
                            </View>
                        </View>
                    </View>
                </View>


                <Modal visible={this.state.show} transparent={true} >
                    <View style={{ flex: 1, backgroundColor: '#000000aa', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={myStyle.modalBackgroundStyle}>
                            <View style={myStyle.rowitem}>
                                <View style={{ flex: 1, height: 25, width: 25, marginRight: 10, alignItems: 'flex-end' }}>
                                    <TouchableOpacity style={{ flex: 1 }} onPress={() => { this.setState({ show: false }) }} >
                                        <Image source={require('./images/cancel.png')} style={{ width: 20, height: 20 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <FlatList style={{ marginTop: 40 }}
                                data={this.state.flowerdata}
                                renderItem={this.setModalRenderItemView}
                            />
                        </View>
                    </View>
                </Modal>

                <View style={{ flex: 5 }}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.setRenderItemView}
                    />
                </View>

            </View>
        );
    }
}

const myStyle = StyleSheet.create({
    modalfontstyles: {
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'italic',
        color: 'purple',
        flex: 1,
        alignItems: 'baseline',
        justifyContent: 'center'
    },
    titlefontstyles: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'purple',
        marginTop: 10
    },
    descriptionfontstyles: {
        fontSize: 13,
        color: 'orange'
    },
    pricefontstyles: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'green',
        marginBottom: 10,
        marginTop: 20
    },
    cardstyle: {
        borderRadius: 8,
        elevation: 4,
        backgroundColor: '#ffffff',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        marginHorizontal: 15,
        marginVertical: 8,
        flex: 1
    },
    imagesectionstyle: {
        flex: 2
    },
    textsectionstyle: {
        marginLeft: 5,
        justifyContent: 'center',
        flex: 4
    },
    fabsectionstyle: {
        flex: 0.7
    },
    imagestyle: {
        width: 95,
        height: 100,
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 10,
        flex: 1
    },
    faviconstyle: {
        width: 25,
        height: 25,
        marginTop: 10,
        marginRight: 5
    },
    rowitem: {
        flexDirection: 'row', flex: 1
    },
    coloumitem: {
        flexDirection: 'column', flex: 1
    },
    modalBackgroundStyle: {
        margin: 50,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 8,
        height: 280
    },
});

export default DesignSample;