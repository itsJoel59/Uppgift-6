//function to test
function toCapital(string){

    return string.toUpperCase();
}

//testet
describe("toCapital() Function Test", () => {

    test("test case 1", () => {


        const input = "hundrafemtiotusen";
        const expectedResult = "HUNDRAFEMTIOTUSEN";

        expect(toCapital(input)).toBe(expectedResult);

    });
});