'use client'

import Circle from "@/app/client/circle";
import {firstPhaseMatrix} from "@/app/utils/config";
import {Fragment, useMemo} from "react";

interface Props {
    progress: number
}

const MoonsSet = ({progress}: Props) => {
    const breakpoints = useMemo(() => {
        return firstPhaseMatrix.reduce((result, next, index) => {
            next.forEach((element, cellIndex) => {
                if(element) {
                    result[`${index}-${cellIndex}`] = Math.random();
                }
            })
            return result;
        }, {} as Record<string, number>)
    }, [])
    return (
        <div className="flex flex-col justify-center items-center gap-1">
            {firstPhaseMatrix.map((row, index, matrix) => {
                return <div className='flex flex-row gap-1' key={index}>
                    {row.map((cell, cellIndex) => {
                        const key = `${index}-${cellIndex}`;
                        const breakpoint = breakpoints[key];
                        const isVisible = Boolean(breakpoint && progress >= breakpoint);
                        return <Circle key={`${index}-${cellIndex}`} visible={isVisible}/>;
                    })}
                </div>
            })}
        </div>
    );
};

export default MoonsSet;
