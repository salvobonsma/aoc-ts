import {runSolution} from '../utils.ts';

/** provide your solution as the return of this function */
export async function day2a(data: string[]) {
    console.log(data);

    return data.map(value => {
        return value.split(" ")
            .map(value1 => +value1)
            .map((value1, index, array) => {
                if (index == 0) return true;
                return Math.abs(value1 - array[index - 1]) >= 1 && Math.abs(value1 - array[index - 1]) <= 3;
            })
            .find(value1 => value1 == false) == undefined && (
            value.split(" ").map(value1 => +value1).map((value1, index, array) => {
                return value1 > array[index - 1]
            }).find(value1 => value1 == true) == undefined || value.split(" ").map(value1 => +value1).map((value1, index, array) => {
                return value1 < array[index - 1]
            }).find(value1 => value1 == true) == undefined
        )
    }).filter(value => value == true).length;
}

await runSolution(day2a);
