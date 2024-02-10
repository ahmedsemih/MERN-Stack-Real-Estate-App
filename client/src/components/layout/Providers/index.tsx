import { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const Providers = ({ children }: { children: ReactNode }) => {
  const client = new ApolloClient({
    uri:
      import.meta.env.VITE_GRAPHQL_SERVER_URI ||
      "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
    credentials: 'include'
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <MotionConfig reducedMotion="user">
          {children}
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            toastClassName='bg-bgColor-soft border border-borderColor text-textColor'
            toastStyle={{ background: "var(--bg-soft)", color: "var(--text)" }}
          />
        </MotionConfig>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default Providers;
