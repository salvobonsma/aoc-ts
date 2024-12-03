import {runSolution} from '../utils.ts';

/** provide your solution as the return of this function */
export async function day3a(data: string[]) {
    console.log(data);

    const regex = /mul\(\d{1,3},\d{1,3}\)/g;

    return data
        .join("")
        .match(regex)
        .map(value => {
            const values = value
                .replace("mul(", "")
                .replace(")", "")
                .split(",")
                .map(value1 => +value1);

            return values[0] * values[1]
        })
        .reduce((previousValue, currentValue) => previousValue + currentValue);
}

await runSolution(day3a);
