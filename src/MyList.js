import { Button } from "@mui/material"

export const MyList = ( {addMeal, mealPlans, removeItem, selectedDay, setSelectedDay} ) => {

    return(
        <div className="MyListContainer">
            <div>
                <h1>Week Meal Planner</h1>
                <Button onClick={addMeal} variant="contained" color="success">ADD</Button>
            </div> 
            <div className="title">
                {
                    mealPlans.map(({title, id, mealForADay, ingredients }) => (
                        <div key={id} className={`meal ${id === selectedDay ? 'selected' : 'default'}`}
                                onClick={() => setSelectedDay(id)}
                                >
                                <div className="deleteItemButton">
                                    <button onClick={() => removeItem(id)}>X</button>
                                </div>
                            <p className="day"><span>day: </span>{title}</p>
                            <p className="day"><span>menu: </span> {mealForADay}</p>
                            <p className="day"><span>to buy: </span>{ingredients}</p>
                        </div>
                    ))
                }
            </div>
            <Button variant="contained" color="error">DELETE ALL</Button>
        </div>
    )
}
