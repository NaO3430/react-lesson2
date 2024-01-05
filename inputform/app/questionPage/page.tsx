'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import StepBar from '../components/StepBar';
import Title from '../components/Title';
import QuestionText from '../components/QuestionText';
import RadioButton from '../components/RadioButton';
import Button from '../components/Button';

import 'bulma/css/bulma.css';

function questionPage() {
  const router = useRouter();

  const navigateToConsultationPage = () => {
    const currentParams = new URLSearchParams(window.location.search);

    currentParams.set('answer1', option1);
    currentParams.set('answer2', option2);
    currentParams.set('answer3', option3);

    router.push(`/consultationPage?${currentParams.toString()}`);
  };

  const navigateBack = () => {
    router.back();
  };

  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [showQuestion2, setShowQuestion2] = useState(false);
  const [showQuestion3, setShowQuestion3] = useState(false);

  const handleOption1Change = (value: string) => {
    setOption1(value);
    setShowQuestion2(true);
  };

  const handleOption2Change = (value: string) => {
    setOption2(value);
    setShowQuestion3(true);
  };

  const handleOption3Change = (value: string) => {
    setOption3(value);
  };

  return (
    <div className="flex flex-col justify-center h-screen mx-auto max-w-xl space-y-4">
      <div className="flex">
        <StepBar currentStep={2} />
        <Title text="以下にお答えください" />
      </div>
      <div>
        <QuestionText text="現在、生命保険に加入されていますか？" />
        <RadioButton
          options={[
            { value: 'yes', label: 'はい' },
            { value: 'no', label: 'いいえ' },
          ]}
          selectedValue={option1}
          onChange={handleOption1Change}
        />
      </div>
      {showQuestion2 && (
        <div>
          <QuestionText text="現在入院中ですか、または最近３ヶ月以内に医師の診療・検査の結果、入院・手術をすすめられたことはありますか？" />
          <RadioButton
            options={[
              { value: 'yes', label: 'はい' },
              { value: 'no', label: 'いいえ' },
            ]}
            selectedValue={option2}
            onChange={handleOption2Change}
          />
        </div>
      )}
      {showQuestion3 && (
        <div>
          <QuestionText text="過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？" />
          <RadioButton
            options={[
              { value: 'yes', label: 'はい' },
              { value: 'no', label: 'いいえ' },
            ]}
            selectedValue={option3}
            onChange={handleOption3Change}
          />
        </div>
      )}

      <div className="text-center">
        <Button text="次へ進む" onClick={navigateToConsultationPage} />
        <Button text="前へ戻る" onClick={navigateBack} />
      </div>
    </div>
  );
}

export default questionPage;
