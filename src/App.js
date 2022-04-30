import Menu from "./pages/RecursiveMenu/Menu";
import { Layout } from "./components/styles/Styles";
import UseEffectExample from "./pages/UseEffectIntro";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import UseEffectIntro from "./pages/UseEffectIntro";
import PageLayout from "./components/PageLayout";
import UseStateIntro from "./pages/UseStateIntro";
import ConditionalRendering from "./pages/ConditionalRendering";
import LoadingSkeleton from "./pages/FetchWithSkeleton";
import PassingState from "./pages/PassingState/main";
import RecursiveMenu from "./pages/RecursiveMenu/main";
import TypescriptDemo from "./pages/TypescriptDemo";
import SearchDebounce from "./pages/SearchDebounce";
import SearchFilter from "./pages/SearchFilter";
import TodoList from "./pages/TodoList";
import PokemonRedux from "./pages/PokemonRedux/main";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import UseInputDemo from "./pages/UseInputDemo";
import StyledComponents from "./pages/StyledComponents";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import ListRendering from "./pages/ListRendering";
import MusicPlayer from "./pages/MusicPlayer";
import CountdownTimer from "./pages/PomdoroTimer";
import UseMemoDemo from "./pages/UseMemoDemo/useMemoDemo";
import ManagingArrayState from "./pages/ManagingArrayState";
import ManagingObjectState from "./pages/ManagingObjectState";
import ManagingBooleanState from "./pages/ManagingBooleanState";
import ManagingIntervalWithUseRef from "./pages/ManagingIntervalWithUseRef";

function App() {
  const location = useLocation();

  return (
    <>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <ScrollToTop>
            <Routes location={location} key={location.key}>
              <Route path="/" element={<Home />} />
              <Route
                path="/use-effect"
                element={
                  <PageLayout children={<UseEffectIntro />} title="useEffect" />
                }
              />
              <Route
                path="/recursive-menu"
                element={
                  <PageLayout
                    children={<RecursiveMenu />}
                    title="Recursive Menu"
                  />
                }
              />
              <Route
                path="/use-state"
                element={
                  <PageLayout children={<UseStateIntro />} title="useState" />
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
                path="/fetch-with-loading-state"
                element={
                  <PageLayout
                    children={<LoadingSkeleton />}
                    title="Fetch with Loading State"
                  />
                }
              />
              <Route
                path="/passing-state"
                element={
                  <PageLayout
                    children={<PassingState />}
                    title="Passing State"
                  />
                }
              />
              <Route
                path="/typescript-imdb"
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
                  <PageLayout
                    children={<SearchFilter />}
                    title="Search Filter"
                  />
                }
              />
              <Route
                path="/todo-list"
                element={
                  <PageLayout children={<TodoList />} title="Todo List" />
                }
              />
              <Route
                path="/pokemon-redux"
                element={
                  <PageLayout
                    children={<PokemonRedux />}
                    title="Pokemon Redux"
                  />
                }
              />
              <Route
                path="/use-input"
                element={
                  <PageLayout children={<UseInputDemo />} title="useInput" />
                }
              />
              <Route
                path="/styled-components"
                element={
                  <PageLayout
                    children={<StyledComponents />}
                    title="Styled Components"
                  />
                }
              />
              <Route
                path="/list-rendering"
                element={
                  <PageLayout
                    children={<ListRendering />}
                    title="List Rendering"
                  />
                }
              />
              <Route
                path="/music-player"
                element={
                  <PageLayout children={<MusicPlayer />} title="Music Player" />
                }
              />
              <Route
                path="/countdown-timer"
                element={
                  <PageLayout
                    children={<CountdownTimer />}
                    title="Countdown Timer"
                  />
                }
              />
              <Route
                path="/use-memo"
                element={
                  <PageLayout children={<UseMemoDemo />} title="useMemo" />
                }
              />
              <Route
                path="/managing-array-state"
                element={
                  <PageLayout
                    children={<ManagingArrayState />}
                    title="Managing Array State"
                  />
                }
              />
              <Route
                path="/managing-object-state"
                element={
                  <PageLayout
                    children={<ManagingObjectState />}
                    title="Managing Object State"
                  />
                }
              />
              <Route
                path="/managing-boolean-state"
                element={
                  <PageLayout
                    children={<ManagingBooleanState />}
                    title="Managing Boolean State"
                  />
                }
              />
              <Route
                path="/managing-interval-with-use-ref"
                element={
                  <PageLayout
                    children={<ManagingIntervalWithUseRef />}
                    title="Managing Interval with useRef"
                  />
                }
              />
            </Routes>
          </ScrollToTop>
        </AnimatePresence>
      </Layout>
      <Footer />
    </>
  );
}
export default App;

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

const Footer = styled.footer`
  margin-top: 50px;
  /* height: 100px;
  width: 100%;
  border-top: 1px solid #2c303a; */
`;
