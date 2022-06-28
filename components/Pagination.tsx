import React from 'react'
import PaginationDot from 'react-native-animated-pagination-dot'
import {Button} from "@rneui/themed";
import {View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {fetchArticles} from "../bll/reducer/articles.slice";
import {selectTotalPage} from "../bll/reducer/articles.selector";
import {USERS_PAGE_SIZE} from "../service/serviceNews";

const ExampleDotPaginate = () => {
    const [curPage, setCurPage] = React.useState(0);
    const dispatch = useDispatch()
    const total = useSelector(selectTotalPage)
    const maxPage = Math.ceil(total / USERS_PAGE_SIZE)
    const handleClick = (limit: boolean, value: number) => {
debugger
        limit && setCurPage(value)
        const page = value + 1
        limit && dispatch(fetchArticles({page}))
    }
    return (
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20}}>
            <Button onPress={() => handleClick(curPage > 0, curPage - 1)} title={"Prev"}/>
            <View style={{paddingLeft: 10, paddingRight: 50}}>
                <PaginationDot
                    activeDotColor={'black'}
                    curPage={curPage}
                    maxPage={maxPage}/></View>
            <Button onPress={() => handleClick(curPage < 19, curPage + 1)}
                    title={"Next"}/>

        </View>
    )
}

export default ExampleDotPaginate;