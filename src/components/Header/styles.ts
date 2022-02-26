import styled from "styled-components";

export const PageHeader = styled.header`
  background: ${(props) => props.theme.main.primary};
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.main.secondaryText};
  padding: 1.25rem;
`;
