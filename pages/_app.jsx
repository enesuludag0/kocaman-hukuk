import Layout from "@/layout/Layout";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        closeButton={false}
        pauseOnFocusLoss={false}
        theme="colored"
        toastClassName={({ type }) =>
          `flex items-center text-white text-sm sm:text-base font-medium rounded-sm max-sm:mt-3 max-sm:mx-4 px-4 py-2 ${
            type === "success" ? "bg-[#07BC0C]" : type === "error" ? "bg-[#E74D3C]" : ""
          }`
        }
      />
    </Layout>
  );
}
