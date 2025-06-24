const cores = [
    {
        firstColor: "#1D1E1E",
        secundColor: "#606868",
        thirdColor: "#95A1A1",
        fourthColor: "#CBD7D1",
    },
    {
        firstColor: "#D6E1B6",
        secundColor: "#FAD6BE",
        thirdColor: "#FAA96C",
        fourthColor: "#F5F4F5",
    },
    {
        firstColor: "#F7F6F7",
        secundColor: "#BOE4F4",
        thirdColor: "#FAB946",
        fourthColor: "#14BA85",
    },
    {
        firstColor: "#050505",
        secundColor: "#BAB8F3",
        thirdColor: "#FCD29E",
        fourthColor: "#4C4C4D",
    },
    {
        firstColor: "#749CB5",
        secundColor: "#F3C331",
        thirdColor: "#F9F9F8",
        fourthColor: "#B73B52",
    },
    {
        firstColor: "#519674",
        secundColor: "#8DAC99",
        thirdColor: "#CDCDC3",
        fourthColor: "#EDE7EO",
    },
    {
        firstColor: "#E4A34E",
        secundColor: "#CB562C",
        thirdColor: "#56564E",
        fourthColor: "#BA966E",
    },
    {
        firstColor: "#D4DCDC",
        secundColor: "#26676E",
        thirdColor: "#95COBD",
        fourthColor: "#E6B4AA",
    },
    {
        firstColor: "#21324B",
        secundColor: "#78B9BA",
        thirdColor: "#CE472F",
        fourthColor: "#C6C5B4",
    },
    {
        firstColor: "#E47B58",
        secundColor: "#E94D1F",
        thirdColor: "#2E1816",
        fourthColor: "#922413",
    },
    {
        firstColor: "#D6E5D4",
        secundColor: "#175438",
        thirdColor: "#A1E987",
        fourthColor: "#3C7321",
    },
    {
        firstColor: "#114042",
        secundColor: "#7EB6CB",
        thirdColor: "#BBFO2F",
        fourthColor: "#8A624C",
    },
    {
        firstColor: "#F3F2EF",
        secundColor: "#F8BA4D",
        thirdColor: "#524845",
        fourthColor: "#050303",
    },
    {
        firstColor: "#F3EEF8",
        secundColor: "#FCDF78",
        thirdColor: "#857E81",
        fourthColor: "#D9BBF8",
    },
    {
        firstColor: "#FOEEE9",
        secundColor: "#928D84",
        thirdColor: "#868122",
        fourthColor: "#B4A2CC",
    },
    {
        firstColor: "#FEFEFE",
        secundColor: "#070606",
        thirdColor: "#F6E9B2",
        fourthColor: "#E6E8EB",
    },
    {
        firstColor: "#7671FA",
        secundColor: "#E5EAF3",
        thirdColor: "#07244C",
        fourthColor: "#7E7F9C",
    },
    {
        firstColor: "#F8F1F3",
        secundColor: "#EOBCCC",
        thirdColor: "#EBC5BD",
        fourthColor: "#6E6O5F",
    },
    {
        firstColor: "#353A40",
        secundColor: "#91A5A7",
        thirdColor: "#5E68E6",
        fourthColor: "#CD873C",
    },
    {
        firstColor: "#FCF6F5",
        secundColor: "#63D161",
        thirdColor: "#585D61",
        fourthColor: "#DEAF4B",
    },
    {
        firstColor: "#A8DCE7",
        secundColor: "#101422",
        thirdColor: "#FFFFFF",
        fourthColor: "#272B3B",
    },
    {
        firstColor: "#BAC8D9",
        secundColor: "#193940",
        thirdColor: "#9BF272",
        fourthColor: "#7ABF5A",
    },
    {
        firstColor: "#25D162",
        secundColor: "#2B2B2B",
        thirdColor: "#1D1D1D",
        fourthColor: "#FFFFFF",
    },
    {
        firstColor: "#295255",
        secundColor: "#FOF5F7",
        thirdColor: "#162623",
        fourthColor: "#577877",
    },
    {
        firstColor: "#EB5B38",
        secundColor: "#272A2D",
        thirdColor: "#E6E4DC",
        fourthColor: "#347CCB",
    },

];

const firstColor = document.querySelector(".firstColor");
const secundColor = document.querySelector(".secundColor");
const thirdColor = document.querySelector(".thirdColor");
const fourthColor = document.querySelector(".fourthColor");
const firstCode = document.querySelector(".codeFirstCode");
const secundCode = document.querySelector(".codeSecundCode");
const thirdCode = document.querySelector(".codeThirdCode");
const fourthCode = document.querySelector(".codeFourthCode");

let colorView = 0;
let totalColors = 24;

firstColor.style.background = cores[colorView].firstColor;
secundColor.style.background = cores[colorView].secundColor;
thirdColor.style.background = cores[colorView].thirdColor;
fourthColor.style.background = cores[colorView].fourthColor;
firstCode.textContent = cores[colorView].firstColor;
secundCode.textContent = cores[colorView].secundColor;
thirdCode.textContent = cores[colorView].thirdColor;
fourthCode.textContent = cores[colorView].fourthColor;
firstColor.classList.add('fadeInUpBig');
secundColor.classList.add('fadeInUpBig');
thirdColor.classList.add('fadeInUpBig');
fourthColor.classList.add('fadeInUpBig');

const nextPaleta = document.querySelector('.nextPaleta');

nextPaleta.addEventListener('click', () => {
    backPaleta.removeAttribute('disabled');
    if(colorView < totalColors) {
        colorView++
    firstColor.classList.remove('fadeInDownBig');
    secundColor.classList.remove('fadeInDownBig');
    thirdColor.classList.remove('fadeInDownBig');
    fourthColor.classList.remove('fadeInDownBig');
    firstColor.classList.remove('fadeInUpBig');
    secundColor.classList.remove('fadeInUpBig');
    thirdColor.classList.remove('fadeInUpBig');
    fourthColor.classList.remove('fadeInUpBig');
    firstColor.classList.add('fadeOutDownBig');
    secundColor.classList.add('fadeOutDownBig');
    thirdColor.classList.add('fadeOutDownBig');
    fourthColor.classList.add('fadeOutDownBig');
    setTimeout(() => {
        firstColor.classList.remove('fadeOutDownBig');
    secundColor.classList.remove('fadeOutDownBig');
    thirdColor.classList.remove('fadeOutDownBig');
    fourthColor.classList.remove('fadeOutDownBig');
        firstColor.classList.add('fadeInUpBig');
        secundColor.classList.add('fadeInUpBig');
        thirdColor.classList.add('fadeInUpBig');
        fourthColor.classList.add('fadeInUpBig');
        firstColor.style.background = cores[colorView].firstColor;
        secundColor.style.background = cores[colorView].secundColor;
        thirdColor.style.background = cores[colorView].thirdColor;
        fourthColor.style.background = cores[colorView].fourthColor;
        firstCode.textContent = cores[colorView].firstColor;
        secundCode.textContent = cores[colorView].secundColor;
        thirdCode.textContent = cores[colorView].thirdColor;
        fourthCode.textContent = cores[colorView].fourthColor;
    }, 300);
    }else {
        nextPaleta.setAttribute('disabled', '');
    }
});

const backPaleta = document.querySelector('.backPaleta');

backPaleta.addEventListener('click', () => {
    nextPaleta.removeAttribute('disabled');
    if(colorView >= 1) {
    colorView--
    firstColor.classList.remove('fadeInUpBig');
    secundColor.classList.remove('fadeInUpBig');
    thirdColor.classList.remove('fadeInUpBig');
    fourthColor.classList.remove('fadeInUpBig');
    firstColor.classList.add('fadeOutUpBig');
    secundColor.classList.add('fadeOutUpBig');
    thirdColor.classList.add('fadeOutUpBig');
    fourthColor.classList.add('fadeOutUpBig');
    setTimeout(() => {
        firstColor.classList.remove('fadeOutUpBig');
        secundColor.classList.remove('fadeOutUpBig');
        thirdColor.classList.remove('fadeOutUpBig');
        fourthColor.classList.remove('fadeOutUpBig');
        firstColor.classList.add('fadeInDownBig');
        secundColor.classList.add('fadeInDownBig');
        thirdColor.classList.add('fadeInDownBig');
        fourthColor.classList.add('fadeInDownBig');
        firstColor.style.background = cores[colorView].firstColor;
    secundColor.style.background = cores[colorView].secundColor;
    thirdColor.style.background = cores[colorView].thirdColor;
    fourthColor.style.background = cores[colorView].fourthColor;
    firstCode.textContent = cores[colorView].firstColor;
    secundCode.textContent = cores[colorView].secundColor;
    thirdCode.textContent = cores[colorView].thirdColor;
    fourthCode.textContent = cores[colorView].fourthColor;
    },300);
}else {
    backPaleta.setAttribute('disabled', '');
}
});

