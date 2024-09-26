import { BrowserRouter, Route, Routes } from "react-router-dom";
import {PageController, WidgetsProvider} from "@sitecore-search/react";
import Home from "@/pages/Home";
import Header from "@/layout/Header";
import { Toaster } from "@/components/ui/toaster";

function App() {
  PageController.getContext().setGeoLocationLat(40.796817);
  PageController.getContext().setGeoLocationLon(-73.619876);
  return (
        <BrowserRouter>
          <WidgetsProvider
            trackConsent={false}
            apiKey={import.meta.env.VITE_SEARCH_API_KEY}
            env={import.meta.env.VITE_SEARCH_ENV}
            publicSuffix={true}
            customerKey={import.meta.env.VITE_SEARCH_CUSTOMER_KEY}
          >
            <div className="bg-white dark:bg-gray-700 flex">
              <Header />
              <main className="w-[80%] m-auto mt-[120px] min-h-[700px]">
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
                <Toaster />
              </main>
            </div>
          </WidgetsProvider>
        </BrowserRouter>
  );
}

export default App;
