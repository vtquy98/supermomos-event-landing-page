import { Moment } from "moment";
import React, { ChangeEventHandler } from "react";
import Datetime, { DatetimepickerProps } from "react-datetime";

type Props = {
  onChange: (value: Moment | string) => void;
  value?: string | Date | Moment | undefined;
};

const DateTimePicker = (props: Props) => {
  return (
    <div>
      <Datetime value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default DateTimePicker;
