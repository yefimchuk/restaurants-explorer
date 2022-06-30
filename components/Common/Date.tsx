import React, { Component, useState } from "react";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Button, Text, View } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { fetchArticles, setDateTime } from "../../bll/reducer/articles.slice";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchValue } from "../../bll/reducer/articles.selector";
import moment from "moment";

const MyDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [fullDate, setFullDate] = useState("");
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
    setFullDate(FDate);
    setShow(false);
    dispatch(setDateTime(FDate));
    dispatch(fetchArticles({ FDate, values }));
  };

  return (
    <View style={{ width: 100 }}>
      <Button title="Pick date" onPress={() => setShow(true)} />

      {show && (
        <RNDateTimePicker
          timeZoneOffsetInMinutes={60}
          testID="dataTimePicker"
          style={{ width: 100 }}
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
export default MyDatePicker;
