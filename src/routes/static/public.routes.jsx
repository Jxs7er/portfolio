import { HomePage } from "@/pages";

const publicRoutes = [
  {
    path: "/",
    element: <HomePage />,
    children: [
      // { path: `category/:slug`, element: <CategoriesPage /> }
    ],
  },
];

export default publicRoutes;
