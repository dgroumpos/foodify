import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Meal {
  idMeal: string;
  strMeal : string;
  strMealThumb: string
}

interface FetchMealsResponse {
  meals: Meal[];
}

const useMeals = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchMealsResponse>("", { signal: controller.signal })
      .then((res) => setMeals(res.data.meals))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { meals, error };
};

export default useMeals;
