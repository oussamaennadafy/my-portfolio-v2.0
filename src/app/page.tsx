import Link from "next/link";
import NavModal from "@/common/Modals/NavModal.tsx"
import Hero from "./home/components/Hero.tsx";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: SearchParamProps) {
  const isModalVisible = searchParams?.isModalVisible;

  return (
    <>
      <NavModal isModalVisible={isModalVisible} />
      <Hero />
    </>
  );
};