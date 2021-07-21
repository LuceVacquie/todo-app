import React, { FC } from 'react';
import styled from 'styled-components';
import {AnswerObject} from '../Pages/Quiz';

interface Props {
    question: string;
    answers: string[];
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard:FC<Props> = ({question, answers, callback, userAnswer, questionNumber, totalQuestions}) => {
    return(
        <QuestionWrapper>
            <p>Question: {questionNumber} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {answers.map(answer => (
                    <ButtonWrapper 
                        key={answer} 
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}
                        >
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </QuestionWrapper>
    )
}

//STYLED COMPONENTS
const QuestionWrapper = styled.div`
    background-color: #f5f5f5bf;
    display: flex;
    flex-direction: column;
    color: #282c34;
    width: 80%;
    padding: 2rem;
    border-radius: 2rem;
`;

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

const ButtonWrapper = styled.div<ButtonWrapperProps>`
    :hover{
        opacity: 0.8;
    }
    button {
        cursor: pointer;
        user-select: none;
        background: ${({correct, userClicked}) => 
            correct
                ? 'green' 
                : !correct && userClicked 
                ? 'red' 
                : 'grey'
        }
    }
`;

export default QuestionCard;