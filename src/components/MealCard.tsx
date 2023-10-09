import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Meal } from "../hooks/useMeals";

interface Props {
  meal: Meal;
}
const MealCard = ({ meal }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={meal.strMealThumb} />
      <CardBody>
        <Heading fontSize={"2xl"}>{meal.strMeal}</Heading>
      </CardBody>
    </Card>
  );
};

export default MealCard;
