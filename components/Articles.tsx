import React, {useEffect} from 'react';
import {selectArticles, selectError, selectTotalPage} from "../bll/reducer/articles.selector";
import {useDispatch, useSelector} from "react-redux";
import {fetchArticles} from "../bll/reducer/articles.slice";
import Article from "./Article";
import {View, ScrollView, Text} from "react-native";
import Loader from "./Loader";
import ExampleDotPaginate from "./Pagination";
import Header from "./Header";
import Example from "./SortBy";
import Exampled from "./SortBy";

function Articles({navigation}: any) {
    const dispatch = useDispatch()
    const {newsData, isFetching} = useSelector(selectArticles)
    useEffect(() => {
        dispatch(fetchArticles({}))
    }, [])
    const error = useSelector(selectError)


    return (
        <View>
            <Header/>
            {!error && newsData &&  <Exampled/>}
            <ScrollView style={{height: '75%'}}>

                {error? <Text style={{width: '100%', padding: 13, fontSize: 20, color: 'red'}}>{error}</Text> : <View>
                    <View style={{alignItems: 'center'}}>
                        {newsData && <ExampleDotPaginate/>}
                    </View>
                    <View>
                        {!isFetching ? newsData && newsData.map((item: object, index: number, arr: object[]) =>
                            <Article navigation={navigation}
                                     key={index} data={arr[index]}/>) : <Loader/>}
                    </View>


                </View>
                }
            </ScrollView>
        </View>

    );
}

export default Articles;