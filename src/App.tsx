
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useCallback } from 'react';

// Contexts
import { MediaProvider } from "./contexts/MediaContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./components/ThemeProvider";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RadioPlayer from "./components/RadioPlayer";
import SplashScreen from "./components/SplashScreen";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Podcasts from "./pages/Podcasts";
import PodcastDetail from "./pages/PodcastDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Fundraisers from "./pages/Fundraisers";
import FundraiserDetail from "./pages/FundraiserDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(() => {
    // Only show splash once per session
    return !sessionStorage.getItem('tal-radio-splash-shown');
  });
  const [pageLoaded, setPageLoaded] = useState(false);

  const handleSplashComplete = useCallback(() => {
    sessionStorage.setItem('tal-radio-splash-shown', 'true');
    setShowSplash(false);
  }, []);

  useEffect(() => {
    if (!showSplash) {
      setPageLoaded(true);
    }
  }, [showSplash]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="tal-radio-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
          <BrowserRouter>
            <LanguageProvider>
              <MediaProvider>
                <div className={`flex flex-col min-h-screen ${pageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                  <Navbar />
                  <main className="flex-grow pt-14 sm:pt-16 md:pt-20 pb-20 sm:pb-24">
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/team" element={<Team />} />
                      <Route path="/podcasts" element={<Podcasts />} />
                      <Route path="/podcasts/:id" element={<PodcastDetail />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/blog/:id" element={<BlogDetail />} />
                      <Route path="/fundraisers" element={<Fundraisers />} />
                      <Route path="/fundraisers/:id" element={<FundraiserDetail />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <RadioPlayer />
                  <Footer />
                </div>
              </MediaProvider>
            </LanguageProvider>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
