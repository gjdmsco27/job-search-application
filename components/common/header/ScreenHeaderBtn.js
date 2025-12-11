import { handleUrlParams } from "expo-router/build/fork/getStateFromPath-forks"
import {Image, TouchableOpacity, Pressable} from "react-native"
import styles from "./screenheader.style"

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
    return (
        <TouchableOpacity style = {styles.btnContainer} onPress={handlePress}>
            <Image
                source = {iconUrl}
                resizeMethod = 'cover'
                style = {styles.btnImg(dimension)}
            />
        </TouchableOpacity>
    )
}

export default ScreenHeaderBtn