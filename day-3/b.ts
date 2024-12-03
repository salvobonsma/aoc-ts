import {runSolution} from '../utils.ts';

/** provide your solution as the return of this function */
export async function day3b(data: string[]) {
    console.log(data);
    let string = data.join("");
    const regex = /mul\(\d{1,3},\d{1,3}\)/g;
    const doDoNotRegex = /do\(\)|don't\(\)/g;
    const muls = string.match(regex);

    let canDo  = true;

    return muls
        .map(value => {
            const index = string.indexOf(value);
            const stringBefore =  string.slice(0, index);
            string = string.slice(index + value.length, string.length);

            const doDoNotBefore = stringBefore.match(doDoNotRegex);
            if (doDoNotBefore?.length != null) canDo = doDoNotBefore[doDoNotBefore.length - 1] == "do()";
            if (!canDo) return 0;

            const values = value
                .replace("mul(", "")
                .replace(")", "")
                .split(",")
                .map(value1 => +value1);

            return values[0] * values[1];
        })
        .reduce((previousValue, currentValue) => previousValue + currentValue);
}

await runSolution(day3b);
