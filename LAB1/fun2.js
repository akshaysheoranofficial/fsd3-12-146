const f1 = () => {
    console.log("F1");
};

const f2 = () => {
    console.log("F2");
};

const f3 = () => {
    console.log("F3");
};

function main() {
    console.log("Main");

    setTimeout(f1, 50);
    setTimeout(f3, 50);

    new Promise((resolve, reject) => {
        resolve("I am promise 1");
    }).then((result) => {
        console.log(result);
    });

    new Promise((resolve, reject) => {
        resolve("I am promise 2");
    }).then((result) => {
        console.log(result);
    });

    f2();
}

main();