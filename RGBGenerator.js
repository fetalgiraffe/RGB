// For full API documentation, including code examples, visit https://wix.to/94BuAAs

// Returns a number between 0 and 255
function generateRandomNumber() {
    return Math.floor(Math.random() * 256);
}

// Create your createRandomRGBvalue function below: 
function createRandomColor() {
    let newColor = [];
    for (let ct = 0; ct < 3; ct++) {
        newColor.push(generateRandomNumber());
    }
    return newColor.join(',');
}

$w.onReady(function () {
    // Selectors for all the Container boxes
    const bigBox = $w('#box0');
    const firstCircle = $w('#box1');
    const secondCircle = $w('#box2');
    const thirdCircle = $w('#box3');
    const fourthCircle = $w('#box4');
    const fifthCircle = $w('#box5');
    const Slider1 = $w('#slider1');
    const Slider2 = $w('#slider2');
    const Slider3 = $w('#slider3');

    // Selector for the first button
    const changeBoxBtn = $w('#changeBox');

    // Add your code to change box colors below:
    changeBoxBtn.onClick(event => {
        let newRGBvalue = createRandomColor();
        bigBox.style.backgroundColor = `rgb(${newRGBvalue})`;
        bigBox.style.borderColor = `rgb(${newRGBvalue})`;
    });

    const allBoxes = [
        bigBox,
        firstCircle,
        secondCircle,
        thirdCircle,
        fourthCircle,
        fifthCircle
    ];

    const changeAllBtn = $w('#changeAll');

    changeAllBtn.onClick(event => {
        allBoxes.forEach(box => {
            let boxRGBvalue = createRandomColor();
            box.style.backgroundColor = `rgb(${boxRGBvalue})`;
            box.style.borderColor = `rgb(${boxRGBvalue})`;
        });
    });

    function userColor() {
        let threeColors = [];
        for (let i = 0; i < 1; i++) {
            threeColors.push($w('#slider1').value);
            threeColors.push($w('#slider2').value);
            threeColors.push($w('#slider3').value);
        }

        return threeColors.join(',');
    }

    Slider1.onChange(event => {
        let RGBvalue = userColor();
        bigBox.style.backgroundColor = `rgb(${RGBvalue})`;
        bigBox.style.borderColor = `rgb(${RGBvalue})`;
    });

    Slider2.onChange(event => {
        let RGBvalue = userColor();
        bigBox.style.backgroundColor = `rgb(${RGBvalue})`;
        bigBox.style.borderColor = `rgb(${RGBvalue})`;
    });

    Slider3.onChange(event => {
        let RGBvalue = userColor();
        bigBox.style.backgroundColor = `rgb(${RGBvalue})`;
        bigBox.style.borderColor = `rgb(${RGBvalue})`;
    });

});