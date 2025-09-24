import PreviousSearches from '../components/PreviousSearches';
import RecipeCard from '../components/RecipeCard';

export default function Recipes() {
    const recipes = [
        {
            title: "Jalebi",
            image: "/Images/recipes/jalebi.jpg",
            authorImg: "/Images/Chef/Sanjeev-Kapoor.jpg",
            desc: "A popular Indian dessert made of deep-fried, coiled batter soaked in saffron sugar syrup, known for its crisp texture and rich, syrupy sweetness.",
            website: "https://www.sanjeevkapoor.com/Recipe/Jalebi.html",
        },
        {
            title: "Chicken Biryani",
            image: "/Images/recipes/chicken-biryani.jpg",
            authorImg: "/Images/Chef/Himanshu-Saini.jpg",
            desc: "A fragrant and flavorful rice dish made with marinated chicken, basmati rice, and aromatic spices, layered and slow-cooked for a rich, hearty meal.",
            website: "",
        },
        {
            title: "Naan",
            image: "/Images/recipes/naan.jpg",
            authorImg: "/Images/Chef/Vikas-Khanna.jpg",
            desc: "A soft and chewy Indian flatbread traditionally baked in a tandoor, often served warm with curries, kebabs, or used to scoop up rich sauces.",
            website: "",
        },
        {
            title: "Veg Pulao",
            image: "/Images/recipes/pulao.jpg",
            authorImg: "/Images/Chef/Garima-Arora.jpg",
            desc: "A mildly spiced rice dish cooked with fragrant basmati rice, mixed vegetables, and aromatic spices, making it a light yet flavorful vegetarian meal.",
            website: "",
        },
        {
            title: "Pancakes",
            image: "/Images/recipes/pancakes.jpg",
            authorImg: "/Images/Chef/Garima-Arora.jpg",
            desc: "Fluffy, golden griddle cakes made from a simple batter of flour, eggs, and milk, perfect for breakfast when served with syrup, fruit, or butter.",
            website: "",
        },
        {
            title: "Paneer Kadhai",
            image: "/Images/recipes/paneer-kadhai.jpg",
            authorImg: "/Images/Chef/Ranveer-Brar.jpg",
            desc: "A rich and spicy North Indian curry featuring cubes of paneer cooked with bell peppers, tomatoes, and bold aromatic spices in a tangy tomato-based gravy.",
            website: "",
        },
        {
            title: "Samosa",
            image: "/Images/recipes/samosa.jpg",
            authorImg: "/Images/Chef/Vikas-Khanna.jpg",
            desc: "A crispy, golden pastry filled with a spiced mixture of potatoes, peas, and sometimes meat, deep-fried to perfection and served as a popular savory snack or appetizer.",
            website: "",
        },
        {
            title: "Margherita Pizza",
            image: "/Images/recipes/pizza.jpg",
            authorImg: "/Images/Chef/Vineet-Bhatia.jpg",
            desc: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, fragrant basil, and a drizzle of olive oil, offering a simple yet delicious flavor.",
            website: "",
        },

    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className='recipes-container'>
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}