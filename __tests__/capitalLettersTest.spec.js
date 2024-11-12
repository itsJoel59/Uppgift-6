import { toCapital } from "../src/toCapital";

//test
describe("toCapital() Function Test", () => {

    test("test case 1", () => {


        const input = "hundrafemtiotusen";
        const expectedResult = "HUNDRAFEMTIOTUSEN";

        expect(toCapital(input)).toBe(expectedResult);

    });

    //test to fail?
    test("test case 2", () => {


        const input = "hundrafemtiotusen";
        const expectedResult = input;

        expect(toCapital(input)).toBe(expectedResult);

    });
});