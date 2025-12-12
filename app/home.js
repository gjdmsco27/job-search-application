import {useState} from "react"
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {COLORS, icons, images, SIZES} from '../constants'
import {Stack, useRouter} from 'expo-router'
import { ScreenHeaderBtn, Welcome, Nearbyjobs, Popularjobs } from "../components"


const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <SafeAreaView style = {{flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor:COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn 
                            iconUrl={icons.menu} 
                            dimension='60%' 
                            handlePress={() => router.push('/menu')}
                        />
                    ),
                    headerRight: () => (
                        <TouchableOpacity 
                            style={{ 
                            width: 50,
                            height: 50,
                            borderRadius: 0,
                            overflow: 'hidden',
                            borderWidth: 1,
                            borderColor: '#F3F4F8'
                            }}
                            onPress={() => router.push('/profile')}
                        >
                            <Image 
                            source={images.profile}
                            resizeMode="cover"
                            style={{ width: '100%', height: '100%' }}
                            />
                        </TouchableOpacity>
                    ),
                    headerTitle: 'Job-Search App'
                }}
            />
            <ScrollView showsVerticalScrollIndicator = {false}>
                <View
                    style = {{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if (searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />
                    <Popularjobs/>
                    <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;