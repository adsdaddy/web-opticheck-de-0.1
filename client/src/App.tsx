import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import Hilfe from "./pages/Hilfe";
import Kontakt from "./pages/Kontakt";
import UeberUns from "./pages/UeberUns";
import Karriere from "./pages/Karriere";
import PartnerWerden from "./pages/PartnerWerden";
import Krankenversicherung from "./pages/Krankenversicherung";
import Wohngebaeudeversicherung from "./pages/Wohngebaeudeversicherung";
import { useEffect } from "react";
import { useLocation } from "wouter";

/* Scroll to top on route change */
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/datenschutz" component={Datenschutz} />
        <Route path="/agb" component={AGB} />
        <Route path="/hilfe" component={Hilfe} />
        <Route path="/kontakt" component={Kontakt} />
        <Route path="/ueber-uns" component={UeberUns} />
        <Route path="/karriere" component={Karriere} />
        <Route path="/partner-werden" component={PartnerWerden} />
        <Route path="/krankenversicherung" component={Krankenversicherung} />
        <Route path="/wohngebaeudeversicherung" component={Wohngebaeudeversicherung} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
