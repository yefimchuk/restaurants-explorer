import React, {useEffect} from 'react';
import {selectArticles} from "../bll/reducer/articles.selector";
import {useDispatch, useSelector} from "react-redux";
import {fetchArticles} from "../bll/reducer/articles.slice";
import Article from "./Article";
import {View, ScrollView} from "react-native";
import Loader from "./Loader";
import ExampleDotPaginate from "./Pagination";
import Header from "./Header";

function Articles({navigation}: any) {
    const dispatch = useDispatch()
    const {newsData, total, isFetching} = useSelector(selectArticles)
    useEffect(() => {
        dispatch(fetchArticles({}))
    }, [])


    return (
        <View>
            <Header/>
            <ScrollView style={{height: '90%'}}>
                <View>
                    <View style={{alignItems: 'center'}}>
                        {newsData && <ExampleDotPaginate/>}
                    </View>
                    <View>
                        {!isFetching ? newsData && newsData.map((item: object, index: number, arr: object[]) =>
                            <Article navigation={navigation}
                                     key={index} data={arr[index]}/>) : <Loader/>}
                    </View>


                </View>
            </ScrollView>
        </View>

    );
}

export default Articles;