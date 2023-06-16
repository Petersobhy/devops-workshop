import { useRouter } from "next/router";

export default function Profile() {
  const { query, pathname } = useRouter();
  console.log("query", query);
  console.log("pathname", pathname);
  return <h1>This is profile page</h1>;
}
