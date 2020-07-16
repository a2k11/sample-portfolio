import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: "80vw" }}>
      NextJS is a framework for creating React applications. It comes with a
      page-based routing system, static optimization, server-side rendering with
      data-fetching, automatic code-splitting, client-side routing with page
      prefetching, built-in CSS (and SASS) support and API routes.
    </p>
  </Layout>
);

export default withRouter(Post);
