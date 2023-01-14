import { Fragment } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import "../css/App.css";

export const loader = async ({}) => {
  return null;
};

export default function Root() {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </Fragment>
  );
}
