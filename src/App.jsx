import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./Styles/GlobalStyles";
import AppLayout from "./AppLayout";
import Home from "./Pages/Home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Loader from "./UI/Loader";
import BookHistory from "./Pages/BookHistory/BookHistory";
import ProtectedRoute from "./Pages/LoginPage/ProtectedRoute";

const queryClient = new QueryClient();

function App() {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 1000);
  }, []);

  return (
    <>
      {loaded && <Loader />}
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="about-us" element={<Home />} />
              <Route path="our-doctors" element={<Home />} />
              <Route path="facilities" element={<Home />} />
              <Route path="consultation" element={<Home />} />

              <Route element={<ProtectedRoute />}>
                <Route path="booking-history" element={<BookHistory />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
