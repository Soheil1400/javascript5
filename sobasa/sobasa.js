let a, b, n = 0

function checkPoint(goal, extra1, extra2) {
    n = goal;
    a = extra1;
    b = extra2;
    return [
        n, a, b
    ]
}

checkPoint(5, 3, 4)

const Tgoal = [4, 48, 45, 56,94]

function goalSobasa(prevVal, currentVal) {
    if (Tgoal.length !== n) {
        return "false"
    } else {
        if (prevVal <= currentVal) {
        } else {
            if (prevVal < a + 46) {
            } else {
                return "false"
            }
        }
    }
    if (currentVal > b + 90) {
        return "false"
    }
    return currentVal
}

const Result = Tgoal.reduce(goalSobasa)

let result = (Result !== "false") ? "Yes" : "No"
console.log(result)
