import { styled } from "styled-components";

export const SkeletonCard = styled.section`
  padding: 1rem /* 16px */;
  border-radius: 1rem /* 16px */;
  background-color: rgb(24 24 27 / 0.8);

  .skeleton-img,
  .skeleton-btn,
  .skeleton-line-one,
  .skeleton-line-two {
    border-radius: 0.5rem /* 8px */;
  }

  .skeleton-img {
    height: 3.5rem /* 56px */;
    background-color: rgb(63 63 70 / 1);
    
  }

  .skeleton-btn,
  .skeleton-line-one,
  .skeleton-line-two {
    margin-top: 0.75rem /* 12px */;
    height: 0.75rem /* 12px */;
  }

  .skeleton-btn {
    background-color: rgb(0 112 243 / 1);
    width: 25%;
  }

  .skeleton-line-one,
  .skeleton-line-two {
    background-color: rgb(63 63 70 / 1);
  }

  .skeleton-line-one {
    width: 91.666667%;
  }

  .skeleton-line-two {
    width: 66.666667%;
  }
`;
