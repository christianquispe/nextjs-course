import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1 className="title">
        Contact
        <Link href="/">
          <a>Next.js!</a>
        </Link>
      </h1>
    </MainLayout>
  );
}
