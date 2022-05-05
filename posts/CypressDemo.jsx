import Codeblock from "components/Codeblock";
import DemoCont from "components/DemoCont";
import InfoCard from "components/InfoCard";
import { Hyperlink, openInNewTab } from "components/styles/Styles";
import React, { useState } from "react";
import styled from "styled-components";
import { loadSkeleton } from "./FetchWithSkeleton";

const CypressDemo = () => {
  // const [hasVideoLoaded, setHasVideoLoaded] = useState(false);

  return (
    <>
      <DemoCont>
        <video src="/cypress-demo.mp4" controls>
          <SkeletonVideo />
        </video>
      </DemoCont>
      <InfoCard>
        End-to-end testing involves testing an application&apos;s user flow from
        start to finish.
        <Hyperlink href="https://www.cypress.io/" {...openInNewTab}>
          Cypress
        </Hyperlink>
        is a popular framework for automated UI testing.
      </InfoCard>
      <Codeblock codeFiles={codeFiles} />
    </>
  );
};

export default CypressDemo;

const SkeletonVideo = styled.div`
  height: 500px;
  width: 600px;
  animation: ${loadSkeleton} 1s linear infinite alternate;
`;

const codeFiles = [
  {
    name: "app.spec",
    lang: "js",
    code: `describe("Navigation", () => {
  it("should navigate to a page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="/fundamentals/use-state-hook"]').click();

    // // The new url should include "/about"
    cy.url().should("include", "/fundamentals/use-state-hook");

    cy.get('a[href*="/"]').click();
    cy.url().should("include", "/");

    // // The new page should contain an h1 with "About page"
    // cy.get('h1').contains('About Page')
  });

  it("should reset demo after going back to the page", () => {
    cy.visit("http://localhost:3000/fundamentals/use-state-hook");

    cy.get("[data-test-id='increase']").click();
    cy.get("[data-test-id='increase']").click();
    cy.get("[data-test-id='decrease']").click();

    cy.get("[data-test-id='count']").contains("1").should("be.visible");

    cy.get('a[href*="/"]').click();
    cy.url().should("include", "/");

    cy.get('a[href*="/fundamentals/use-state-hook"]').click();
    cy.get("[data-test-id='count']").contains("0").should("be.visible");
  });
});
`,
  },
];
