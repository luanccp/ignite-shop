import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();

  
  return <h2>Product {JSON.stringify(query)} </h2>;
}
