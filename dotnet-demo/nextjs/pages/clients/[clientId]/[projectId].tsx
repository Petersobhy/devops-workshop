import { useRouter } from "next/router";

export default function Project() {
  const { query } = useRouter();
  console.log("query inside the project file", query);
  return <h1> inside project </h1>;
}
