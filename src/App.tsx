import React, { useState } from 'react';
import Button from './components/Button';
import ButtonGroup, { Choice } from './components/ButtonGroup'

interface Question {
    question: string;
    choice: Choice[];
}

const App: React.FC = () => {
    const [qNum, setQNum] = useState<number>(0);
    const [correct, setCorrect] = useState<number>(0);

    const questions: Question[] = [
        {
            question: "出身は?",
            choice: [
                { value: "埼玉", isAnswer: true },
                { value: "東京", isAnswer: false },
                { value: "千葉", isAnswer: false },
                { value: "神奈川", isAnswer: false },
            ]
        },
        {
            question: "最も得意な科目は?",
            choice: [
                { value: "物理", isAnswer: false },
                { value: "英語", isAnswer: true },
                { value: "化学", isAnswer: false },
                { value: "数学", isAnswer: false },
            ]
        },
        {
            question: "できたことあることは?",
            choice: [
                { value: "バク宙", isAnswer: false },
                { value: "3重飛び 5回", isAnswer: false },
                { value: "逆立ち1分", isAnswer: true },
                { value: "一輪車", isAnswer: false },
                { value: "全部", isAnswer: false },
            ]
        },
    ]

    return (
        <>
            <div className='flex justify-center items-center w-full h-screen bg-[#1b2440]'>
                <div className='min-w-3/4 border-2 p-4 border-indigo-200 rounded-3xl'>
                    {questions.length > qNum ?
                        <>
                            <h1 className='text-5xl text-indigo-200 mb-6 text-center'>Quiz</h1>
                            <h2 className='text-indigo-200 text-xl my-3 px-3 py-2 border-2 border-indigo-200 rounded'>{questions[qNum].question}</h2>
                            <ButtonGroup choices={questions[qNum].choice} incrementQNum={() => setQNum((qNum) => qNum + 1)} incrementCorrect={() => setCorrect((correct) => correct + 1)}></ButtonGroup>
                        </>
                        : <p className='text-5xl text-indigo-200 font-extrabold text-center my-5'> Result <span>{correct} / {qNum}</span></p>
                    }
                </div>
            </div>
        </>
    )
}

export default App;