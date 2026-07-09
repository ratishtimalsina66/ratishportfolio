import { projects } from "@/data/portfolioData";

export function useProjects() {
  return {
    data: projects,
    isLoading: false,
    error: null,
  };
}