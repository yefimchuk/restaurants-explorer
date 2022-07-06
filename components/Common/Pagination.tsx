import React from "react";
import PaginationDot from "react-native-animated-pagination-dot";
import {Button} from "@rneui/themed";
import {StyleSheet, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {fetchArticles} from "../../bll/reducer/articles.slice";
import {selectTotalPage} from "../../bll/reducer/articles.selector";
import {USERS_PAGE_SIZE} from "../../service/serviceNews";

const Pagination = () => {
    const [curPage, setCurPage] = React.useState(0);
    const dispatch = useDispatch();
    const total = useSelector(selectTotalPage);
    const maxPage = Math.ceil(total / USERS_PAGE_SIZE);
    const handleClick = (limit: boolean, value: number) => {
        limit && setCurPage(value);
        const page = value + 1;
        limit && dispatch(fetchArticles({page}));
    };
    return (
        <View
            style={styles.pagination__container}
        >
            <Button
                onPress={() => handleClick(curPage > 0, curPage - 1)}
                title={"Prev"}
            />
            <View style={styles.pagination__dot}>
                <PaginationDot
                    activeDotColor={"black"}
                    curPage={curPage}
                    maxPage={maxPage}
                />
            </View>
            <Button
                onPress={() => handleClick(curPage < 19, curPage + 1)}
                title={"Next"}
            />
        </View>
    );
};

export default Pagination;

const styles = StyleSheet.create({
    pagination__container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    pagination__dot: {paddingLeft: 30, paddingRight: 50},
});