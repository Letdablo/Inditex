import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PodcastHome from "./components/podcastHome/PodcastHome";
import ErrorPage from "./components/errorPage/ErrorPage";
import PodcastDetail from "./components/podcastDetail/PodcastDetail";
import './main.css'
import { QueryClient, QueryClientProvider } from "react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PodcastHome></PodcastHome>,
    errorElement: <ErrorPage />,
  },
  {
    path: "podcast/:podcastId",
    element: <PodcastDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode >
);



export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 24 * 60 * (60 * 1000), // 1 dia
        cacheTime: 24 * 60 * (60 * 1000), // 1 dia
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="ContainerApp">
          <RouterProvider router={router} />
        </div>
      </div>
    </QueryClientProvider>
  );
}