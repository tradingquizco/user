"use client";

import usePacks from "@/store/usePckes";
import { Button, Divider, Empty, Flex, Image, Spin } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Group } from "antd/es/radio";
import Radio from "antd/es/radio/radio";
import useQuizzes from "@/store/useQuizzes";
import useLoading from "@/store/useLoading";

const page = ({ params: { quizId } }: { params: { quizId: string } }) => {
  const { selectedQuiz } = usePacks();
  const { getSubmitInfo, submitInfo, submitQuiz } = useQuizzes();
  const { error, loading } = useLoading();

  const { back } = useRouter();

  const [selectedOption, setSelectedOption] = useState<string>("");

  const submitQuizHandler = () => {
    const isCurrect = selectedQuiz?.answer === selectedOption;
    submitQuiz({ isCurrect, quizId, selectedOption });
    getSubmitInfo(quizId);
  };

  useEffect(() => {
    getSubmitInfo(quizId);
    // - check is user submit this quiz or not
    //  (url: quizzes/submit/:accountId/:quizId)
    //  1
    // - if DID, disable Group and show answer
    //  2
    // - if did NOT, send submit request when hit submit button
    // (url: quizzes/submit - {quizId, userId, selectedOption, isCurrect})
    // - after request sended, check again the user submition.
    //- if user submit info return, show answer
  }, []);

  if (!selectedQuiz)
    return (
      <Empty
        description={<Button onClick={() => back()}>Back to Quizzes</Button>}
      />
    );
  return (
    <section className="w-[95%] max-w-[600px] mx-auto h-full">
      {loading && <Spin fullscreen />}
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
            {submitInfo ? (
              <Group
                className="flex items-start justify-start flex-col"
                disabled
                defaultValue={submitInfo.selectedOption}
              >
                {selectedQuiz.options.split(",").map((option: string) => (
                  <Radio value={option}>{option}</Radio>
                ))}
              </Group>
            ) : (
              <Group
                className="flex items-start justify-start flex-col"
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                {selectedQuiz.options.split(",").map((option: string) => (
                  <Radio value={option}>{option}</Radio>
                ))}
              </Group>
            )}
          </Flex>
          {!submitInfo && (
            <Flex className="w-full" justify="center" vertical gap={8}>
              {" "}
              <Button
                type="primary"
                className="w-3/4 mx-auto mt-8"
                onClick={submitQuizHandler}
              >
                Submit Quiz
              </Button>
              <Button type="link" onClick={() => back()} size="small">
                Back to Quizzes
              </Button>
            </Flex>
          )}
          {submitInfo && (
            <Flex vertical justify="center" align="center" gap={15}>
              <Divider>
                <Text type="secondary">Answer Of Quiz</Text>
              </Divider>

              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGES_URL}/${selectedQuiz.answerImgUrl}`}
                className="rounded-md max-w-[600px] object-cover max-h-[400px]"
              />

              <Text className="text-justify w-full">
                {selectedQuiz.description}
              </Text>
              <Button type="link" onClick={() => back()} size="small">
                Back to Quizzes
              </Button>
            </Flex>
          )}
        </main>
      </Flex>
    </section>
  );
};

export default page;
