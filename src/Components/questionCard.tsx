import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard:FC<Props> = ({question, answers, callback, userAnswer, questionNumber, totalQuestions}) => {
    return(
        <div>
            <Title>Question Card</Title>
            <p>Question: {questionNumber} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {answers.map(answer => (
                    <div key = {answer}>
                        <button disabled={userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

//STYLED COMPONENTS
const Title = styled.div``;

export default QuestionCard;