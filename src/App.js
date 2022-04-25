import Menu from "./pages/RecursiveMenu/Menu";
import { Layout } from "./components/styles/Styles";
import UseEffectExample from "./pages/UseEffectIntro";
import { Routes, Route, useLocation } from "react-router-dom";
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
import TodoList from "./pages/TodoList";
import PokemonRedux from "./pages/PokemonRedux/main";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import UseInputDemo from "./pages/UseInputDemo";

function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
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
              <PageLayout
                children={<TypescriptDemo />}
                title="Typescript IMDB"
              />
            }
          />
          <Route
            path="/search-debounce"
            element={
              <PageLayout
                children={<SearchDebounce />}
                title="Search Debounce"
              />
            }
          />
          <Route
            path="/search-filter"
            element={
              <PageLayout children={<SearchFilter />} title="Search Filter" />
            }
          />
          <Route
            path="/todo-list"
            element={<PageLayout children={<TodoList />} title="Todo List" />}
          />
          <Route
            path="/pokemon-redux"
            element={
              <PageLayout children={<PokemonRedux />} title="Pokemon Redux" />
            }
          />
          <Route
            path="/useInput"
            element={
              <PageLayout children={<UseInputDemo />} title="useInput" />
            }
          />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
export default App;
