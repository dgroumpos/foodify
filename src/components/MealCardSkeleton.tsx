import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const MealCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Skeleton height="300px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default MealCardSkeleton;
