import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./Styles/GlobalStyles";
import AppLayout from "./AppLayout";
import Home from "./Pages/Home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Loader from "./UI/Loader";

const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about-us" element={<Home />}></Route>
              <Route path="/our-doctors" element={<Home />}></Route>
              <Route path="/facilities" element={<Home />}></Route>
              <Route path="/consultation" element={<Home />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
