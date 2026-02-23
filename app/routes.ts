import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Landing from "./pages/Landing";
import Templates from "./pages/Templates";
import Pricing from "./pages/Pricing";
import Builder from "./pages/Builder";
import Dashboard from "./pages/Dashboard";
import PublicInvitation from "./pages/PublicInvitation";
import Auth from "./pages/Auth";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import OnboardingOccasion from "./pages/OnboardingOccasion";
import OnboardingTemplate from "./pages/OnboardingTemplate";
import OnboardingEdycja from "./pages/OnboardingEdycja";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Landing },
      { path: "szablony", Component: Templates },
      { path: "cennik", Component: Pricing },
      { path: "builder/:id?", Component: Builder },
      { path: "dashboard", Component: Dashboard },
      { path: "auth", Component: Auth },
      { path: "blog", Component: BlogList },
      { path: "blog/:slug", Component: BlogPost },
      { path: "onboarding/okazja", Component: OnboardingOccasion },
      { path: "onboarding/szablon", Component: OnboardingTemplate },
      { path: "onboarding/edycja", Component: OnboardingEdycja },
    ],
  },
  {
    // Public invitation pages (without navbar/footer)
    path: "/i/:slug",
    Component: PublicInvitation,
  },
  {
    // Alternative route for invitations
    path: "/invitation/:slug",
    Component: PublicInvitation,
  },
  {
    // For backward compatibility and demo purposes
    path: "/kasia-i-maciek",
    Component: PublicInvitation,
  },
  {
    // Catch all 404 - must be last
    path: "*",
    Component: Root,
    children: [
      { path: "*", Component: NotFound },
    ],
  },
]);