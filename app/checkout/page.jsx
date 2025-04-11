"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import PageBanner from "../ui/components/common/PageBanner";
import { useInView } from "react-intersection-observer";
import { checkoutPaymentData } from "../data/data";
import clsx from "clsx";
import { useOrderContext } from "../ui/contexts/order/OrderContext";
import { useCartContext } from "../ui/contexts/cart/CartContext";
import MessageBox from "../ui/components/common/MessageBox";

export default function CheckOut() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    postCode: "",
    email: "",
    phone: "",
    additionalNotes: "",
    paymentMethod: "Cash On Delivery",
  });
  const [openIndex, setOpenIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [returningCustomerRef, returningCustomerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [billingDetailsRef, billingDetailsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { submitOrder } = useOrderContext();
  const { cartState, totalPrice, finalPrice } = useCartContext();
  const { checkoutPaymentItems } = checkoutPaymentData;

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setSelectedIndex(index);
    setFormData((prev) => ({
      ...prev,
      paymentMethod: checkoutPaymentItems[index].title,
    }));
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    if (cartState.cartItems.length === 0) {
      setShowErrorMessage(true);
      return;
    }
    submitOrder(formData);
    setShowSuccessMessage(true);
  };
  return (
    <section>
      <PageBanner
        title="checkout"
        subtitles={[
          { page: "home", link: "/" },
          { page: "checkout", link: "/checkout" },
        ]}
      />

      <div
        ref={returningCustomerRef}
        className={clsx(
          "px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto w-full ",
          returningCustomerInView ? "animate-fadeInUp opacity-100" : "opacity-0"
        )}
      >
        <div className="py-20 w-full px-5">
          <div className="bg-[#f7f1e1] px-8 py-4 rounded-lg">
            <h3 className="text-lg">
              <b>Returning customer? </b>
              <Link href="#">Click here</Link>
            </h3>
          </div>
        </div>
      </div>

      <div
        ref={billingDetailsRef}
        className={clsx(
          "w-full px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto",
          billingDetailsInView ? "animate-fadeInUp opacity-100" : "opacity-0"
        )}
      >
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 xl:grid-cols-3 gap-2"
        >
          {/* فرم سمت چپ */}
          <div className="xl:col-span-2 bg-white p-8 rounded-lg order-1 xl:order-1">
            <h3 className="text-2xl font-bold mb-6">Billing Details</h3>
            <div className="font-hanken">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold">First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="First Name"
                    className="w-full mt-5 p-5 border-1 border-gray-300 rounded-lg focus:border-[var(--primary-color)] focus:ring focus:ring-red-200 focus:outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Last Name"
                    className="w-full mt-5 p-5  border-1 border-gray-300 rounded-lg focus:border-[var(--primary-color)] focus:ring focus:ring-red-200 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>
              <div className="mt-7">
                <label className="block text-gray-700 font-semibold">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  placeholder="Your Company Name"
                  className="w-full mt-5 p-5  border-1 border-gray-300 rounded-lg focus:border-[var(--primary-color)] focus:ring focus:ring-red-200 focus:outline-none transition-all duration-300"
                />
              </div>
              <div className="mt-7">
                <label className="block text-gray-700 font-semibold">
                  Address*
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Street Address"
                  className="w-full mt-5 p-5  border-1 border-gray-300 rounded-lg focus:border-[var(--primary-color)] focus:ring focus:ring-red-200 focus:outline-none transition-all duration-300"
                />
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleChange}
                  placeholder="Apartment, suite, unit etc. (optional)"
                  className="w-full mt-5 p-5  border-1 border-gray-300 rounded-lg focus:border-[var(--primary-color)] focus:ring focus:ring-red-200 focus:outline-none transition-all duration-300"
                />
              </div>
              <div className="mt-7">
                <label className="block text-gray-700 font-semibold">
                  Town / City*
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="Town / City"
                  className="w-full mt-5 p-5  border-1 border-gray-300 rounded-lg focus:border-[var(--primary-color)] focus:ring focus:ring-red-200 focus:outline-none transition-all duration-300"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mt-7">
                  <label className="block font-semibold">Country*</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    placeholder="Country"
                    className="w-full mt-5 p-5  border-1 border-gray-300 rounded-lg focus:border-[var(--primary-color)] focus:ring focus:ring-red-200 focus:outline-none transition-all duration-300"
                  />
                </div>
                <div className="mt-7">
                  <label className="block text-gray-700 font-semibold">
                    Postcode / Zip*
                  </label>
                  <input
                    type="text"
                    name="postCode"
                    value={formData.postCode}
                    onChange={handleChange}
                    required
                    placeholder="Postcode / Zip"
                    className="w-full mt-5 p-5  border-1 border-gray-300 rounded-lg focus:border-[var(--primary-color)] focus:ring focus:ring-red-200 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="mt-7">
                <label className="block text-gray-700 font-semibold">
                  Contact Info*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="w-full mt-5 p-5  border-1 border-gray-300 rounded-lg focus:border-[var(--primary-color)] focus:ring focus:ring-red-200 focus:outline-none transition-all duration-300"
                />
              </div>
              <div className="mt-2">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your Phone"
                  className="w-full mt-5 p-5  border-1 border-gray-300 rounded-lg focus:border-[var(--primary-color)] focus:ring focus:ring-red-200 focus:outline-none transition-all duration-300"
                />
              </div>

              <div className="mt-7">
                <label className="block text-gray-700 font-semibold">
                  Order Notes (optional)
                </label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  className="resize-none w-full mt-5 p-5  border-1 border-gray-300 rounded-lg focus:border-[var(--primary-color)] focus:ring focus:ring-red-200 focus:outline-none transition-all duration-300"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>

          {/* کارت‌های سمت راست */}
          <div className="flex flex-col gap-6 py-8 order-2 xl:order-2">
            <div>
              <h3 className="text-2xl font-bold">Your Order</h3>
              <div className="bg-[#f7f1e1] p-8 rounded-xl mt-4 font-hanken">
                <div className="flex flex-col gap-4 px-2 py-3">
                  <div className="flex justify-between border-b-1 border-gray-300 pb-4">
                    <span className="capitalize">Cart Subtotal</span>
                    <span>${totalPrice}</span>
                  </div>
                  <div className="flex justify-between border-b-1 border-gray-300 pb-4">
                    <span className="capitalize">Shipping Fee</span>
                    <span>${cartState.shippingFee}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Order Total</span>
                    <span>${finalPrice}</span>
                  </div>
                  {/* <div className="pt-3">
                    <Link href="#" className="font-semibold">
                      Have A Coupon ?
                    </Link>
                  </div> */}
                  <div>
                    <button
                      type="submit"
                      className="cursor-pointer inline-block px-11 py-4 mt-4 bg-[var(--primary-color)] text-white font-semibold text-xl rounded-lg hover:bg-[var(--secondary-color)] transition duration-300"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="bg-[#f7f1e1] p-8 rounded-xl">
                <div className="px-2 py-3">
                  <h3 className="text-2xl font-bold mb-4">Payment Method</h3>
                  <div className="max-w-md mx-auto mt-10 border border-gray-300 font-hanken">
                    <ul className="">
                      {checkoutPaymentItems.map((item, index) => (
                        <li
                          key={index}
                          className={`py-3 ${
                            index < 2 ? "border-b border-gray-300" : ""
                          }`}
                          onClick={() => handleClick(index)}
                        >
                          <div className="flex items-center px-4">
                            <input
                              type="radio"
                              className="mr-2"
                              checked={selectedIndex === index}
                              onChange={() => handleClick(index)}
                            />
                            <button
                              onClick={() => handleClick(index)}
                              className="w-full text-left py-2 focus:outline-none font-semibold cursor-pointer"
                            >
                              {item.title}
                            </button>
                          </div>
                          <div
                            className={`overflow-hidden transition-max-height duration-600 ease-in-out ${
                              openIndex === index ? "max-h-40" : "max-h-0"
                            }`}
                          >
                            <div className="px-6 pb-3 text-[var(--text-color)] leading-loose">
                              {item.content}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-4 leading-loose text-[var(--text-color)] font-hanken">
                    We will utilize your personal data to process your order,
                    enhance your experience on our website, and for other
                    purposes outlined in our privacy policy.
                  </p>
                  <div>
                    <button
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          paymentMethod: checkoutPaymentItems[index].title,
                        }));
                      }}
                      className="font-hanken inline-block px-11 py-4 mt-4 bg-[var(--primary-color)] text-white font-semibold text-xl rounded-lg hover:bg-[var(--secondary-color)] transition duration-300"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        {showSuccessMessage && (
          <MessageBox
            text={"Order Placed Successfully"}
            type={"success"}
            onClose={() => {
              setShowSuccessMessage(false);
            }}
          />
        )}
        {showErrorMessage && (
          <MessageBox
            text={"Your Cart is Empty! You can not place an order."}
            type={"danger"}
            onClose={() => {
              setShowSuccessMessage(false);
            }}
          />
        )}
      </div>
    </section>
  );
}
