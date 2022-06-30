import React, { useCallback, useRef, useState } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";
import { SearchBar } from "@rneui/themed";
import {
  fetchArticles,
  setSearchValue,
} from "../../bll/reducer/articles.slice";
import { useDispatch } from "react-redux";
import { Formik, useFormik } from "formik";
// @ts-ignore
import { debounce } from "lodash";
import MyDatePicker from "../Common/Date";
import Example from "../Common/SortBy";

function Header(this: any) {
  const dispatch = useDispatch();

  let a = (event: any) => {
    const values = event.searcher;
    dispatch(fetchArticles({ values }));
    dispatch(setSearchValue(values));
  };
  const handler = useCallback(debounce(a, 500), []);

  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MyDatePicker />
        <Formik
          initialValues={{ searcher: "" }}
          onSubmit={(values) => {
            handler(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <SearchBar
              platform={"ios"}
              containerStyle={{
                width: "65%",
                height: 70,
                backgroundColor: "#322e2e",
              }}
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
});
