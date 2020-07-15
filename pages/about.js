import Link from "next/link";

export default () => (
  <div>
    <h1>About</h1>
    <Link href="/">
      <a>Go to Home</a>
    </Link>
    <p>A JavaScript Programmer</p>
    <img src="/static/mm-purple.png" alt="JavaScript" height="200px" />
  </div>
);
