import ChefCard from "./ChefCard"

export default function ChefSection() {
    const chefs = [
        {
            name: "Garima Arora",
            img: "/Images/Chef/Garima-Arora.jpg",
            recipesCount: "10",
            cuisine: "Lebanese",
        },
        {
            name: "Sanjeev Kapoor",
            img: "/Images/Chef/Sanjeev-Kapoor.jpg",
            recipesCount: "32",
            cuisine: "Indian",
        },
        {
            name: "Vikas Khanna",
            img: "/Images/Chef/Vikas-Khanna.jpg",
            recipesCount: "28",
            cuisine: "Indo-Mexican",
        },
        {
            name: "Himanshu Saini",
            img: "/Images/Chef/Himanshu-Saini.jpg",
            recipesCount: "5",
            cuisine: "Korean-Japanese",
        },
        {
            name: "Vineet Bhatia",
            img: "/Images/Chef/Vineet-Bhatia.jpg",
            recipesCount: "12",
            cuisine: "Italian",
        },
        {
            name: "Ranveer Brar",
            img: "/Images/Chef/Ranveer-Brar.jpg",
            recipesCount: "16",
            cuisine: "French",
        },
    ]

    return (
        <div className="section chefs">
            <h1 className="title">Our Top Chefs</h1>
            <div className="top-chefs-container">
                {/* <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard /> */}

                {chefs.map(chef => (
                    <ChefCard key={chef.name} chef={chef} />
                ))}
            </div>
        </div>
    )
}