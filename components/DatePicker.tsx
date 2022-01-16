import React from "react";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";

type DatePickerProps = {
    date: Date,
    setDateHandler: ((newDate: Date) => void),
}

export default function DatePicker({ date, setDateHandler }: DatePickerProps) {
    const today = new Date();


    const onChange = (event: Event, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setDateHandler(currentDate);
    }

    return (
        <DateTimePicker
            testID="dateTimePicker"
            minimumDate={today}
            value={date}
            mode='date'
            display="spinner"
            onChange={onChange}
        >
        </DateTimePicker>
    )
}