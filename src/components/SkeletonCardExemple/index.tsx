"use client";

import { SkeletonCard } from "./styles";

export function SkeletonCardExemple() {
  return (
    <SkeletonCard>
      <div className="skeleton">
        <div className="skeleton-img" />
        <div className="skeleton-btn" />
        <div className="skeleton-line-one" />
        <div className="skeleton-line-two" />
      </div>
    </SkeletonCard>
  );
}
