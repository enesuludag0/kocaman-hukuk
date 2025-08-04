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
        toastClassName={() => "flex items-center bg-[#07BC0C] text-white font-medium rounded px-4 py-3"}
      />
    </Layout>
  );
}
