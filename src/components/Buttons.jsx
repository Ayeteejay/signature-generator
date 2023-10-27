import styled from "styled-components";
import { useState, useEffect } from "react";

const Secondary = styled.button`
  background: var(--bronze);
  color: var(--smoke);
  padding: 0.5rem 1rem;
  width: 100%;
  border: 1px solid var(--bronze);
  font-size: var(--font-medium);
  font-family: var(--rift);
  font-weight: bold;
  transition: all 300ms;
  cursor: pointer;
  &:hover {
    background: none;
    color: var(--bronze);
  }
`;

export function SecondaryButton({ data }) {
  return <Secondary onClick={data.action}>{data.title}</Secondary>;
}

const Primary = styled.button`
  cursor: pointer;
  background: none;
  border: 1px solid var(--bronze);
  border-radius: 50%;
  height: 125px;
  width: 125px;
  transform: rotate(-5deg) translate(25px, -9px);
  font-family: var(--rift);
  font-weight: bold;
  transition: all 300ms;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: var(--smoke);
    transition: all 300ms;
  }
  &:hover {
    transform: rotate(0deg) translate(25px, -9px);
    font-size: var(--font-medium);
    background: var(--bronze);
    span {
      font-size: 1.25rem;
      color: var(--ink);
    }
  }
`;

export function PrimaryButton({ data }) {
  const [titleFontSize, setTitleFontSize] = useState(null);
  useEffect(() => {
    resizeTitle(data.title);
  }, [data.title]);
  const resizeTitle = (title) => {
    if (title.length > 10) {
      setTitleFontSize("1.45rem");
    } else {
      setTitleFontSize("1.75rem");
    }
  };

  return (
    <Primary onClick={data.action} style={{ fontSize: titleFontSize }}>
      <span>{data.title}</span>
    </Primary>
  );
}
