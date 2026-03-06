import { MeditationPlayerProvider } from "@/contexts/MeditationPlayerContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
    mutations: {
      retry: 1,
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <MeditationPlayerProvider>{children}</MeditationPlayerProvider>
    </QueryClientProvider>
  );
}
