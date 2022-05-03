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

// Each post must be in sentence case.
// If you want a custom casing, include a title attribute in the object

export const postsData = {
  fundamentals: {
    "List rendering": {
      component: <ListRendering />,
    },
    "Use state hook": {
      component: <UseStateIntro />,
      title: "useState hook",
    },
    "Managing boolean state": {
      component: <ManagingBooleanState />,
    },
    "Managing array state": {
      component: <ManagingArrayState />,
    },
    "Managing object state": {
      component: <ManagingObjectState />,
    },
    "Passing state": {
      component: <PassingState />,
    },
    "Use effect hook": {
      component: <UseEffectIntro />,
      title: "useEffect hook",
    },
    "Conditional rendering": {
      component: <ConditionalRendering />,
    },
    "Styled components": {
      component: <StyledComponents />,
    },
  },
  intermediate: {
    "Fetch with loading state": {
      component: <LoadingSkeleton />,
    },
    "Use input hook": {
      component: <UseInputDemo />,
      title: "useInput hook",
    },
    "Use memo hook": {
      component: <UseMemoDemo />,
      title: "useMemo hook",
    },
    "Managing interval with use ref": {
      title: "Managing intervals with useRef",
      component: <ManagingIntervalWithUseRef />,
    },
    "Storing previous state with use ref": {
      title: "Storing previous state with useRef",
      component: <StorePreviousStateUseRef />,
    },
    "Recursive menu": {
      component: <RecursiveMenu />,
    },
    "Search debounce": {
      component: <SearchDebounce />,
    },
    "Search filter": {
      component: <SearchFilter />,
    },
    "React testing library": {
      component: <Crowdfunder />,
    },
  },
  "mini projects": {
    "Typescript imdb": {
      component: <TypescriptDemo />,
      title: "Typescript IMDB",
    },
    "Todo list": {
      component: <TodoList />,
    },
    "Music player": {
      component: <MusicPlayer />,
    },
    "Countdown timer": {
      component: <CountdownTimer />,
    },
    "Redux pokemon battle": {
      title: "Redux Pokemon battle",
      component: <PokemonRedux />,
    },
  },

  // {
  //   title: "Mini Projects",
  //   features: [
  //     "Typescript IMDB",
  //     "Todo List",
  //     "Pokemon Redux",
  //     "Music Player",
  //     "Countdown Timer",
  //   ],
  // },
};
