const inputField = document.querySelector("#inputField");
const inputBtn = document.querySelector("#inputBtn");

inputBtn.addEventListener(
    "click",
    function(event){
        let input = inputField.value;
        const resultOutput = document.querySelector("#result");
        const error = document.querySelector("#error");
        if (input == "" || input == null){

            error.innerHTML = "<span style='color: red;'>" +
            "Write a word plz</span>";
        }
        else{
            error.innerHTML == "";
            let result = toCapital(input);
            resultOutput.innerHTML = result;
            console.log(result);
            inputField.value = null;
        }
    },
    false
);

function toCapital(string){

    return string.toUpperCase();
}
