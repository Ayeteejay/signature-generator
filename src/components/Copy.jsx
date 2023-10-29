import styled from "styled-components";
import { useState } from "react";
import { SecondaryButton } from "./Buttons";

const Container = styled.div`
  margin: 1rem 0 1.5rem 0;
  display: inline-block;
  min-width: 175px;
`;

export default function Clipboard({ data }) {
  const [statusMessage, setStatusMessage] = useState(data.default_text);
  const copyFunction = () => {
    const selectionElement = document.getElementById(data.selection);
    const range = document.createRange();
    range.selectNode(selectionElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    try {
      const successful = document.execCommand("copy");
      const msg = successful ? "successful" : "unsuccessful";
      console.log("Sweet! Copy command was " + msg);
    } catch (err) {
      console.error("Bogus! Unable to copy", err);
    }
    window.getSelection().removeAllRanges();
    setStatusMessage(data.copied_text);
    setTimeout(() => {
      setStatusMessage(data.default_text);
    }, 1500);
  };
  return (
    <Container>
      <SecondaryButton data={{ title: statusMessage, action: copyFunction }} />
    </Container>
  );
}
