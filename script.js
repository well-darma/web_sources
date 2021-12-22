const IMAGE_BASE_PATH = './images';

const data = [
    {
        label: "Instagram background image",
        path: `${IMAGE_BASE_PATH}/instagram.png`
    },
    {
        label: "Snowflake (svg)",
        path: `${IMAGE_BASE_PATH}/snowflake.svg`
    }
]

const sources = document.querySelector('#sources');

data.forEach((image) => {
    const dataLine = document.createElement('div');
    dataLine.classList.add('line-data');
    dataLine.innerHTML = (`
        <span class="label">
            ${image.label}
        </span>
        <img
            class="image"
            src="${image.path}"
            alt="${image.label}"
        >
        </img>`
    );
    sources.appendChild(dataLine);
});
