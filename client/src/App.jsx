import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import AboutPage from "./pages/AboutPage";
import CommentPage from "./pages/CommentPage";
import ProjectPage from "./pages/ProjectPage";
import AppLayout from "./components/AppLayout";
import SignInPage from "./pages/SignInPage";
import SignOutPage from "./pages/SignOutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-out" element={<SignOutPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/comment" element={<CommentPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
