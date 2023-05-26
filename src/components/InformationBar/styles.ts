import { styled } from "styled-components";

export const InformationBar = styled.div`
  height: 1.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.informationBar};
  color: ${({ theme }) => theme.colors.primary.white};
  padding: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

export const DiscountText = styled.span`
  font-weight: bold;
  font-style: italic;
  strong{
    color: ${({ theme }) => theme.colors.primary.darkBlue}
  }
`;
