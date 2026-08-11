import { createBrowserRouter, RouterProvider } from "react-router";
import { LoadingProvider } from "../context";
import { NotFoundPage } from "../pages";
import { LanguageProvider } from "@/context";
import { MainLayout } from "@/ui/layouts";
import { mainRoutes } from "./config/main.routes";
import { systemRoutes } from "./static";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <LanguageProvider>
        <LoadingProvider>
          <MainLayout />
        </LoadingProvider>
      </LanguageProvider>
    ),
    errorElement: <NotFoundPage />,
    children: mainRoutes,
  },
  ...systemRoutes,
]);

export const AppRoutes = () => <RouterProvider router={appRouter} />;
