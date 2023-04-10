import * as React from "react";

import { Link, Route, Routes } from "react-router-dom";
const Header = React.lazy( () => import('header-ui/Module'))
const Footer = React.lazy( () => import('footer-ui/Module'))
const Content = React.lazy( () => import('content-ui/Module'))
export function App() {
  return (
    <React.Suspense fallback={null}>
      <h1>KK</h1>
      <Header/>
      <Content/>
      <Footer/>
      <Routes></Routes>
    </React.Suspense>
  );
}

export default App;
