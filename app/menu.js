import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS, icons, SIZES } from '../constants';
import { ScreenHeaderBtn } from '../components';

const jobTypes = ["Full-time", "Part-time", "Contractor"];

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

      {/* 전체를 감싸는 View에 justifyContent: 'space-between'을 주어 위/아래로 배치 */}
      <View style={{ flex: 1, padding: SIZES.medium, justifyContent: 'space-between' }}>
        
        {/* 1. 채용 형태 버튼 */}
        <View>
          <Text style={{ fontSize: SIZES.xLarge, fontWeight: 'bold', color: COLORS.primary, marginBottom: 20 }}>
            채용 형태 선택
          </Text>

          <View style={{ gap: 15 }}>
              {jobTypes.map((item) => (
                  <TouchableOpacity 
                      key={item}
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
                      onPress={() => router.push(`/search/${item}`)}
                  >
                      <Text style={{ fontSize: SIZES.medium, fontWeight: 'bold', color: '#444262' }}>
                          {item} Jobs
                      </Text>
                      <Text style={{ fontSize: SIZES.large, color: '#C1C0C8' }}>→</Text>
                  </TouchableOpacity>
              ))}
          </View>
        </View>

        {/* 2. 아래쪽: 앱 정보 */}
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