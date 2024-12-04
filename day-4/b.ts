import {runSolution} from '../utils.ts';

/** provide your solution as the return of this function */
export async function day4b(data: string[]) {
    const twoD = data.map(value => value.split(""));
    let total = 0;

    twoD.forEach((row, y) => row.map((value, x) => {
        if (value != "A") return;

        function getCords(x2: number, y2: number) {
            try {
                return twoD[y + y2][x + x2];
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (e) {
                return "";
            }
        }

        function upRight() {
            return getCords(-1, 1) == "M" && getCords(1, -1) == "S" ? 1 : 0
        }

        function downLeft() {
            return getCords(-1, 1) == "S" && getCords(1, -1) == "M" ? 1 : 0
        }

        function downRight() {
            return getCords(-1, -1) == "M" && getCords(1, 1) == "S" ? 1 : 0
        }

        function upLeft() {
            return getCords(-1, -1) == "S" && getCords(1, 1) == "M" ? 1 : 0
        }

        total += upRight() + downLeft() + downRight() + upLeft() == 2 ? 1 : 0;
    }));

    return total;
}

await runSolution(day4b);
