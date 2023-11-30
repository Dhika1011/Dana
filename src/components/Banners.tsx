import { Colors } from '@/Theme/Variables';
import React from 'react';
import {
    Dimensions,
    Image,
    Pressable,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

type Props = {
    style?: any,
    item?: any,
    imageKey?: string,
    onPress?: Function,
    index?: number,
    active?: boolean,
    local?: undefined,
}

const screenWidth = Math.round(Dimensions.get('screen').width)

const Banner = ({
    item,
    imageKey,
    onPress,
    index,
    active,
    local,
}: Props) => {

    return (
        <Pressable
            style={[styles.videoContainer]}
        // onPress={() => onPress(item)}
        >
            <Image
                style={[styles.videoPreview, active ? {} : { height: 115 }]}
                source={{ uri: item[imageKey] }}

            />
            {/* <Text style={styles.desc}>{item.desc}</Text> */}
        </Pressable>
    );
};

Banner.defaultProps = {
    style: {},
    item: [],
    imageKey: "image",
    onPress: () => { },
    index: null,
    active: false,
    local: undefined,
}

const styles = StyleSheet.create({
    videoContainer: {
        width: screenWidth - 32,
        paddingVertical: 15,
        justifyContent: 'center',
        marginRight: 10,
    },
    videoPreview: {
        width: screenWidth - 32,
        height: 120,
        borderRadius: 6,
        resizeMode: 'cover',
        borderWidth: 1,
        borderColor: '#DDD'
    },
    desc: {
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 24,
        marginTop: 18,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    // shadow: {
    //     ...Platform.select({
    //         ios: {
    //             shadowColor: 'black',
    //             shadowOffset: { width: 0, height: 1 },
    //             shadowOpacity: 0.1,
    //             shadowRadius: 5,
    //         },
    //         android: {
    //             elevation: 5,
    //         },
    //     }),
    // },
});

export default Banner;