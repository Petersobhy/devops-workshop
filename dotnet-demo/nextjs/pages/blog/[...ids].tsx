import Link from "next/link";
import { useRouter } from "next/router";

export default function Blog() {
  const { query, push } = useRouter();
  console.log("query", query);
  return (
    <>
      <h1>blog</h1>
      <Link href="/profile/1">Profile</Link>
      <button onClick={() => push("/clients/clientid/projectid")}>
        go to clients page
      </button>
    </>
  );
}
