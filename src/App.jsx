import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Archives from "./pages/Archives";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-white dark:bg-slate-900 transition-all">
      <Navbar />
      <div className="mx-auto my-4">
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="mx-auto flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/archives" element={<Archives />} />
            </Routes>
          </main>
          <aside className="hidden sm:w-60 relative order-first sm:flex flex-col flex-shrink-0 border-r border-gray-200 dark:border-slate-800 overflow-y-auto">
            <div className="py-6 sm:pr-4 lg:pr-6">
              <Sidebar />
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
