import React, {useEffect} from "react";
import {
    selectArticles,
    selectError,
} from "../../bll/reducer/articles.selector";
import {useDispatch, useSelector} from "react-redux";
import {fetchArticles} from "../../bll/reducer/articles.slice";
import Article from "./Article";
import {View, ScrollView, Text, StyleSheet} from "react-native";
import Loader from "../Common/Loader";
import ExampleDotPaginate from "../Common/Pagination";
import Header from "../Header/Header";
import Exampled from "../Common/SortBy";


function Articles({navigation}: any) {
    const dispatch = useDispatch();
    const {newsData, isFetching} = useSelector(selectArticles);
    useEffect(() => {
        dispatch(fetchArticles({}));
    }, []);
    const error = useSelector(selectError);

    return (
        <View>
            <Header/>
            {!error && newsData && <Exampled/>}
            <ScrollView style={styles.scroll}>
                {error ? (
                    <Text
                        style={styles.error}
                    >
                        {error}
                    </Text>
                ) : (
                    <View>
                        <View style={styles.pagination}>
                            {newsData && <ExampleDotPaginate/>}
                        </View>
                        <View>
                            {!isFetching ? (
                                newsData &&
                                newsData.map((item: object, index: number, arr: object[]) => (
                                    <Article
                                        navigation={navigation}
                                        key={index}
                                        data={arr[index]}
                                    />
                                ))
                            ) : (
                                <Loader/>
                            )}
                        </View>
                    </View>
                )}
            </ScrollView>
        </View>
    );
}

export default Articles;

const styles = StyleSheet.create({
    scroll: {height: "75%"},
    pagination: {alignItems: "center"},
    error: {width: "100%", padding: 13, fontSize: 20, color: "red"},
    additionalPage: {
        color: "blue",
        fontWeight: "400",
        fontSize: 18,
        paddingTop: 8,
        textAlign: "center",
    },
});