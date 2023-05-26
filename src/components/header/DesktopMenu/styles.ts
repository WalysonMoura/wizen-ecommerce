"use client";

import { styled } from "styled-components";

export const Container = styled.div`
width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;
export const Tracking = styled.div`
display: flex;
align-items: center;
gap: 2rem
`;

export const Account = styled.div`
 display: flex;
align-items: center;
gap: 2rem
div{
  strog{
    color:  ${({ theme }) => theme.colors.primary.lightBlue};
  }
}
`;

export const WizenPrimeLink = styled.a`
  display: flex;
  height: 100%;
  width: 100%;
  user-select: none;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 0.375rem;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(4, 2, 55, 1) 0%,
    rgba(5, 3, 63, 1) 0%,
    rgba(5, 4, 70, 1) 0%,
    rgba(9, 9, 121, 1) 22%,
    rgba(2, 178, 232, 1) 58%,
    rgba(1, 202, 248, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  padding: 1.5rem;
  text-decoration: none;
  outline: none;
  &:focus {
    box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.2);
  }
`;
