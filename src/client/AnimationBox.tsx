'use client'

import Circle from "@/client/circle";
import {firstPhaseMatrix} from "@/utils/config";
import useScrollProgress from "@/utils/hooks/useScrollProgress";
import {Fragment} from "react";

interface Props {
    progress: number
}

const AnimationBox = ({progress}: Props) => {
    return (
        <div className=" sticky flex justify-center items-center bg-black">
            {firstPhaseMatrix.map((row, index, matrix) => {
                const breakpoint = (index + 1) / matrix.length
                const isRowVisible = progress >= breakpoint
                return <Fragment key={index}>
                    {row.map((cell, cellIndex) => {
                        return <Circle key={`${index}-${cellIndex}`} visible={cell === '+' && isRowVisible}/>;
                    })}
                </Fragment>
            })}
        </div>
    );
};

export default AnimationBox;
