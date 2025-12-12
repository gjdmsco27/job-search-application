import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS, icons, SIZES } from '../constants';
import { ScreenHeaderBtn } from '../components';

// 1. 한글 이름과 영어 검색어(code)를 분리해서 정의
const jobTypes = [
    { name: "정규직", code: "Full-time" },
    { name: "파트타임/알바", code: "Part-time" },
    { name: "계약직/프리랜서", code: "Contractor" }
];

const Menu = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "카테고리",
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
        }}
      />

      <View style={{ flex: 1, padding: SIZES.medium, justifyContent: 'space-between' }}>
        
        {/* 1. 채용 형태 버튼 리스트 */}
        <View>
          <Text style={{ fontSize: SIZES.xLarge, fontWeight: 'bold', color: COLORS.primary, marginBottom: 20 }}>
            채용 형태 선택
          </Text>

          <View style={{ gap: 15 }}>
              {jobTypes.map((item) => (
                  <TouchableOpacity 
                      key={item.code} // 고유 키는 영어 코드로 사용
                      style={{ 
                          padding: 20, 
                          backgroundColor: '#FFF', 
                          borderRadius: 12,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          shadowColor: "#000",
                          shadowOffset: { width: 0, height: 2 },
                          shadowOpacity: 0.1,
                          shadowRadius: 3.84,
                          elevation: 5,
                      }}
                      // 👇 2. 누르면 영어 코드(Full-time 등)로 검색
                      onPress={() => router.push(`/search/${item.code}`)}
                  >
                      {/* 👇 3. 화면에는 한글 이름(정규직 등) 표시 */}
                      <Text style={{ fontSize: SIZES.medium, fontWeight: 'bold', color: '#444262' }}>
                          {item.name}
                      </Text>
                      <Text style={{ fontSize: SIZES.large, color: '#C1C0C8' }}>→</Text>
                  </TouchableOpacity>
              ))}
          </View>
        </View>

        {/* 2. 하단 앱 정보 */}
        <View style={{ alignItems: 'center', paddingBottom: 20 }}>
            <View style={{ width: 50, height: 2, backgroundColor: '#EFEFEF', marginBottom: 20 }} />
            
            <Text style={{ fontSize: SIZES.large, fontWeight: 'bold', color: COLORS.primary }}>
                Job Search App
            </Text>
            <Text style={{ fontSize: SIZES.medium, color: COLORS.gray, marginTop: 5 }}>
                Version 1.0.0
            </Text>
            <Text style={{ fontSize: SIZES.small, color: COLORS.gray, marginTop: 5 }}>
                Developed by 허은채
            </Text>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Menu;