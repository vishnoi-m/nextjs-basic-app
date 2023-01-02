import { useRouter } from "next/router";
// our-domain/news/

function NewsDetails() {
  const router = useRouter();
  console.log(router.query.newsId);
  return <h1>This is News Details Page</h1>;
}

export default NewsDetails;
