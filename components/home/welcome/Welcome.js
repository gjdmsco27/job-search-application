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
            <View style={styles.container}>
                {/* 1. 이름 옆에 이모지 추가 */}
                <Text style={styles.userName}>안녕하세요 허은채님 👋🏻</Text>
                
                {/* 2. 핵심 단어 색상 강조 */}
                <Text style={styles.welcomeMessage}>
                    당신의 <Text style={{ color: '#2563EB', fontWeight: 'bold' }}>최고의</Text> 직장을 찾아보세요❗💭
                </Text>

                {/* 3. 부제목 추가 */}
                <Text style={{ marginTop: 5, color: '#83829A', fontSize: 14 }}>
                    지금 바로 수천 개의 새로운 공고를 탐색해보세요.
                </Text>
            </View>
            <View style = {styles.searchContainer}>
                <View style = {styles.searchWrapper}>
                    <TextInput
                        style = {styles.searchInput}
                        value = {searchTerm}
                        onChangeText = {(text) => setSearchTerm(text)}
                        placeholder="어떤 직업을 원하시나요?"
                        placeholderTextColor='#ADB5BD'
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