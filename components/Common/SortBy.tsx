import React, { useState } from "react";
import {StyleSheet, Text, View} from "react-native";
import SelectBox from "react-native-multi-selectbox";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDateTime,
  selectSearchValue,
} from "../../bll/reducer/articles.selector";
import { fetchArticles } from "../../bll/reducer/articles.slice";

const sortOptions = [
  {
    item: "relevancy",
  },
  {
    item: "popularity",
  },
  {
    item: "publishedAt",
  },
];

function SortPicker() {
  const [selectedTeam, setSelectedTeam] = useState({});
  const values = useSelector(selectSearchValue);
  const dateTime = useSelector(selectDateTime);
  return (
    <View style={styles.sort}>
      <SelectBox
        label="Sort by"
        options={sortOptions}
        value={selectedTeam}
        onChange={onChange()}
        hideInputFilter={false}
      />
    </View>
  );

  function onChange() {
    const dispatch = useDispatch();
    return (sort: React.SetStateAction<{}>) => {
      dispatch(fetchArticles({ values, sort, dateTime }));
      setSelectedTeam(sort);
    };
  }
}

export default SortPicker;
const styles = StyleSheet.create({
  sort: { margin: 20, width: "90%", alignItems: "center" }
});