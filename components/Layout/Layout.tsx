import React, { Fragment, ReactNode } from "react";

import Navbar from "../Navbar/Navbar";

type ChildrenProps = {
    children: ReactNode
}

const Layout: React.FC<ChildrenProps> = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
