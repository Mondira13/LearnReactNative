import React, { useState } from 'react';
import {
    Button,
    Image,
    Text,
    View,
} from 'react-native';
import ImagePicker, { openCamera } from 'react-native-image-crop-picker';



class ImagePickerExample extends React.Component {
    constructor() {
        super();
        this.state = {
            imageUri: 'https://upload.wikimedia.org/wikipedia/commons/6/62/%22No_Image%22_placeholder.png'
        }
    }

    openCameraAndShowImage() {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            this.setState({ imageUri: image.path })
        });
    }

    openGalleryAndShowImage() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            this.setState({ imageUri: image.path })
        });
    }


    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={{ flex: 2 }}>
                    <Image source={{ uri: this.state.imageUri }} resizeMode='contain' style={{ width: 330, height: 300, marginTop: 30 }} />
                </View>
                <View style={{ flex: 1 }}>
                    <View>
                        <Button title="open Camera" onPress={() => this.openCameraAndShowImage()} color='orange'  />
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Button title="open Gallery" onPress={() => this.openGalleryAndShowImage()}  color='orange'  />
                    </View>
                </View>

            </View>
        );
    }
}

export default ImagePickerExample;
