let i = 0
const photo = document.getElementById("photo")

const photos = [
    {
        href: "1.jpg",
        height: "650",
        width: "650",
        x: "1482",
        y: "1482",
    },
    {
        href: "2.jpg",
        height: "1000",
        width: "1000",
        x: "1282",
        y: "1282",
    },
    {
        href: "5.jpg",
        height: "1200",
        width: "1200",
        x: "1200",
        y: "1450",
    },
    {
        href: "3.jpg",
        height: "1200",
        width: "1200",
        x: "1050",
        y: "1100",
    },
    {
        href: "6.jpg",
        height: "1000",
        width: "900",
        x: "1300",
        y: "1100",
    },
    {
        href: "7.jpg",
        height: "800",
        width: "800",
        x: "1400",
        y: "1350",
    },
    {
        href: "8.jpg",
        height: "1200",
        width: "1200",
        x: "1200",
        y: "1250",
    },
    {
        href: "9.jpg",
        height: "1000",
        width: "1000",
        x: "1350",
        y: "1350",
    },
    {
        href: "10.jpg",
        height: "1000",
        width: "1000",
        x: "1250",
        y: "1250",
    },
    {
        href: "4.jpg",
        height: "1000",
        width: "1000",
        x: "1350",
        y: "1250",
    },
    {
        href: "11.jpg",
        height: "1200",
        width: "1200",
        x: "1200",
        y: "1250",
    },
    {
        href: "12.jpg",
        height: "1200",
        width: "1200",
        x: "1200",
        y: "1350",
    },
    {
        href: "13.jpg",
        height: "900",
        width: "900",
        x: "1250",
        y: "1350",
    },
    {
        href: "14.jpg",
        height: "800",
        width: "800",
        x: "1350",
        y: "1400",
    },
    {
        href: "15.jpg",
        height: "800",
        width: "800",
        x: "1300",
        y: "1400",
    },
    {
        href: "16.jpg",
        height: "800",
        width: "800",
        x: "1400",
        y: "1410",
    },
    {
        href: "17.jpg",
        height: "1300",
        width: "1300",
        x: "1300",
        y: "1100",
    },
    {
        href: "18.jpg",
        height: "1300",
        width: "1300",
        x: "1150",
        y: "1200",
    },
    {
        href: "19.jpg",
        height: "1100",
        width: "1100",
        x: "1300",
        y: "1250",
    },
    {
        href: "20.jpg",
        height: "1100",
        width: "1100",
        x: "1150",
        y: "1200",
    },
]

const preload = function () {
    var image = new Image()
    image.src = `images/${photos.at(i).href}`

    image.onload = function () {
        replace()
        setTimeout(preload, 5000)
    }
}

const replace = function () {
    photo.setAttribute('href', `images/${photos.at(i).href}`)
    photo.setAttribute('height', photos.at(i).height)
    photo.setAttribute('width', photos.at(i).width)
    photo.setAttribute('x', photos.at(i).x)
    photo.setAttribute('y', photos.at(i).y)

    i++
    if (i > photos.length - 1) i = 0
}

preload()
