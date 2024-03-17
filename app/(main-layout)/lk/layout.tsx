import Welcome from "@/components/welcome/Welcome";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Welcome children={children} />;
}
