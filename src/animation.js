const svg = document.getElementById("main")
const electrons = document.getElementsByClassName("electron-parent")

Array.from(electrons).forEach(electron => {
    electron.addEventListener("mouseover", (e) => {
        svg.pauseAnimations()
    })

    electron.addEventListener("mouseout", (e) => {
        svg.unpauseAnimations()
    })
})
