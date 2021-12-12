function avg () {

    let result = 0;

    for (let i = 0; i < arguments.length; i++) {

        result += arguments [i];
    }

    let avarage = result / 2;

    return avarage
}

const funcAvg = function () {

    let result = 0;

    for (let i = 0; i < arguments.length; i++) {

        result += arguments [i];
    }

    let avarage = result / 2;

    return avarage
}

const func_avg = (...a) => {

    let result = 0;

    for (let i = 0; i < a.length; i++) {

        result += a [i];
    }

    let avarage = result / 2;

    return avarage

}