import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strTags: string;
}

interface FetchMealsResponse {
  meals: Meal[];
}

const useMeals = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchMealsResponse>("", { signal: controller.signal })
      .then((res) => {
        setMeals(res.data.meals);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { meals, error, isLoading };
};

export default useMeals;
