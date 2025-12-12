import React from 'react'
import { View, Text } from 'react-native'

// 기존 스타일은 제목(Title)에만 쓰고, 리스트에는 직접 스타일을 적용합니다.
import styles from './specifics.style'

const Specifics = ({ title, points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {points.map((item, index) => (
          <View 
            key={item + index} 
            style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginVertical: 6,
            }}
          >
            {/* 1. 회색 점 */}
            <View 
                style={{ 
                    width: 6, 
                    height: 6, 
                    borderRadius: 6, 
                    backgroundColor: '#6B7280',
                    marginTop: 8,
                    marginRight: 10,
                }} 
            />
            
            {/* 2. 내용 글자 */}
            <Text style={{ 
                fontSize: 14,
                color: "#444262",
                lineHeight: 22,
                flex: 1,
            }}>
                {item}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Specifics