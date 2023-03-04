import React from "react";
import Button from "./Button";

export interface Choice {
    value: string,
    isAnswer: boolean
}

interface ButtonGroupProps {
    choices: Choice[]
    incrementQNum: () => void;
    incrementCorrect: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = (props: ButtonGroupProps) => {
    const { choices, incrementQNum, incrementCorrect } = props;

    const onSelected = (isAnswer: boolean) => {
        if (isAnswer) {
            alert("correct!");
            incrementCorrect();
        } else {
            alert("incorrect");
        }
        incrementQNum();
    }

    return (
        <>
            <div className="flex-col">
                {choices.map((c, i) => {
                    return (
                        <div className="my-2">
                            <Button key={i} choice={c} onSelected={onSelected} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ButtonGroup;