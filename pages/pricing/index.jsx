import { MainLayout } from "../../components/layouts/MainLayout";

const PricingPage = () => {
  return (
    <>
      <h1 className="title">Pricing Page</h1>
    </>
  );
};

PricingPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default PricingPage;
