import ManagingArrayState from "../posts/ManagingArrayState";
import ManagingBooleanState from "../posts/ManagingBooleanState";
import ManagingObjectState from "../posts/ManagingObjectState";
import UseEffectIntro from "../posts/UseEffectIntro";
import UseStateIntro from "../posts/UseStateIntro";
import ListRendering from "../posts/ListRendering";
import PassingState from "../posts/PassingState/main";
import ConditionalRendering from "../posts/ConditionalRendering";
import StyledComponents from "../posts/StyledComponents";
import LoadingSkeleton from "../posts/FetchWithSkeleton";
import UseInputDemo from "../posts/UseInputDemo";
import UseMemoDemo from "../posts/UseMemoDemo/UseMemoDemo";
import ManagingIntervalWithUseRef from "../posts/ManagingIntervalWithUseRef";
import StorePreviousStateUseRef from "../posts/StorePreviousStateUseRef";
import RecursiveMenu from "../posts/RecursiveMenu/main";
import SearchDebounce from "../posts/SearchDebounce";
import SearchFilter from "../posts/SearchFilter";
import Crowdfunder from "../posts/Crowdfunder/Crowdfunder";
import TypescriptDemo from "../posts/TypescriptDemo.tsx";
import TodoList from "../posts/TodoList";
import MusicPlayer from "../posts/MusicPlayer";
import CountdownTimer from "../posts/PomdoroTimer";
import PokemonRedux from "../posts/PokemonRedux/main";
import HandlingEvents from "../posts/HandlingEvents";
import CypressDemo from "posts/CypressDemo";
import WhackAMole from "posts/WhackAMole";
import ModalDemo from "posts/ModalDemo";
import KanbanBoard from "posts/KanbanBoard";
import PhotoGallery from "posts/PhotoCarousel";
import PhotoCarousel from "posts/PhotoCarousel";
import TicTacToe from "posts/TicTacToe";
import PassingProps from "posts/PassingProps";
import Wordle from "posts/Wordle";
import Accordion from "posts/Accordion";
import InfiniteScrollThrottle from "posts/InfiniteScrollThrottle";
import UsePersistentStateDemo from "posts/UsePersistentStateDemo";
import MemoisingComponents from "posts/MemoisingComponents";

// Each post must be in sentence case.
// If you want a custom casing, include a title attribute in the object

export const postsData = {
  fundamentals: {
    "List rendering": {
      component: <ListRendering />,
    },
    "Handling events": {
      component: <HandlingEvents />,
    },
    "Use state hook": {
      component: <UseStateIntro />,
      title: "useState hook",
    },
    // "Managing boolean state": {
    //   component: <ManagingBooleanState />,
    // },
    // "Managing array state": {
    //   component: <ManagingArrayState />,
    // },
    // "Managing object state": {
    //   component: <ManagingObjectState />,
    // },
    // "Passing props": {
    //   component: <PassingProps />,
    // },
    // "Sharing state": {
    //   component: <PassingState />,
    // },
    // "Use effect hook": {
    //   component: <UseEffectIntro />,
    //   title: "useEffect hook",
    // },
    // "Conditional rendering": {
    //   component: <ConditionalRendering />,
    // },
    // "Styled components": {
    //   component: <StyledComponents />,
    // },
  },
  intermediate: {
    // "Fetch with loading state": {
    //   component: <LoadingSkeleton />,
    // },
    // "Use input hook": {
    //   component: <UseInputDemo />,
    //   title: "useInput hook",
    // },
    // "Use persistant state hook": {
    //   component: <UsePersistentStateDemo />,
    //   title: "usePersistentState Hook",
    // },
    // "Use memo hook": {
    //   component: <UseMemoDemo />,
    //   title: "useMemo hook",
    // },
    // "Memoising components": {
    //   component: <MemoisingComponents />,
    // },
    // "Managing interval with use ref": {
    //   title: "Managing intervals with useRef",
    //   component: <ManagingIntervalWithUseRef />,
    // },
    // "Storing previous state with use ref": {
    //   title: "Storing previous state with useRef",
    //   component: <StorePreviousStateUseRef />,
    // },
    // "Recursive menu": {
    //   component: <RecursiveMenu />,
    // },
    // "Modal dialog": {
    //   component: <ModalDemo />,
    // },
    // "Search debounce": {
    //   component: <SearchDebounce />,
    // },
    // "Infinite scroll throttle": {
    //   component: <InfiniteScrollThrottle />,
    // },
    // "Search filter": {
    //   component: <SearchFilter />,
    // },
    // Accordion: {
    //   component: <Accordion />,
    // },
    // "Unit and integration testing": {
    //   title: "Unit and integration testing",
    //   component: <Crowdfunder />,
    // },
    // "End to end testing": {
    //   title: "End-to-end testing",
    //   component: <CypressDemo />,
    // },
  },
  "mini-projects": {
    "Typescript imdb": {
      component: <TypescriptDemo />,
      title: "Typescript IMDB",
    },
    "Todo list": {
      component: <TodoList />,
    },
    // "Kanban board": {
    //   component: <KanbanBoard />,
    // },
    // "Music player": {
    //   component: <MusicPlayer />,
    // },
    // "Countdown timer": {
    //   component: <CountdownTimer />,
    // },
    // "Redux pokemon battle": {
    //   title: "Redux Pokemon battle",
    //   component: <PokemonRedux />,
    // },
    // "Photo carousel": {
    //   component: <PhotoCarousel />,
    // },
    // "Whack a mole": {
    //   component: <WhackAMole />,
    // },
    // "Tic tac toe": {
    //   component: <TicTacToe />,
    // },
    // Wordle: {
    //   component: <Wordle />,
    // },
  },
};
