import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Codeblock from "../../components/Codeblock";
import DemoCont from "../../components/DemoCont";
import { codeSnippets, testingCodeSnippets } from "./codeSnippets";
import Post from "./Post";
import { LayoutGroup } from "framer-motion";
import InfoCard from "../../components/InfoCard";
import WarningCard from "../../components/WarningCard";
import useSWR from "swr";
import {
  InlineCode,
  Hyperlink,
  openInNewTab,
} from "../../components/styles/Styles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Crowdfunder = () => {
  const { data, error } = useSWR("/api/crowdfunder", fetcher);

  return (
    <>
      <DemoCont>{data && <Post {...data} />}</DemoCont>

      <LayoutGroup id="codeblock1">
        <Codeblock codeFiles={codeSnippets} />
      </LayoutGroup>
      <InfoCard>
        Writing unit and integrations tests are important to catch bugs and
        increase confidence in the application.
      </InfoCard>
      <WarningCard>
        With React Testing Library, avoid including implementation details of
        the component e.g. state. Instead, test for changes in the UI.
      </WarningCard>
      <LayoutGroup id="codeblock2">
        <Codeblock codeFiles={testingCodeSnippets} />
      </LayoutGroup>
      <InfoCard>
        Notice in <InlineCode>Crowdfunder.test.js</InlineCode> that we mock the
        server using the
        <Hyperlink href="https://mswjs.io/" {...openInNewTab}>
          Mock Service Worker
        </Hyperlink>
        library. Using our actual API is not ideal as requests are slow, costly
        and can be unreliable since errors may not come from the frontend.
      </InfoCard>
    </>
  );
};
export default Crowdfunder;
