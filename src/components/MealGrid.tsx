import { SimpleGrid, Text } from "@chakra-ui/react";
import useMeals from "../hooks/useMeals";
import MealCard from "./MealCard";

const MealGrid = () => {
  const { meals, error } = useMeals();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={5} spacing={10}>
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MealGrid;
