"use client";

import React from "react";

function ErrorBoundary() {
  return (
    <div className="grid min-h-[100dvh] place-items-center">
      <h2 className="px-3 text-center text-2xl text-foreground sm:text-4xl">
        Error | Something went wrong.
      </h2>
    </div>
  );
}

export default ErrorBoundary;
