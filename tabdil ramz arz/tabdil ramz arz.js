let toborrow, dirham, dollar, euro, a, b, c = 0;

function ToBorrow(n) {
    toborrow = n;
    return toborrow
}

function MoneyAndUnit(x, xx, y, yy, z, zz) {
    dirham = x * xx;
    euro = y * yy;
    dollar = z * zz;
    return {
        dollar, euro, dirham
    };
}

function HowManyUnit(mDriham, mEuro, mDollar) {
    a = mDriham;
    b = mEuro;
    c = mDollar;
    return {
        a, b, c
    };
}

let manyBack = 0

ToBorrow(100)
MoneyAndUnit(30, 1, 20, 1, 30, 1)
HowManyUnit(3, 3, 3)

function HowToBack() {
    while (a >= 0) {
        if (toborrow - (dirham * a) === 0) {
            manyBack += 1
        } else {
            while (b >= 0) {
                if (toborrow - (dirham * a) - (euro * b) === 0) {
                    manyBack += 1
                } else {
                    while (c >= 0) {
                        if (toborrow - (dirham * a) - (euro * b) - (dollar * c)) {
                            manyBack += 1
                        }
                        c--
                    }
                }
                b--
            }
        }
        a--
    }
    return manyBack
}

HowToBack()
console.log(manyBack)
