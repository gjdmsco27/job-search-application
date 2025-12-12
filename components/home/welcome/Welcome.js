import {useState} from "react"
import {
    View,
    Text,
    TextInput,
    Pressable,
    Image,
    FlatList,
    TouchableOpacity
} from "react-native";
import {useRouter} from "expo-router"

import styles from "./welcome.style"
import {icons, SIZES} from "../../../constants"

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
    const router = useRouter()
    const [activeJobType, setActiveJobType] = useState("Full-time")
    return (
        <View>
            <View style = {styles.container}>
                <Text style = {styles.userName}> Hello 허은채 </Text>
                <Text style = {styles.welcomeMessage}>Find your Job</Text>
            </View>
            <View style = {styles.searchContainer}>
                <View style = {styles.searchWrapper}>
                    <TextInput
                        style = {styles.searchInput}
                        value = {searchTerm}
                        onChangeText = {(text) => setSearchTerm(text)}
                        placeholder="어떤 직업을 원하시나요?"
                    />
                </View>
                <TouchableOpacity style = {styles.searchBtn} onPress = {handleClick}>
                    <Image
                        source = {icons.search}
                        resizeMode="contain"
                        style = {styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>
            {/* <View style = {styles.tabsContainer}>
                <FlatList
                    data = {jobTypes}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style = {styles.tab(activeJobType, item)}
                            onPress = {() => {
                                setActiveJobType(item)
                                router.push(`/search/${item}`)
                            }}
                        >
                            <Text style = {styles.tabText(activeJobType, item)}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor = {(item) => item}
                    contentContainerStyle = {{ columnGap: SIZES.small}}
                    horizontal
                />
            </View> 이 기능을 햄버거 안에 넣음 */} 
        </View>
    )
}

export default Welcome