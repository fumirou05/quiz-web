import React from "react";
import { Choice } from "./ButtonGroup";

interface ButtonProps {
    choice: Choice;
    onSelected: (isAnswer: boolean) => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { onSelected, choice } = props;
    const onClick = () => {
        onSelected(choice.isAnswer);
    }

    return (
        <>
            <input type="button" value={choice.value} className="w-full bg-indigo-400 hover:bg-indigo-300 font-bold  text-white px-4 py-2 rounded-full" onClick={onClick} />
        </>
    )
}

export default Button;