import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS, icons, SIZES } from '../constants';
import { ScreenHeaderBtn } from '../components';

// 메뉴에 표시할 채용 형태 리스트
const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Menu = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "Category", // 헤더 제목
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
        }}
      />

      <View style={{ padding: SIZES.medium }}>
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
                    // 그림자 효과
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 3.84,
                    elevation: 5,
                }}
                // 누르면 검색 결과 페이지로 이동
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
    </SafeAreaView>
  );
};

export default Menu;