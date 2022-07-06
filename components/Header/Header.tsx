import React, {useCallback} from "react";
import {View, StyleSheet} from "react-native";
import {SearchBar} from "@rneui/themed";
import {
    fetchArticles,
    setSearchValue,
} from "../../bll/reducer/articles.slice";
import {useDispatch} from "react-redux";
import {Formik} from "formik";
import {debounce} from "lodash";
import DatePicker from "../Common/Date";

function Header(this: any) {
    const dispatch = useDispatch();

    let handleValues = (event: { searcher: string }) => {
        const values = event.searcher;
        dispatch(fetchArticles({values}));
        dispatch(setSearchValue(values));
    };
    const handler = useCallback(debounce(handleValues, 500), []);

    return (
        <View style={styles.header}>
            <View
                style={styles.header__flexbox}
            >
                <DatePicker/>
                <Formik
                    initialValues={{searcher: ""}}
                    onSubmit={(values) => {
                        handler(values);
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                        <SearchBar
                            platform={"ios"}
                            containerStyle={styles.header__searchbar}
                            placeholder="search..."
                            value={values.searcher}
                            onChangeText={handleChange("searcher")}
                            onChange={() => handleSubmit()}
                        />
                    )}
                </Formik>
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        padding: 10,
        borderRadius: 5,
        justifyContent: "flex-end",
        width: "100%",
        height: 110,
        backgroundColor: "#322e2e",
    },
    header__text: {
        fontSize: 27,
        padding: 6,
        marginLeft: 6,
        fontWeight: "400",
    },
    selector: {
        backgroundColor: "rgba(239,255,20,0)",
    },
    header__flexbox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    header__searchbar: {
        width: "65%",
        height: 70,
        backgroundColor: "#322e2e",
    }
});
