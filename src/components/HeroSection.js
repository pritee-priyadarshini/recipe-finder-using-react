import CustomImage from "./CustomImage";

export default function HeroSection() {

    const images = [
        "/Images/recipes/butter-chicken.jpg",
        "/Images/recipes/chicken-biryani.jpg",
        "/Images/recipes/paneer-kadhai.jpg",
        "/Images/recipes/naan.jpg",
        "/Images/recipes/jalebi.jpg",
        "/Images/recipes/pizza.jpg",
        "/Images/recipes/pulao.jpg",
        "/Images/recipes/samosa.jpg",
        "/Images/recipes/veg-biryani.jpg"
    ]

    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About??</h1>
                <p className="info">Grab-A-Bite is a place where you can search for mouth-watering recipes and also check the nutritional value its holds</p>
                <button className="btn">Explore Now</button>
            </div>
            <div className="col gallery">
                {
                    images.map((src, index) => (
                        <CustomImage key = {index} imgSrc={src} pt={"85%"} />
                    ))
                }
            </div>
        </div>
    )
}