import React from 'react';
import { View, Text, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn } from '../components';

const Profile = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "My Profile",
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
        }}
      />

      <View style={{ flex: 1, alignItems: 'center', padding: SIZES.medium }}>
        {/* 프로필 이미지 */}
        <Image 
          source={images.profile}
          style={{ width: 100, height: 100, borderRadius: 0, marginBottom: SIZES.medium }}
        />
        
        {/* 내 정보 텍스트 (여기 내용을 수정하세요!) */}
        <Text style={{ fontSize: SIZES.xLarge, fontWeight: 'bold', color: COLORS.primary }}>
          허은채
        </Text>
        <Text style={{ fontSize: SIZES.medium, color: COLORS.gray, marginTop: 5 }}>
          선문대학교 | 컴퓨터공학과 | 3학년
        </Text>
        <Text style={{ fontSize: SIZES.medium, color: COLORS.gray, marginTop: 5 }}>
          React Native Developer 꿈나무
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;