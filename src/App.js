import Menu from "./pages/RecursiveMenu/Menu";
import { Layout } from "./components/styles/Styles";
import UseEffectExample from "./pages/UseEffectIntro";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UseEffectIntro from "./pages/UseEffectIntro";
import PageLayout from "./components/PageLayout";
import UseStateIntro from "./pages/UseStateIntro";
import ConditionalRendering from "./pages/ConditionalRendering";
import LoadingSkeleton from "./pages/LoadingSkeleton";
import PassingState from "./pages/PassingState/main";
import RecursiveMenu from "./pages/RecursiveMenu/main";
import TypescriptDemo from "./pages/TypescriptDemo";
import SearchDebounce from "./pages/SearchDebounce";
import SearchFilter from "./pages/SearchFilter";

function App() {
  return (
    <Layout>
      {/* <Menu items={entries} />
      <UseEffectExample /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/useEffect"
          element={
            <PageLayout children={<UseEffectIntro />} title="Use Effect" />
          }
        />
        <Route
          path="/menu"
          element={
            <PageLayout children={<RecursiveMenu />} title="Recursive Menu" />
          }
        />
        <Route
          path="/useState"
          element={
            <PageLayout children={<UseStateIntro />} title="Use State" />
          }
        />
        <Route
          path="/conditional-rendering"
          element={
            <PageLayout
              children={<ConditionalRendering />}
              title="Conditional Rendering"
            />
          }
        />
        <Route
          path="/loading-skeleton"
          element={
            <PageLayout
              children={<LoadingSkeleton />}
              title="Loading Skeleton"
            />
          }
        />
        <Route
          path="/passing-state"
          element={
            <PageLayout children={<PassingState />} title="Passing State" />
          }
        />
        <Route
          path="/typescript"
          element={
            <PageLayout children={<TypescriptDemo />} title="Typescript IMDB" />
          }
        />
        <Route
          path="/search-debounce"
          element={
            <PageLayout children={<SearchDebounce />} title="Search Debounce" />
          }
        />
        <Route
          path="/search-filter"
          element={
            <PageLayout children={<SearchFilter />} title="Search Filter" />
          }
        />
      </Routes>
    </Layout>
  );
}
export default App;
