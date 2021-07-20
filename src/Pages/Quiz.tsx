import React, {FC, useState} from 'react';
import styled from 'styled-components';
// import QuestionCard from '../Components/questionCard';
import { fetchQuizQuestions } from '../API';
import { Difficulty } from '../API';

const TOTAL_QUESTIONS = 15;

const Quiz:FC = () => {

    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState([])
    const [number, setNumber] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(true)

    console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

    const startTrivia = async () => {

    }

    const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {

    }

    const nextQuestion = () => {

    }

    return(
        <div>
            <Title>Quiz</Title>
            <button onClick={startTrivia}>Start Quiz</button>
            <p>Score: </p>
            <p>Loading questions...</p>
            {/* <QuestionCard
                questionNumber = {number + 1}
                totalQuestions = {TOTAL_QUESTIONS}
                question={questions[number].question}
                answers={questions[number].answers}
                userAnswer = {userAnswers ? userAnswers[number] : undefined}
                callback={checkAnswer}
            /> */}
            <button onClick={nextQuestion}>Next question</button>
        </div>
    )
}

//STYLED COMPONENTS
const Title = styled.div``;

export default Quiz;