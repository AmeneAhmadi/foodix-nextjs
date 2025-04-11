"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ProductContextProvider } from "../../contexts/product/ProductContext";
import { CartContextProvider } from "../../contexts/cart/CartContext";
import { OrderContextProvider } from "../../contexts/order/OrderContext";
import { ContactContextProvider } from "../../contexts/contact/ContactContext";
import { ReservationContextProvider } from "../../contexts/reservation/ReservationContext";
import Header from "./Header";
import Footer from "./Footer";
import CartModal from "../cart/CartModal";
import Loader from "./Loader/page";
import BackToTop from "./BackToTop";

export default function LayoutWrapper({ children }) {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  // Pages that should have a black header
  const blackHeaderPages = [
    "/",
    "/home",
    "/beef",
    "/burger",
    "/pizza",
    "/sushi",
  ];
  const headerTheme = blackHeaderPages.includes(pathname) ? "black" : "white";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <OrderContextProvider>
            <ContactContextProvider>
              <ReservationContextProvider>
                {isLoading ? (
                  <Loader />
                ) : (
                  <div className="min-h-screen flex flex-col">
                    <Header
                      onCartOpen={() => setIsCartModalOpen(true)}
                      headerTheme={headerTheme} //dynamic header theme
                    />
                    <main className="flex-1">{children}</main>
                    <Footer />
                    <BackToTop />
                    {/* Cart Modal */}
                    <div className="relative z-[9999]">
                      <CartModal
                        isOpen={isCartModalOpen}
                        onClose={() => setIsCartModalOpen(false)}
                      />
                    </div>
                  </div>
                )}
              </ReservationContextProvider>
            </ContactContextProvider>
          </OrderContextProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}
