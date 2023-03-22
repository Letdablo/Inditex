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
    <div className="App">

      <div className="ContainerApp">
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode >
);