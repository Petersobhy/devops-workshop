import { useRouter } from "next/router";

export default function ProfilePage() {
  const { query } = useRouter();
  console.log("query inside the client user ", query);
  return <h1>inside the client page</h1>;
}
