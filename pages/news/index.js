import Link from "next/link";
import { Fragment } from "react";
// our-domain/news

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/link1"> Link 1</Link>
        </li>
        <li>Link 2</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
