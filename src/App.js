import { useEffect, useState } from 'react';
import './App.css';
import { MyList } from './MyList';
import { MyMealsAndIngredients } from './MyMealsAndIngredients';
import uuid from 'react-uuid';


function App() {

  const [mealPlans, setMealPlans] = useState(localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : [])
  const [selectedDay, setSelectedDay] = useState(false)


  useEffect(() => {
    localStorage.setItem('mealPlans', JSON.stringify(mealPlans))
  }, [mealPlans])

  const addMeal = () => {
    const newMeal = {
      title: "",
      id: uuid(),
      mealForADay: '',
      ingredients: ''
    }
    setMealPlans([newMeal, ...mealPlans])
    console.log(newMeal)
  }

  const removeItem = (mealId) => {
    let newRemoveItem = mealPlans.filter(meal => meal.id !== mealId)
    setMealPlans(newRemoveItem)
  }

  const updateDay = (myUpdatedMeal) => {
    const updatedMeal = mealPlans.map((mealPlan) => {
      if(mealPlan.id === myUpdatedMeal.id) {
        return myUpdatedMeal;
      }
      return mealPlan;
    })
    setMealPlans(updatedMeal)
  }

  const getActiveMeal = () => {
    return mealPlans.find(({id}) => id === selectedDay)
  }

  return (
    <div className="Container">
        <MyList addMeal={addMeal} 
                mealPlans={mealPlans}
                removeItem={removeItem}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
        />
        <MyMealsAndIngredients
                selectedDay={getActiveMeal()}
                updateDay={updateDay}
        />
    </div>
  );
}

export default App;
