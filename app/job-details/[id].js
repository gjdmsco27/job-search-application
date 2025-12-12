import {Stack, useRouter, useLocalSearchParams} from "expo-router"
import { useCallback, useState } from "react"
import {View, Text, ScrollView, ActivityIndicator, RefreshControl, Share} from "react-native"
import {SafeAreaView} from "react-native-safe-area-context"

import {Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics} from "../../components"
import {COLORS, icons, SIZES} from "../../constants"
import useFetch from "../../hook/useFetch"

const JobDetails = () => {
    const params = useLocalSearchParams() // 버전 차이 발생
    const router = useRouter()
    console.log(params.id)
    const {data, isLoading, error, refetch} = useFetch("job-details", {
        job_id: params.id,
        extended_publisher_details: 'false'
    });
    const tabs = ["소개", "자격요건", "업무내용"];

    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        refetch()
        setRefreshing(false)
    }, []);

    const displayTabContent = () => {
        switch (activeTab) {
            case "자격요건":
                return (
                    <Specifics
                        title = '자격요건'
                        points = {data[0].job_highlights?.Qualifications ?? ['상세 내용을 확인하세요.']}
                    />
                )
            case "소개":
                return (
                    <JobAbout info={data[0].job_description ?? "상세 정보가 없습니다"} />
                )
            case "업무내용":
                return (
                    <Specifics
                        title='업무내용'
                        points={data[0].job_highlights?.Responsibilities ?? ['상세 업무 내용을 확인하세요.']}
                    />
                )
            default:
                return null;
        }
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options = {{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={() => router.back()}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension='60%'
                            handlePress={() => {
                                Share.share({
                                    message: `채용 공고 링크 ${data[0]?.job_google_link ?? '링크 없음'}`
                                });
                            }}
                        />
                    ),
                    headerTitle: ""
                }}
            />
            <>
                <ScrollView showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing = {refreshing} onRefresh={onRefresh}/>}
                >
                    {isLoading ? (
                        <ActivityIndicator size="large" color={COLORS.primary}/>
                    ) : error ? (
                        <Text>Something went wrong</Text>
                    ) : data.length === 0 ? (
                        <Text>No data available</Text>
                    ) : (
                        <View style = {{padding: SIZES.medium, paddingBottom: 100}}>
                            <Company
                                companyLogo={data[0].employer_logo}
                                jobTitle={data[0].job_title}
                                companyName={data[0].employer_name}
                                location={data[0].job_country}
                            />
                            <JobTabs
                                tabs = {tabs}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />

                            {displayTabContent()}
                        </View>
                    )}
                </ScrollView>

                <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results/'} />
            </>
        </SafeAreaView>
    )
}

export default JobDetails;