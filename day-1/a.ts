import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day1a(data: string[]) {
  console.log(data);

  const a = data
      .map(value => +value.split("  ")[0])
      .sort((a1, b1) => a1 - b1);
  const b = data
      .map(value => +value.split("  ")[1])
      .sort((a1, b1) => a1 - b1);

  return  a
      .map((value, index) => Math.abs(value - b[index]))
      .reduce((previousValue, currentValue) => previousValue + currentValue);
}

await runSolution(day1a);
