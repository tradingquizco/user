"use client";

import usePacks from "@/store/usePckes";
import { Button, Card, Image } from "antd";
import Meta from "antd/es/card/Meta";
import { redirect, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const QuizCard = ({ quiz }: { quiz: IQuiz }) => {
  const pathname = usePathname();
  const { push } = useRouter();
  const { setSelectedQuiz } = usePacks()

  const clickHandler = () => {
    setSelectedQuiz(quiz.id);
    push(`${pathname}/${quiz.id}`);
  };

  return (
    <Card
      className="rounded-md"
      style={{ width: 300 }}
      cover={
        <img
          alt="question-img"
          src={`${process.env.NEXT_PUBLIC_BASE_IMAGES_URL}/${quiz.questionImgUrl}`}
        />
      }
      actions={[
        <Button type="primary" className="w-3/4" onClick={clickHandler}>
          Check Out Quiz
        </Button>,
      ]}
    >
      <Meta title={quiz.title} description={quiz.description} />
    </Card>
  );
};

export default QuizCard;
