import { SimpleGrid, Text } from "@chakra-ui/react";
import useMeals from "../hooks/useMeals";
import MealCard from "./MealCard";
import MealCardSkeleton from "./MealCardSkeleton";

const MealGrid = () => {
  const { meals, error, isLoading } = useMeals();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        justifyContent="space-evenly"
      >
        {isLoading &&
          skeletons.map((skeleton) => <MealCardSkeleton key={skeleton} />)}
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MealGrid;
