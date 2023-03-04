import React, { useState } from "react"
import ButtonGroup, { Choice } from "./components/ButtonGroup"

interface Question {
  question: string
  choice: Choice[]
}

const App: React.FC = () => {
  const [qNum, setQNum] = useState<number>(0)
  const [correct, setCorrect] = useState<number>(0)

  const questions: Question[] = [
    {
      question: "出身は?",
      choice: [
        { value: "埼玉", isAnswer: true },
        { value: "東京", isAnswer: false },
        { value: "千葉", isAnswer: false },
        { value: "神奈川", isAnswer: false }
      ]
    },
    {
      question: "最も得意な科目は?",
      choice: [
        { value: "物理", isAnswer: false },
        { value: "英語", isAnswer: true },
        { value: "化学", isAnswer: false },
        { value: "数学", isAnswer: false }
      ]
    },
    {
      question: "できたことあることは?",
      choice: [
        { value: "バク宙", isAnswer: false },
        { value: "3重飛び 5回", isAnswer: false },
        { value: "逆立ち1分", isAnswer: true },
        { value: "一輪車", isAnswer: false },
        { value: "全部", isAnswer: false }
      ]
    }
  ]

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-[#1b2440]">
        <div className="min-w-3/4 rounded-3xl border-2 border-indigo-200 p-4">
          {questions.length > qNum ? (
            <>
              <h1 className="mb-6 text-center text-5xl text-indigo-200">Quiz</h1>
              <h2 className="my-3 rounded border-2 border-indigo-200 px-3 py-2 text-xl text-indigo-200">
                {questions[qNum].question}
              </h2>
              <ButtonGroup
                choices={questions[qNum].choice}
                incrementQNum={() => setQNum((qNum) => qNum + 1)}
                incrementCorrect={() => setCorrect((correct) => correct + 1)}
              ></ButtonGroup>
            </>
          ) : (
            <p className="my-5 text-center text-5xl font-extrabold text-indigo-200">
              {" "}
              Result{" "}
              <span>
                {correct} / {qNum}
              </span>
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default App
