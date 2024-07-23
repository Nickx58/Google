import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Box,
  Heading,
  CardFooter,
  Button,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import questions from "./constant";

const QuizApp = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  const handleNextQuestionClick = () => {
    if (activeQuestion + 1 === questions.length) {
      setShowSummary(true);
      return;
    }
    setActiveQuestion((index) => index + 1);
  };

  const handleButtonClicked = (value) => {
    const answer = questions[activeQuestion].answerOptions.filter(
      (ans) => ans.text === value
    )[0];
    const selected = [
      ...selectedQuestion,
      {
        question: questions[activeQuestion].question,
        correct: answer.isCorrect,
      },
    ];
    setSelectedQuestion(selected);
    handleNextQuestionClick();
  };

  const handleQuizRetry = () => {
    setActiveQuestion(0);
    setSelectedQuestion([]);
    setShowSummary(false);
  };

  return (
    <Box>
      <Heading textAlign="center">Quiz App</Heading>
      <Card
        width={"50%"}
        height={"400px"}
        backgroundColor={"#EAEFF2"}
        margin={"0 auto"}
        mt={"10"}
      >
        <CardHeader>
          <Heading size="md">
            {showSummary ? (
              <>Quiz Result</>
            ) : (
              <>
                Q:{activeQuestion + 1} {questions[activeQuestion].question}
              </>
            )}
          </Heading>
        </CardHeader>
        <CardBody display={"flex"} flexDirection={"column"} gap={"10px"}>
          {showSummary && (
            <OrderedList>
              {selectedQuestion.map((item) => {
                return (
                  <ListItem color={!item.correct && "red"}>
                    {item.question}
                  </ListItem>
                );
              })}
            </OrderedList>
          )}
          {!showSummary &&
            questions[activeQuestion].answerOptions.map((ans) => {
              return (
                <Button
                  onClick={() => handleButtonClicked(ans.text)}
                  key={ans.text}
                  colorScheme={"teal"}
                  variant={"outline"}
                >
                  {ans.text}
                </Button>
              );
            })}
        </CardBody>
        <CardFooter>
          {showSummary ? (
            <Button onClick={handleQuizRetry} colorScheme="teal">
              Retry Quiz
            </Button>
          ) : (
            <Button onClick={handleNextQuestionClick} colorScheme="teal">
              Next
            </Button>
          )}
        </CardFooter>
      </Card>
    </Box>
  );
};

export default QuizApp;
