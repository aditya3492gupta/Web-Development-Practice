change = () => {
    let x = Math.floor(Math.random() * 125)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 100)
    let bgColor = `rgb(${x}, ${y}, ${z})`
    document.body.style.background = bgColor;
}