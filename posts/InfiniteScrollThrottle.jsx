import DemoCont from "components/DemoCont";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import * as Avatar from "@radix-ui/react-avatar";
import { StyledAvatar, StyledFallback } from "./UseMemoDemo/ReviewCard";

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
        </Wrapper>
      </DemoCont>
    </>
  );
};

export default InfiniteScrollThrottle;

const Wrapper = styled.div`
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  height: 500px;
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
  width: 400px;
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

const UserAvatar = ({ src, letter }) => {
  return (
    <StyledAvatar>
      <Avatar.Image src={src} />
      <StyledFallback>{letter}</StyledFallback>
    </StyledAvatar>
  );
};
