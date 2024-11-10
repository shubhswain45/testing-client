"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import usePreviewImg from "@/hooks/imgae";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useCreatePost } from "@/hooks/post";
import { Loader } from "lucide-react";

interface FormData {
  caption: string;
}

function CreatePage() {
  const pathname = usePathname();
  const isCreatePage = pathname === "/dashboard/create";
  const router = useRouter();

  const { handleImageChange, imgURL, setImgURL } = usePreviewImg(); // Ensure setImgUrl is available in the hook
  const { mutate: createPost, isPending } = useCreatePost()
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { handleSubmit, register } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    createPost({ imgURL: imgURL || "", content: data.caption })
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const clearImage = () => {
    setImgURL(null); // Clear the image URL
  };

  return (
    <div>
      <Dialog
        open={isCreatePage}
        onOpenChange={(open) => !open && router.back()}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new post</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {imgURL ? (
              <div className="flex flex-col items-center space-y-2">
                <div className="relative">
                  <Image
                    src={imgURL}
                    alt="Post preview"
                    width={150} // Set desired width
                    height={150} // Set desired height
                    className="rounded-md object-cover"
                  />
                  <button
                    type="button"
                    onClick={clearImage}
                    className="absolute top-1 right-1 p-1 bg-gray-700 text-white rounded-full text-xs"
                  >
                    X
                  </button>
                </div>
              </div>
            ) : (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Picture
                </label>
                <div className="flex justify-center mt-2">
                  <Button type="button" onClick={openFileDialog}>
                    Upload Picture
                  </Button>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="hidden"
                />
                <p className="mt-2 text-xs text-gray-500">
                  Upload a picture to post.
                </p>
              </div>
            )}

            {imgURL && (
              <div className="mb-4">
                <label htmlFor="caption" className="block text-sm font-medium text-gray-700">
                  Caption
                </label>
                <textarea
                  id="caption"
                  placeholder="Write a caption..."
                  {...register("caption")}
                  className="mt-1 block w-full text-sm border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                />

              </div>
            )}

            <Button type="submit" disabled={!imgURL}>
              {isPending ? <Loader className=' animate-spin mx-auto' size={24} /> : "Create Post"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreatePage;
