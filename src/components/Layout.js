import Head from "next/head";
import Header from "./Header";
import Navbar from "./Navbar";
import Photo from "./Photo";

const Layout = (props) => {
  return(<div>
    <Head>
      <title>{props.title}</title>
      <link rel="stylesheet" href="css/global.css"/>
      <link rel="stylesheet" href="css/layout.css"/>
      <link rel="stylesheet" href="css/components.css"/>
      <link rel="stylesheet" href="css/sample-wallpaper.css"/>
    </Head>
    <Navbar/>
    <Header/>
    <Photo/>
  </div>);
}

export default Layout;