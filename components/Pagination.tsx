import React from 'react'
import PaginationDot from 'react-native-animated-pagination-dot'
import {Button} from "@rneui/themed";
import {View} from "react-native";
import {useDispatch} from "react-redux";
import {fetchArticles} from "../bll/reducer/articles.slice";

const ExampleDotPaginate = () => {
    const [page, setCurPage] = React.useState(0);
    const dispatch = useDispatch()
    const handleClick = (limit: boolean, value: number) => {
        limit && setCurPage(value)
        limit && dispatch(fetchArticles({page}))
    }
    return (
        <View style={{flexDirection: "row", justifyContent: "space-between",alignItems: "center", padding: 20}}>
            <Button onPress={() => handleClick(page > 0, page - 1)} title={"Prev"}/>
            <View style={{paddingLeft: 10,paddingRight:50}}>
                <PaginationDot
                    activeDotColor={'black'}
                    curPage={page}
                    maxPage={20}/></View>
            <Button onPress={() => handleClick(page < 19, page + 1)}
                    title={"Next"}/>

        </View>
    )
}

export default ExampleDotPaginate;