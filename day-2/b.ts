import {runSolution} from '../utils.ts';

/** provide your solution as the return of this function */
export async function day2b(data: string[]) {
    console.log(data);

    function isSafeFunc(row: number[]) {
        return row
            .map((value1, index, array) => {
                if (index == 0) return true;
                return Math.abs(value1 - array[index - 1]) >= 1 && Math.abs(value1 - array[index - 1]) <= 3;
            })
            .find(value1 => value1 == false) == undefined && (
            row.map((value1, index, array) => {
                return value1 > array[index - 1]
            }).find(value1 => value1 == true) == undefined || row.map((value1, index, array) => {
                return value1 < array[index - 1]
            }).find(value1 => value1 == true) == undefined
        )
    }

    return data.map(value => {
        const isSafe = isSafeFunc(value.split(" ").map(value1 => +value1));
        return isSafe ? true : value
            .split(" ")
            .map(value1 => +value1)
            .map((_, index, array) => isSafeFunc(array.filter((_, index1) => index != index1)))
            .find(value1 => value1 == true) != undefined
    }).filter(value => value == true).length;
}

await runSolution(day2b);
