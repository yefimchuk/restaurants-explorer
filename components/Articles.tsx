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
            <ScrollView>
                <View>
                    <View style={{alignItems: 'center'}}>
                        {newsData && <ExampleDotPaginate/>}
                    </View>
                    <View>
                        {!isFetching ? newsData && newsData.map((item: { description: string, title: string }, index: number) =>
                            <Article navigation={navigation}
                                     key={index} description={item.description} title={item.title}/>) : <Loader/>}
                    </View>


                </View>
            </ScrollView>
        </View>

    );
}

export default Articles;