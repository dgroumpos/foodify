import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Meal {
  idMeal: string;
  strMeal: string;
}

interface FetchMealsResponse {
  meals: Meal[];
}

const MealGrid = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchMealsResponse>("")
      .then((res) => setMeals(res.data.meals))
      .catch((err) => setError(err.message));
  }, []);

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
