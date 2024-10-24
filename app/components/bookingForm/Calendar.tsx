"use client";

import { CalendarGrid } from "./CalendarGrid";
import { useCalendarState } from "react-stately";
import { CalendarHeader } from "./CalendarHeader";
import { useCalendar, useLocale } from "react-aria";
import { createCalendar } from "@internationalized/date";
import { CalendarProps, DateValue } from "@react-types/calendar";

export function Calendar(
  props: CalendarProps<DateValue> & {
    isDateUnavailable?: (data: DateValue) => boolean;
  }
) {
  const { locale } = useLocale();
  let state = useCalendarState({
    ...props,
    visibleDuration: { months: 1 },
    locale,
    createCalendar,
  });

  let { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(
    props,
    state
  );

  return (
    <div {...calendarProps} className="inline-block">
      <CalendarHeader
        state={state}
        calendarProps={calendarProps}
        prevButtonProps={prevButtonProps}
        nextButtonProps={nextButtonProps}
      />
      <div className="flex gap-8">
        <CalendarGrid
          state={state}
          isDateUnavailable={props.isDateUnavailable}
        />
      </div>
    </div>
  );
}
