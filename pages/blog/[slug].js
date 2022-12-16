import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      {/* display slug */}
      <h1>{slug}</h1>
    </div>
  );
}
