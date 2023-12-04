'use client';
import React, { useState } from 'react';
import StepBar from '../components/StepBar';
import Title from '../components/Title';
import Button from '../components/Button';
import TextArea from '../components/TextArea';

import 'bulma/css/bulma.css';

function consultationPage() {
  const [text, setText] = useState('');
  return (
    <div className="flex flex-col justify-center h-screen mx-auto max-w-xl space-y-4">
      <div className="flex">
        <StepBar currentStep={3} />
        <Title text="ご相談内容をご記入ください" />
      </div>
      <div>
        <h2>-ご相談内容-</h2>
        <TextArea value={text} onChange={setText} />
      </div>

      <div className="text-center">
        <Button text="次へ進む" />
        <Button text="前へ戻る" destination="./questionPage" />
      </div>
    </div>
  );
}

export default consultationPage;
