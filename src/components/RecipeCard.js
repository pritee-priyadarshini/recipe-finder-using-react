import CustomImage from "./CustomImage";

export default function RecipeCard({recipe}) {
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div>
                <img className = "author-img" src={recipe.authorImg} alt="chef" />
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{recipe.desc}</p>
                <a className="view-btn" href={recipe.website}> VIEW RECIPE</a>
            </div>
        </div>
    )
}