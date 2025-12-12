import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View, Text } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'

import { ScreenHeaderBtn } from '../../components'
import NearbyJobCard from '../../components/common/cards/nearby/NearbyJobCard'
import { COLORS, icons, SIZES } from '../../constants'
import styles from '../../styles/search'

// 영어 검색어를 한글로 바꿔줄 매핑 객체 추가
const titleMap = {
    "Full-time": "정규직",
    "Part-time": "파트타임/알바",
    "Contractor": "계약직/프리랜서",
};

const JobSearch = () => {
    const params = useLocalSearchParams();
    const router = useRouter()

    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setPage] = useState(1);

    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([])

        try {
            const options = {
                method: 'GET',
                url: `https://jsearch.p.rapidapi.com/search`,
                headers: {
                    'x-rapidapi-key': 'b3226e6555mshfc9823e78e38870p1d2d83jsnff654408bd74',
                    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
                },
                params: {
                    query: params.id,
                    page: page.toString(),
                },
            }

            const response = await axios.request(options);
            setSearchResult(response.data.data);
        } catch (error) {
            setSearchError(error);
            console.log(error);
        } finally {
            setSearchLoader(false);
        }
    }

    const handlePagination = (direction) => {
        if (direction === 'left' && page > 1) {
            setPage(page - 1)
            handleSearch()
        } else if (direction === 'right') {
            setPage(page + 1)
            handleSearch()
        }
    }

    useEffect(() => {
        handleSearch()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => router.back()}
                        />
                    ),
                    headerTitle: "",
                }}
            />

            <FlatList
                data={searchResult}
                renderItem={({ item }) => (
                    <NearbyJobCard
                        job={item}
                        handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
                    />
                )}
                keyExtractor={(item) => item.job_id}
                contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
                ListHeaderComponent={() => (
                    <>
                        <View style={styles.container}>
                            <Text style={styles.searchTitle}>
                                {titleMap[params.id] || params.id}
                            </Text>
                            <Text style={styles.noOfSearchedJobs}>채용 공고</Text>
                        </View>
                        <View style={styles.loaderContainer}>
                            {searchLoader ? (
                                <ActivityIndicator size='large' color={COLORS.primary} />
                            ) : searchError && (
                                <Text>오류가 발생했습니다</Text>
                            )}
                        </View>
                    </>
                )}
                ListFooterComponent={() => (
                    <View style={styles.footerContainer}>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('left')}
                        >
                            <Image
                                source={icons.chevronLeft}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={styles.paginationTextBox}>
                            <Text style={styles.paginationText}>{page}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('right')}
                        >
                            <Image
                                source={icons.chevronRight}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

export default JobSearch;