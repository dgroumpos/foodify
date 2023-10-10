import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Meal } from "../hooks/useMeals";
import TagList from "./TagList";

interface Props {
  meal: Meal;
}
const MealCard = ({ meal }: Props) => {
  if (meal.strTags === null) return null;
  const tags = meal.strTags.includes(",")
    ? meal.strTags.split(",")
    : [meal.strTags];
  return (
    <Card borderRadius={10} overflow="hidden" width="300px">
      <Image src={meal.strMealThumb} />
      <CardBody>
        <Heading fontSize={"2xl"}>{meal.strMeal}</Heading>
        <TagList allTags={tags} />
      </CardBody>
    </Card>
  );
};

export default MealCard;
