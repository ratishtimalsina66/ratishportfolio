import { skills } from "@/data/portfolioData";

export function useSkills() {
  return {
    data: skills,
    isLoading: false,
    error: null,
  };
}