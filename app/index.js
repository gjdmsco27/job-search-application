import {Text, View} from 'react-native'
import {Redirect} from "expo-router"

export default function Index() {
    return (
        <Redirect href = "/home"/>
    )
}

// export function Index2() {
//     return (
//         <View>
//             <Text> Temp Page </Text>
//         </View>
//     )
// }