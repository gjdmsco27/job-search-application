import React from 'react'
import { View, Text } from 'react-native'

import styles from './about.style'

const About = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>상세 직무 소개:</Text>

      <View style={styles.contentBox}>
        <Text style={{
            fontSize: 15,
            color: "#444262", 
            lineHeight: 24, 
            marginTop: 10, 
        }}>
            {info}
        </Text>
      </View>
    </View>
  )
}

export default About