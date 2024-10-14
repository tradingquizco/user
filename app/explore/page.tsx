import { Filter } from "@/components/Filter";
import { PackCard } from "@/components/PackCard";
import React from "react";

const fakeData = [
  {
    packTitle: "test1",
    packDesc:
      "lorem rjefkjrf rfejrfkjerf w dqwf;oqke[dpkq2oren23r lefjmwjpeofjwe",
    packLevel: "hard",
    packCategory: "ICT",
    creatorImg:
      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
    price: "11",
  },
  {
    packTitle: "test2",
    packDesc: "lorem rjefkjrf rfejrfkjerf  lefjmwjpeofjwe",
    packLevel: "normal",
    packCategory: "ICT",
    creatorImg:
      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
    price: "16",
  },
  {
    packTitle: "test3",
    packDesc: "lorem rjefkjrf rfejrfkjerf w dqwf;oqke[ lefjmwjpeofjwe",
    packLevel: "normal",
    packCategory: "price action",
    creatorImg:
      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
    price: "12",
  },
  {
    packTitle: "test4",
    packDesc: "lorem rjefkjrf rfejrfkjerf w dqwf;[dpkq2oren23r lefjmwjpeofjwe",
    packLevel: "easy",
    packCategory: "RTM",
    creatorImg:
      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
    price: "16",
  },
  {
    packTitle: "test5",
    packDesc: "lorem rjefkjrf rfejrfkjerf w dqwf;oqke",
    packLevel: "hard",
    packCategory: "RTM",
    creatorImg:
      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
    price: "16",
  },
  {
    packTitle: "test6",
    packDesc: "lorem rjefkjrf  w dqwf;oqke[dpkq2oren23r lefjmwjpeofjwe",
    packLevel: "hard",
    packCategory: "price action",
    creatorImg:
      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
    price: "10",
  },
  {
    packTitle: "test7",
    packDesc:
      "lorem rjefkjrf rfejrfkjerf w dqwf;oqke[dpkq2oren23r lefjmwjpeofjwe",
    packLevel: "normal",
    packCategory: "price action",
    creatorImg:
      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
    price: "10",
  },
  {
    packTitle: "test8",
    packDesc: "lorem rjefkjrf rfejrfkjerfpeofjwe",
    packLevel: "normal",
    packCategory: "smart mony",
    creatorImg:
      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
    price: "15",
  },
  {
    packTitle: "test9",
    packDesc: "lorem rjekq2oren23r lefjmwjpeofjwe",
    packLevel: "hard",
    packCategory: "smart mony",
    creatorImg:
      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
    price: "11",
  },
  {
    packTitle: "test10",
    packDesc:
      "lorem rjefkjrf rfejrfkjerf w dqwf;oqke[dpkq2oren23r lefjmwjpeofjwe",
    packLevel: "hard",
    packCategory: "ICT",
    creatorImg:
      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
    price: "12",
  },
];

const Explore: React.FC = () => {
  return (
    <div className="h-fit flex flex-col gap-5">
      <h1 className="text-center text-2xl font-bold tracking-widest">Pack Explore</h1>
      <div className="">
        <Filter />
      </div>
      <div className="">
        <PackCard data={fakeData} />
      </div>
    </div>
  );
};

export default Explore;
