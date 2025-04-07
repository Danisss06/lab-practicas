"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { denormalizeTitle } from "../utils/utils";
import { useDarkMode } from "../hooks/useDarkMode";

type QuestionProps = {
  question: string;
  options: string[];
  answer: number;
  explanation?: string;
};

export interface QuizComponentProps {
  title: string;
  description: string;
  questions: QuestionProps[];
  questionDescription?: string;
  images?: string[];
  responseImages?: string[];
}

/**
 * @param title gets the title of the quiz
 * @param description gets the description of the quiz
 * @param questions gets the questions of the quiz
 * @param questionDescription gets the description of the question
 * @param images gets the images of the quiz
 * @param responseImages gets the images of the responses
 * @returns a reusable component that renders a quiz with questions and answers
 */
const QuizComponent: React.FC<QuizComponentProps> = ({
  title,
  description,
  questions,
  questionDescription,
  images,
  responseImages,
}) => {
  const pathname = usePathname();

  const [isDarkMode] = useDarkMode();

  const backgroundColor = pathname.includes("cognitive")
    ? "bg-[#bde2b9]"
    : pathname.includes("verbal")
    ? "bg-[#ff7e82]"
    : pathname.includes("math")
    ? "bg-[#afdceb]"
    : "bg-blue-500";

  const backgroundColor2 = pathname.includes("cognitive")
    ? "bg-[#addbad]"
    : pathname.includes("verbal")
    ? "bg-[#ff585d]"
    : pathname.includes("math")
    ? "bg-[#afdceb]"
    : "bg-[#c0c0c0]";

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [messageSelectAnswer, setMessageSelectAnswer] =
    useState<boolean>(false);
  const [messageCorrectAnswer, setMessageCorrectAnswer] =
    useState<boolean>(false);
  const [messageIncorrectAnswer, setMessageIncorrectAnswer] =
    useState<boolean>(false);
  const [showFinalResults, setShowFinalResults] = useState<boolean>(false);
  const [summary, setSummary] = useState<
    {
      question: string;
      userAnswer: string;
      correctAnswer: string;
      color: string;
      explanation: string;
      correct: boolean;
    }[]
  >([]);

  useEffect(() => {
    setSelectedOption(null);
    setMessageSelectAnswer(false);
  }, [currentQuestion]);

  const handleCheckAnswer = () => {
    if (selectedOption === null) {
      setMessageSelectAnswer(true);
      setTimeout(() => setMessageSelectAnswer(false), 2000); // Hide message after 2 seconds
      return;
    }

    const isCorrect = selectedOption === questions[currentQuestion].answer;
    const userAnswerText = questions[currentQuestion].options[selectedOption];
    const correctAnswerText =
      questions[currentQuestion].options[questions[currentQuestion].answer];

    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
      setMessageCorrectAnswer(true);
    } else {
      setMessageIncorrectAnswer(true);
    }

    setSummary((prevSummary) => [
      ...prevSummary,
      {
        question: questions[currentQuestion].question,
        userAnswer: userAnswerText,
        correctAnswer: correctAnswerText,
        color: isCorrect ? "bg-green-200" : "bg-red-200",
        explanation: questions[currentQuestion].explanation || "",
        correct: isCorrect,
      },
    ]);

    // Delay for showing correct or incorrect message before moving to the next question
    setTimeout(() => {
      setMessageCorrectAnswer(false);
      setMessageIncorrectAnswer(false);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowFinalResults(true);
      }
    }, 2000); // Delay of 2 seconds for message display
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setCorrectAnswers(0);
    setMessageSelectAnswer(false);
    setMessageCorrectAnswer(false);
    setMessageIncorrectAnswer(false);
    setShowFinalResults(false);
    setSummary([]);
  };

  const quizTitle: string = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <>
      {showFinalResults ? (
        <div className="w-full h-full px-2" style={{ whiteSpace: "pre-wrap" }}>
          <div className="mt-2 flex flex-col gap-2 justify-center items-center">
            <h1 className="font-bold text-xl">
              Tuviste {correctAnswers} respuestas correctas de{" "}
              {questions.length}
            </h1>
            <h2 className="font-semibold text-lg mt-1">Resumen:</h2>
            <ul className="w-full max-w-md mt-1 text-left text-black">
              {summary.map((item, index) => (
                <li
                  key={index}
                  className={`mb-2 p-2 border rounded-md ${item.color}`}
                >
                  <p className="font-semibold">Pregunta {index + 1}:</p>
                  <p>{item.question}</p>
                  <p>
                    <strong>Tu respuesta:</strong> {item.userAnswer}
                  </p>
                  <p>
                    <strong>Respuesta correcta:</strong> {item.correctAnswer}
                  </p>
                  {item.correct ? null : (
                    <p>
                      <strong>Explicación:</strong> {item.explanation}
                    </p>
                  )}
                  <div className="flex justify-center">
                    {responseImages && (
                      <Image
                        src={responseImages[index]}
                        alt="response-image"
                        width={350}
                        height={350}
                        className="rounded-2xl"
                      />
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <button
              className={`w-72 min-h-14 cursor-pointer transition-all ${backgroundColor} text-black px-6 py-2 rounded-2xl ${backgroundColor2} border-b-[4px] hover:brightness-110 active:brightness-90`}
              onClick={handleRestartQuiz}
            >
              Volver a intentar
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full h-full px-2" style={{ whiteSpace: "pre-wrap" }}>
          <h1 className="font-bold text-xl">Ejercicio de {denormalizeTitle(quizTitle)}</h1>
          <p className="mt-2">{description}</p>
          <div className="mt-2 flex flex-col gap-2 justify-center items-center">
            <p className="font-semibold text-lg">
              Pregunta {currentQuestion + 1} de {questions.length}
            </p>
            {images && (
              <Image
                src={images[currentQuestion]}
                alt="quiz-image"
                width={400}
                height={400}
                className="rounded-2xl"
              />
            )}
            {questionDescription && (
              <p className="font-semibold text-lg">{questionDescription}</p>
            )}
            <h2 className="font-semibold text-lg">
              {questions[currentQuestion].question}
            </h2>
            <div className="flex flex-col gap-2">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`w-72 min-h-14 cursor-pointer transition-all font-bold ${
                    selectedOption === index ? backgroundColor : "bg-[--quiz-btn-color]"
                  } text-[var(--text-color)] px-6 py-2 rounded-2xl ${backgroundColor2} border-b-[4px] hover:brightness-110 active:brightness-90`}
                  onClick={() =>
                    setSelectedOption(selectedOption === index ? null : index)
                  }
                >
                  {option}
                </button>
              ))}
              <div className="self-end">
                <button
                  className={`min-h-14 cursor-pointer transition-all ${backgroundColor} text-black px-6 py-2 rounded-2xl ${backgroundColor2} border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] shadow-lg`}
                  onClick={handleCheckAnswer}
                >
                  Siguiente
                </button>
              </div>
              <progress
                className="w-72 mt-2 rounded-2xl appearance-none h-4"
                value={currentQuestion + 1}
                max={questions.length}
                style={{
                  backgroundColor: "#bde2b9",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              ></progress>
              {messageSelectAnswer && (
                <div className="mt-2 bg-[var(--quiz-message-btn)] p-2 rounded-2xl flex flex-col gap-2 items-center justify-center">
                  <Image
                    src="/icons/circle-exclamation.svg"
                    alt="circle-exclamation"
                    width={30}
                    height={30}
                  />
                  <p className="text-center font-bold text-xl text-[var(--text-color)]">
                    Selecciona una respuesta
                  </p>
                </div>
              )}
              {messageCorrectAnswer && (
                <div className="mt-2 bg-green-200 p-2 rounded-2xl flex flex-col gap-2 items-center justify-center">
                  <Image
                    src="/icons/circle-check.svg"
                    alt="circle-check"
                    width={30}
                    height={30}
                  />
                  <p className="text-center font-bold text-xl text-black">
                    Correcto
                  </p>
                </div>
              )}
              {messageIncorrectAnswer && (
                <div className="mt-2 bg-red-200 p-2 rounded-2xl flex flex-col gap-2 items-center justify-center">
                  <Image
                    src="/icons/circle-xmark.svg"
                    alt="circle-xmark"
                    width={30}
                    height={30}
                  />
                  <p className="text-center font-bold text-xl text-black">
                    Incorrecto
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizComponent;
