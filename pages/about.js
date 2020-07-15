import Link from "next/link";
import Layout from "../components/Layout";

export default () => (
  <Layout title="About">
    <h1>About</h1>
    <Link href="/">
      <a>Go to Home</a>
    </Link>
    <p>A JavaScript Programmer</p>
    <img src="mm-purple.png" alt="JavaScript" height="200px" />
  </Layout>
);
