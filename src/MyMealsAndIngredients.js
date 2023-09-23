
export const MyMealsAndIngredients = ({selectedDay, updateDay}) => {

    const editMyMeal = (myInput, value) => {
        updateDay({
            ...selectedDay,
            [myInput]: value
        })
    }

    if(!selectedDay) return <p></p>

    return(
        <div className="IngredientsContainer">
                <div className="TextBlock">
                    <h5>day of the week:</h5>
                    <input type="text" 
                            className="myInput"
                            placeholder="enter"
                            maxLength={12}
                            id="title"
                            value={selectedDay.title}
                            onChange={(e) => editMyMeal('title', e.target.value)}
                    />
                </div>
                <div className="TextBlock">
                    <h5>menu:</h5>
                    <textarea placeholder="meal for a day" cols="70" rows="16"
                    maxLength={60}
                    id="mealForADay"
                    value={selectedDay.mealForADay}
                    onChange={(e) => editMyMeal('mealForADay', e.target.value)}
                    ></textarea>
                </div>
                <div className="TextBlock">
                    <h5>ingredients:</h5>
                    <textarea placeholder="ingredients" cols="70" rows="16"
                    maxLength={88}
                    id="ingredients"
                    value={selectedDay.ingredients}
                    onChange={(e) => editMyMeal('ingredients', e.target.value)}
                    ></textarea>
                </div>
        </div>
    )
}