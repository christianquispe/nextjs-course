import { MainLayout } from "../../components/layouts/MainLayout";

import { NextPageWithLayout } from "../_app";

const PricingPage: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="title">Pricing Page</h1>
    </>
  );
};

PricingPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default PricingPage;
