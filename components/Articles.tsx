import React, {useEffect, useState} from 'react';

import {selectArticles} from "../bll/reducer/articles.selector";
import {useDispatch, useSelector} from "react-redux";
import {fetchArticles} from "../bll/reducer/articles.slice";
import Article from "./Acticle";
import {View} from "react-native";
import {USERS_PAGE_SIZE} from "../service/serviceNews";
import Loader from "./Loader";
import ExampleDotPaginate from "./Pagination";

function Articles() {
    const dispatch = useDispatch()
    const {newsData, total, isFetching} = useSelector(selectArticles)
    useEffect(() => {
        dispatch(fetchArticles({}))
    }, [])


    return (
        <View>
            <View  style={{alignItems: 'center'}}>
                {newsData && <ExampleDotPaginate />}
            </View>
            <View >
                {!isFetching ? newsData && newsData.map((item: { description: string, title: string }, index: number) =>
                    <Article
                        key={index} description={item.description} title={item.title}/>) : <Loader/>}
            </View>



        </View>
    );
}

export default Articles;