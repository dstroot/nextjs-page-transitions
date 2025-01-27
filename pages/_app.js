import React from "react";
import App from "next/app";
import "../styles/global.css";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    // <Component/> returns the component it self
    // pageProps returns the props you use to in that component. It can be any data
    // router.route returns the route your component lives on. So in our case it will be '/' or '/products/[id]'
    // exitBeforeEnter: AnimatePresence will only render one component at a time. The exiting component will finished its exit animation before the entering component is rendered
    return <Component {...pageProps} key={router.route} />;
  }
}

export default MyApp;
