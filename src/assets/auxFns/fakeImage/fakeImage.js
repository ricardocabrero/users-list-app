const fakeImage = () => {
    const  images = [
        'https://img.lovepik.com/element/40023/3604.png_860.png',
        'https://img.lovepik.com/element/40023/3607.png_860.png',
        'https://img.lovepik.com/element/40023/3608.png_860.png',
        'https://img.lovepik.com/element/40023/3601.png_860.png'
    ],
    index = Math.round(Math.random() * (3 - 0))
    return images[index]
}

export default fakeImage