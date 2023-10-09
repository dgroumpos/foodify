import { Text } from "@chakra-ui/react";
import useMeals from "../hooks/useMeals";

const MealGrid = () => {
  const { meals, error } = useMeals();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </>
  );
};

export default MealGrid;
