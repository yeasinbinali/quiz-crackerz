import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main/Main";
import Topics from "./components/Topics/Topics";
import Statistics from "./components/Statistics/Statistics";
import Home from "./components/Home/Home";
import Topic from "./components/Topic/Topic";
import Quiz from "./components/Quiz/Quiz";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        {
          path: "/topics",
          element: <Topics></Topics>,
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
        },
        {
          path: "/topic",
          element: <Topic></Topic>,
          loader: async (id) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${id}`);
          },
        },
        {
          path: "/quiz/:quizId",
          element: <Quiz></Quiz>,
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
        },
        {
          path: "*",
          element: (
            <div>
              <h3>This is no route: 404</h3>
            </div>
          ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
