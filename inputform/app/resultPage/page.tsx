'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import StepBar from '../components/StepBar';
import Title from '../components/Title';
import Button from '../components/Button';

import 'bulma/css/bulma.css';

function resultPage() {
  const searchParams = useSearchParams();
  const gender = searchParams.get('gender');
  const year = searchParams.get('year');
  const month = searchParams.get('day');
  const day = searchParams.get('day');
  const answer1 = searchParams.get('answer1');
  const answer2 = searchParams.get('answer2');
  const answer3 = searchParams.get('answer3');
  const consultationText = searchParams.get('consultationText');

  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col justify-center h-screen mx-auto max-w-xl space-y-4">
      <div className="flex">
        <StepBar currentStep={4} />
        <Title text="以下の内容をご確認ください" />
      </div>
      <h2>-性別-</h2>
      <p>{gender}</p>
      <h2>-生年月日-</h2>
      <p>
        {year}年{month}月{day}日
      </p>
      <h2>-現在、生命保険に加入されていますか？-</h2>
      <p>{answer1}</p>
      <h2>
        -現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-
      </h2>
      <p>{answer2}</p>
      <h2>
        -過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？-
      </h2>
      <p>{answer3}</p>
      <h2>-ご相談内容-</h2>
      <p>{consultationText}</p>
      <div className="text-center">
        <Button text="前へ戻る" onClick={navigateBack} />
        <Button text="送信" />
      </div>
    </div>
  );
}

export default resultPage;
