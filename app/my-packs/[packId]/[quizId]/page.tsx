"use client";

import usePacks from "@/store/usePckes";
import { Button, Empty, Flex, Image } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Group } from "antd/es/radio";
import Radio from "antd/es/radio/radio";

const page = ({ params: { quizId } }: { params: { quizId: string } }) => {
  const { selectedQuiz, setSelectedQuiz } = usePacks();
  const { back } = useRouter();

  if (!selectedQuiz)
    return (
      <Empty
        description={<Button onClick={() => back()}>Back to Quizzes</Button>}
      />
    );

  useEffect(() => {
    //todo - check is user submit this quiz or not
    //*  (url: quizzes/submit/:accountId/:quizId)
    //*  1
    //todo - if DID, disable Group and show answer
    //*  2
    //todo - if did NOT, send submit request when hit submit button
    //*  (url: quizzes/submit - {quizId, userId, selectedOption, isCurrect})
    //todo - after request sended, check again the user submition.
    //todo - if user submit info return, show answer
  }, []);
  return (
    <section className="w-[95%] max-w-[600px] mx-auto h-full">
      <Flex
        className="w-full"
        vertical
        justify="center"
        align="center"
        gap={15}
      >
        {!selectedQuiz && <Empty />}
        <header className="w-full">
          <Title level={4} className="w-full text-center">
            {selectedQuiz?.title}
          </Title>
        </header>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_IMAGES_URL}/${selectedQuiz?.questionImgUrl}`}
          className="rounded-md max-w-[600px] object-cover max-h-[400px]"
        />
        <main className="w-full">
          <Flex vertical className="w-full" gap={20}>
            <Text className="text-start w-full">
              {selectedQuiz?.questionText}
            </Text>
            <Group className="flex items-start justify-start flex-col">
              {selectedQuiz.options.split(",").map((option) => (
                <Radio value={option}>{option}</Radio>
              ))}
            </Group>
          </Flex>
          <Flex className="w-full" justify="center" vertical gap={8}>
            {" "}
            <Button type="primary" className="w-3/4 mx-auto mt-8">
              Submit Quiz
            </Button>
            <Button type="link" onClick={() => back()} size="small">
              Back to Quizzes
            </Button>{" "}
          </Flex>
        </main>
      </Flex>
    </section>
  );
};

export default page;
