"use client";

import QuizCard from "@/components/quizCard";
import useLoading from "@/store/useLoading";
import usePacks from "@/store/usePckes";
import { Col, Empty, Flex, Layout, Row, Spin } from "antd";
import React, { useEffect } from "react";

const QuizzesPage = ({
  params: { packId },
}: {
  params: { packId: string };
}) => {
  const { loading, error } = useLoading();
  const { packQuizzes, getPackQuizzes } = usePacks();

  useEffect(() => {
    getPackQuizzes(packId);
  }, []);

  return (
    <Layout
      className="bg-white"
      style={{ height: "calc(100vh - 3.5rem - 24px)" }}
    >
      {loading && <Spin fullscreen />}
      {!loading && !error && packQuizzes?.length === 0 && <Empty />}
      <Flex wrap align="center" justify="center" gap={10} className="w-full">
        {!loading &&
          !error &&
          packQuizzes?.length !== 0 &&
          packQuizzes?.map((quiz) => <QuizCard key={quiz.id} quiz={quiz} />)}
      </Flex>

      {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {!loading &&
          !error &&
          packQuizzes?.length !== 0 &&
          packQuizzes?.map((quiz) => (
            <Col className="gutter-row" span={6} key={quiz.id}>
              <QuizCard key={quiz.id} quiz={quiz} />{" "}
            </Col>
          ))}
      </Row> */}
    </Layout>
  );
};

export default QuizzesPage;
