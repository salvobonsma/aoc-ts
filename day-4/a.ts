import {runSolution} from '../utils.ts';

/** provide your solution as the return of this function */
export async function day4a(data: string[]) {
    console.log(data);
    const twoD = data.map(value => value.split(""));
    let total = 0;

    twoD.forEach((row, y) => row.map((value, x) => {
        if (value != "X") return;

        function getCords(x2: number, y2: number) {
            try {
                return twoD[y + y2][x + x2];
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (e) {
                return "";
            }
        }

        function right() {
            return getCords(1, 0) == "M" && getCords(2, 0) == "A" && getCords(3, 0) == "S" ? 1 : 0
        }

        function left() {
            return getCords(-1, 0) == "M" && getCords(-2, 0) == "A" && getCords(-3, 0) == "S" ? 1 : 0
        }

        function up() {
            return getCords(0, -1) == "M" && getCords(0, -2) == "A" && getCords(0, -3) == "S" ? 1 : 0
        }

        function down() {
            return getCords(0, 1) == "M" && getCords(0, 2) == "A" && getCords(0, 3) == "S" ? 1 : 0
        }

        function upRight() {
            return getCords(1, -1) == "M" && getCords(2, -2) == "A" && getCords(3, -3) == "S" ? 1 : 0
        }

        function upLeft() {
            return getCords(-1, -1) == "M" && getCords(-2, -2) == "A" && getCords(-3, -3) == "S" ? 1 : 0
        }

        function downRight() {
            return getCords(1, 1) == "M" && getCords(2, 2) == "A" && getCords(3, 3) == "S" ? 1 : 0
        }

        function downLeft() {
            return getCords(-1, 1) == "M" && getCords(-2, 2) == "A" && getCords(-3, 3) == "S" ? 1 : 0
        }

        total += right() + left() + up() + down() + upRight() + downRight() + upLeft() + downLeft();
    }));

    return total;
}

await runSolution(day4a);
