import { PostSkeleton } from "@/components/Skeletons";
import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import SinglePost from "@/components/SinglePost";

async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  return (

    <div>
      <Suspense fallback={<PostSkeleton />}>
        <SinglePost id={id} />
      </Suspense>

      <Separator className="my-12 max-w-3xl lg:max-w-4xl mx-auto" />
    </div>
  );
}

export default PostPage;