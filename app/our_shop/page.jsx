import PageBanner from "../ui/components/common/PageBanner";
import ProductOurShop from "../ui/components/ourShop/ProductOurShop";

export default function OurShop() {
  return (
    <div>
      <PageBanner
        title="our products"
        subtitles={[
          { page: "home", link: "/" },
          { page: "products", link: "/our_shop" },
        ]}
      />
      <ProductOurShop />
    </div>
  );
}
