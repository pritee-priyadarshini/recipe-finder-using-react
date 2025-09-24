export default function ImproveCulSkills() {

    const list =[
        "Learn New Recipes",
        "Experiment with Food",
        "Write your Own Recipes",
        "Know Nutrition Facts",
        "Get Cooking Tips",
        "Get Ranked"
    ]

    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="/Images/recipes/pancakes.jpg" alt="img" />
            </div>
            <div className="col typography">
                <h1 className="title">Wanna Improve Your Culinary Skills??</h1>
                {list.map((item, index) =>(
                    <p className="skill-item" key = {index}>{item}</p>
                ))}
                <button className="btn">SignUp Now</button>
            </div>

        </div>
    )
}