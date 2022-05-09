import DemoCont from "components/DemoCont";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import * as Avatar from "@radix-ui/react-avatar";
import { StyledAvatar, StyledFallback } from "./UseMemoDemo/ReviewCard";
import { keyframes } from "styled-components";
import Codeblock from "components/Codeblock";
import InfoCard from "components/InfoCard";

const throttle = (fn, duration = 500) => {
  let id;
  return function (...args) {
    if (id) {
      // if throttled function is called within duration,
      // do nothing
      return;
    }
    fn(...args);
    id = setTimeout(() => {
      id = null; // release "lock"
    }, duration);
  };
};

const InfiniteScrollThrottle = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    const res = await fetch(
      "https://random-data-api.com/api/users/random_user?size=50"
    );
    const data = await res.json();
    setUsers((users) => [...users, ...data]);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  const ref = useRef(null);
  const hello = useCallback(
    (e) => {
      const portionScrolled =
        e.target.scrollTop / (e.target.scrollHeight - e.target.offsetHeight);
      if (portionScrolled > 0.8) {
        fetchUsers();
      }
    },
    [fetchUsers]
  );

  useEffect(() => {
    const scrollCont = ref.current;
    scrollCont.addEventListener("scroll", throttle(hello));

    return () => {
      scrollCont.removeEventListener("scroll", throttle(hello));
    };
  }, [ref, hello]);

  return (
    <>
      <DemoCont>
        <Wrapper ref={ref}>
          {users.length > 0 ? (
            <>
              <UsersWrapper>
                {users.map((user, index) => (
                  <User key={user.id}>
                    <UserAvatar
                      src={user.avatar}
                      letter={user.first_name[0].toUpperCase()}
                    />
                    {user.first_name}
                  </User>
                ))}
              </UsersWrapper>
              <FadedBar />
            </>
          ) : (
            <UsersWrapper>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <FadedBar />
            </UsersWrapper>
          )}
        </Wrapper>
      </DemoCont>
      <InfoCard>
        <p>
          The throttle strategy minimises the number of calls made within a
          certain time interval.
        </p>
        <p>
          Unlike debouncing which calls the function when the event{" "}
          <strong>hasn&apos;t</strong> been carried out for a while, throttling
          calls the function <strong>while</strong> the event is being carried
          out.
        </p>
      </InfoCard>
      <Codeblock codeFiles={codeSnippet} />
    </>
  );
};

export default InfiniteScrollThrottle;

const Wrapper = styled.div`
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  height: 500px;
  width: 400px;

  // Scrollbar
  &::-webkit-scrollbar {
    width: 6px;
    height: 8px;
    background-color: #191c20;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3a4249;
    border-radius: 5px;
  }
  scrollbar-color: #3a4249 #191c20;
  scrollbar-width: thin;
`;

const UsersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #202326;
  padding: 20px;
  border-radius: 15px;
  width: 300px;
`;

const FadedBar = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  height: 100px;
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), #181819);
`;

const loadSkeleton = keyframes`
  0% {
    background-color: #283036;
  }
  100% {
    background-color: #181819;
  }
`;

const Skeleton = styled.div`
  animation: ${loadSkeleton} 1s linear infinite alternate;
  width: 300px;
  height: 70px;
  border-radius: 15px;
`;

const SkeletonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const UserAvatar = ({ src, letter }) => {
  return (
    <StyledAvatar>
      <Avatar.Image src={src} />
      <StyledFallback>{letter}</StyledFallback>
    </StyledAvatar>
  );
};

const codeSnippet = [
  {
    name: "InfiniteScroll",
    lang: "jsx",
    code: `const throttle = (fn, delay = 500) => {
  let id;
  return function (...args) {
    if (id) return; // exit if timer exists
    fn(...args);
    id = setTimeout(() => {
      id = null; // release lock
    }, delay);
  };
};

const InfiniteScroll = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    const res = await fetch(
      "https://random-data-api.com/api/users/random_user?size=50"
    );
    const data = await res.json();
    setUsers((users) => [...users, ...data]);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  const ref = useRef(null);
  const hello = useCallback(
    (e) => {
      const portionScrolled =
        e.target.scrollTop / (e.target.scrollHeight - e.target.offsetHeight);
      if (portionScrolled > 0.8) {
        fetchUsers();
      }
    },
    [fetchUsers]
  );

  useEffect(() => {
    const scrollCont = ref.current;
    scrollCont.addEventListener("scroll", throttle(hello));

    return () => {
      scrollCont.removeEventListener("scroll", throttle(hello));
    };
  }, [ref, hello]);

  return (
    <Wrapper ref={ref}>
      {users.length > 0 ? (
        <UsersWrapper>
          {users.map((user, index) => (
            <User key={user.id}>
              <UserAvatar
                src={user.avatar}
                letter={user.first_name[0].toUpperCase()}
              />
              {user.first_name}
            </User>
          ))}
        </UsersWrapper>
      ) : (
        <SkeletonUsers/> 
      )}
    </Wrapper>
  );
};`,
  },
];
