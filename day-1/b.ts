import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day1b(data: string[]) {
  console.log(data);
    const a = data.map(value => +value.split("  ")[0]);
    const b = data.map(value => +value.split("  ")[1]);

    return a
        .map((value) => b.filter(value1 => value1 == value).length * value)
        .reduce((previousValue, currentValue) => previousValue + currentValue);
}

await runSolution(day1b);
