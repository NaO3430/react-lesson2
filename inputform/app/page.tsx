'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './globals.css';
import StepBar from './components/StepBar';
import Title from './components/Title';
import RadioButton from './components/RadioButton';
import DateInputArea from './components/DateInputArea';
import Button from './components/Button';
import { GenderStatus } from './components/types';
import 'bulma/css/bulma.css';

function YourPageComponent() {
  const router = useRouter();

  const [selectedGender, setSelectedGender] = useState<
    GenderStatus | undefined
  >(undefined);

  const [selectedYear, setSelectedYear] = useState(1990);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDay, setSelectedDay] = useState(1);

  const navigateToQuestionPage = () => {
    const queryParams = new URLSearchParams();

    if (selectedGender !== undefined) {
      queryParams.set('gender', selectedGender);
    }
    queryParams.set('year', selectedYear.toString());
    queryParams.set('month', selectedMonth.toString());
    queryParams.set('day', selectedDay.toString());

    router.push(`/questionPage?${queryParams.toString()}`);
  };

  const genderOptions = [
    { value: 'men', label: '男性' },
    { value: 'women', label: '女性' },
  ];

  return (
    <div className="flex flex-col justify-center h-screen mx-auto max-w-xl  space-y-4">
      <div className="flex">
        <StepBar currentStep={1} />
        <Title text="お客様の情報を入力して下さい" />
      </div>

      <h2>-性別-</h2>
      <RadioButton
        options={genderOptions}
        selectedValue={selectedGender || ''}
        onChange={(value: string) => setSelectedGender(value as GenderStatus)}
      />
      <h2>-生年月日-</h2>
      <DateInputArea
        year={selectedYear}
        month={selectedMonth}
        day={selectedDay}
        onYearChange={setSelectedYear}
        onMonthChange={setSelectedMonth}
        onDayChange={setSelectedDay}
      />
      <div className="text-center">
        <Button text="次に進む" onClick={navigateToQuestionPage} />
      </div>
    </div>
  );
}

export default YourPageComponent;
