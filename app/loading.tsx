import Image from "next/image";
import img from "../svg-loaders/2.svg";

export default function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        flex: "1 1 100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src={img} alt="222" />
    </div>
  );
}
