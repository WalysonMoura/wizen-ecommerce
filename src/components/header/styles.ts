"use client";

import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 40;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.header};
`;

