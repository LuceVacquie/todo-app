import React, {FC, useState} from 'react';
import styled from 'styled-components';
import QuestionCard from '../Components/questionCard';
import { fetchQuizQuestions } from '../API';
import { QuestionState, Difficulty } from '../API';

export interface AnswerObject {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const TOTAL_QUESTIONS = 15;

const Quiz:FC = () => {

    //STATES
    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState<QuestionState[]>([])
    const [number, setNumber] = useState(0)
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(true)

    console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

    //FUNCTIONS
    const startTrivia = async () => {
        setLoading(true)
        setGameOver(false)

        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUESTIONS,
            Difficulty.EASY
        )

        setQuestions(newQuestions)
        setScore(0)
        setUserAnswers([])
        setNumber(0)
        setLoading(false)
    }

    const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(!gameOver){
            //User answer
            const answer = event.currentTarget.value;
            //Check answer against the correct answer
            const correct = questions[number].correct_answer === answer;
            // Add score if answer is correct
            if(correct){
                setScore(prev => prev + 1)
            }
            //Save answer in the array for user answers
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer
            }
            setUserAnswers(prev => [...prev, answerObject])
        }
    }

    const nextQuestion = () => {
        const nextQuestion = number + 1;
        if (nextQuestion === TOTAL_QUESTIONS){
            setGameOver(true)
        } else {
            setNumber(nextQuestion)
        }
    }

    return(
        <Wrapper>
            <Title>General Knowledge Quiz</Title>

            {gameOver || userAnswers.length === TOTAL_QUESTIONS?
                <button onClick={startTrivia}>Start Quiz</button> 
                : 
                null
            }

            {!gameOver? <p>Score: {score}</p> : null}

            {loading && <p>Loading questions...</p>}

            {!loading && !gameOver &&
                <QuestionCard
                    questionNumber = {number + 1}
                    totalQuestions = {TOTAL_QUESTIONS}
                    question={questions[number].question}
                    answers={questions[number].answers}
                    userAnswer = {userAnswers ? userAnswers[number] : undefined}
                    callback={checkAnswer}
                />
            }
            
            {!gameOver 
            && !loading 
            && userAnswers.length === number + 1 
            && number !== TOTAL_QUESTIONS - 1 
            ?
                <NextButton onClick={nextQuestion}>Next question</NextButton> 
            :
                null
            }
            
        </Wrapper>
    )
}

//STYLED COMPONENTS
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #282c34;
  color: whitesmoke;
  text-align: center;
`;

const Title = styled.div`
    font-size: 2rem;
`;

const NextButton = styled.button`
    width: 90%;
    height: 5%;
    border-radius: 0.7rem;
    border: none;
    background-color: aqua;
    margin-top: 1rem;
`;

export default Quiz;