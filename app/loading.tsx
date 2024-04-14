import Loader from "@/source/shared/assets/svg-loaders/2.svg";

export default function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        flex: "1 1 100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Loader />
    </div>
  );
}
