"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return <div>{error.message}</div>;
}
