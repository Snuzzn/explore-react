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
    "list-rendering": {
      component: <ListRendering />,
    },
    "handling-events": {
      component: <HandlingEvents />,
    },
    "use-state-hook": {
      component: <UseStateIntro />,
      title: "useState hook",
    },
    "managing-boolean-state": {
      component: <ManagingBooleanState />,
    },
    "managing-array-state": {
      component: <ManagingArrayState />,
    },
    "managing-object-state": {
      component: <ManagingObjectState />,
    },
    "passing-props": {
      component: <PassingProps />,
    },
    "sharing-state": {
      component: <PassingState />,
    },
    "use-effect-hook": {
      component: <UseEffectIntro />,
      title: "useEffect hook",
    },
    "conditional-rendering": {
      component: <ConditionalRendering />,
    },
    "styled-components": {
      component: <StyledComponents />,
    },
  },
  intermediate: {
    "fetch-with-loading-state": {
      component: <LoadingSkeleton />,
    },
    "use-input-hook": {
      component: <UseInputDemo />,
      title: "useInput hook",
    },
    "use-persistant-state-hook": {
      component: <UsePersistentStateDemo />,
      title: "usePersistentState Hook",
    },
    "use-memo-hook": {
      component: <UseMemoDemo />,
      title: "useMemo hook",
    },
    "memoising-components": {
      component: <MemoisingComponents />,
    },
    "managing-interval-with-use-ref": {
      title: "Managing intervals with useRef",
      component: <ManagingIntervalWithUseRef />,
    },
    "storing-previous-state-with-use-ref": {
      title: "Storing previous state with useRef",
      component: <StorePreviousStateUseRef />,
    },
    "recursive-menu": {
      component: <RecursiveMenu />,
    },
    "modal-dialog": {
      component: <ModalDemo />,
    },
    "search-debounce": {
      component: <SearchDebounce />,
    },
    "infinite-scroll-throttle": {
      component: <InfiniteScrollThrottle />,
    },
    "search-filter": {
      component: <SearchFilter />,
    },
    // accordion: {
    //   component: <Accordion />,
    // },
    "unit-and-integration-testing": {
      title: "Unit and integration testing",
      component: <Crowdfunder />,
    },
    "end-to-end-testing": {
      title: "End-to-end testing",
      component: <CypressDemo />,
    },
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
    "music-player": {
      component: <MusicPlayer />,
    },
    "countdown-timer": {
      component: <CountdownTimer />,
    },
    "redux-pokemon-battle": {
      title: "Redux Pokemon battle",
      component: <PokemonRedux />,
    },
    "photo-carousel": {
      component: <PhotoCarousel />,
    },
    "Whack-a-mole": {
      component: <WhackAMole />,
    },
    "tic-tac-toe": {
      component: <TicTacToe />,
    },
    // Wordle: {
    //   component: <Wordle />,
    // },
  },
};
