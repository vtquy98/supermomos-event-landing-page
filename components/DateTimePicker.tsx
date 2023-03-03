import moment, { Moment } from "moment";
import React, { ChangeEventHandler } from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
  onChange: (value: Date | null) => void;
  value?: string | undefined;
};

const DateTimePicker = ({
  value,
  onChange,
  ...rest
}: Props & ReactDatePickerProps) => {
  return (
    <div>
      <DatePicker
        className={"form-control"}
        selected={moment(value).toDate()}
        onChange={(date) => onChange(date)}
        {...rest}
      />
    </div>
  );
};

export default DateTimePicker;
