import React, {useState } from "react";
import {DateTimePickerEvent,} from "@react-native-community/datetimepicker";
import {Button, StyleSheet, View} from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { fetchArticles, setDateTime } from "../../bll/reducer/articles.slice";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchValue } from "../../bll/reducer/articles.selector";
import moment from "moment";

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const values = useSelector(selectSearchValue);
  const dispatch = useDispatch();

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currDate = selectedDate || date;
    setDate(currDate);
    let FDate = moment(new Date(currDate)).format("YYYY-MM-DD");
    setShow(false);
    dispatch(setDateTime(FDate));
    dispatch(fetchArticles({ FDate, values }));
  };

  return (
    <View style={styles.dateTime}>
      <Button title="Pick date" onPress={() => setShow(true)} />
      {show && (
        <RNDateTimePicker
          timeZoneOffsetInMinutes={60}
          testID="dataTimePicker"
          style={styles.dateTime__picker}
          value={date}
          mode="date"
          is24Hour={true}
          display={"default"}
          onChange={(event, date) => onChange(event, date)}
        />
      )}
    </View>
  );
};
export default DatePicker;
const styles = StyleSheet.create({
  dateTime: { width: 100 },
  dateTime__picker: { width: 100 },
});