import React, { useState } from 'react';

type DateInputProps = {
  year: number;
  month: number;
  day: number;
  onYearChange: (year: number) => void;
  onMonthChange: (month: number) => void;
  onDayChange: (day: number) => void;
};

function DateInputArea({
  year,
  month,
  day,
  onYearChange,
  onMonthChange,
  onDayChange,
}: DateInputProps) {
  const daysInMonth = (year: number, month: number) => {
    const date = new Date(year, month, 0);
    return date.getDate();
  };
  return (
    <div className="flex items-center">
      <select
        className="select border"
        value={year}
        onChange={(e) => onYearChange(parseInt(e.target.value))}
      >
        {Array.from({ length: 101 }, (_, index) => 2023 - index).map(
          (yearValue) => {
            const era =
              yearValue > 2019
                ? `令和${yearValue - 2018}`
                : yearValue > 1988
                ? `平成${yearValue - 1988}`
                : yearValue > 1925
                ? `昭和${yearValue - 1925}`
                : yearValue > 1911
                ? `大正${yearValue - 1911}`
                : '明治';

            return (
              <option key={yearValue} value={yearValue}>
                {yearValue}（{era}）
              </option>
            );
          }
        )}
      </select>
      <span>年</span>
      <select
        className="select border"
        value={month}
        onChange={(e) => onMonthChange(parseInt(e.target.value))}
      >
        {Array.from({ length: 12 }, (_, index) => index + 1).map(
          (monthValue) => (
            <option key={monthValue} value={monthValue}>
              {monthValue}
            </option>
          )
        )}
      </select>
      <span>月</span>
      <select
        className="select border"
        value={day}
        onChange={(e) => onDayChange(parseInt(e.target.value))}
      >
        {Array.from(
          { length: daysInMonth(year, month) },
          (_, index) => index + 1
        ).map((dayValue) => (
          <option key={dayValue} value={dayValue}>
            {dayValue}
          </option>
        ))}
      </select>
      <span>日</span>
    </div>
  );
}

export default DateInputArea;
