export interface IPack {
  id: string;
  title: string;
  description: string;
  category: string;
  quizNumber: string;
  price: string;
  coverImageUrl: string;
  level: string;
  username: string;
  isFree: boolean;
}

export interface IQuiz {
  id: string;
  title: string;
  description: string;
  questionText: string;
  answer: string;
  options: string;
  questionImgUrl: string;
  answerImgUrl: string;
  creatorId: number;
  createdAt: string;
  updatedAt: string;
  QuizPack: {
    createdAt: string;
    updatedAt: string;
    quizId: number;
    PackId: number;
  };
  account: {
    username: string;
  };
  username: string;
  packId: string;
}

export interface IQuizAttempt {
  id: string;
  selectedOption: string;
  isCurrect: string;
  createdAt: string;
  updatedAt: string;
  accountId: string;
  quizId: string;
}

export interface ISubmitInfo {
  isCurrect: boolean;
  selectedOption: string;
}
