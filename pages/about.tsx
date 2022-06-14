import Link from "next/link";

import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

import { NextPageWithLayout } from "./_app";

const AboutPage: NextPageWithLayout = () => {
  return (
    <MainLayout>
      <h1 className="title">
        About
        <Link href="/">
          <a>Next.js!</a>
        </Link>
      </h1>
    </MainLayout>
  );
};

AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default AboutPage;
