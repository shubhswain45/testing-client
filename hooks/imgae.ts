import { useState } from "react";
import { toast } from "sonner";

const usePreviewImg = () => {
  const [imgURL, setImgURL] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      
      reader.onloadend = () => {
        setImgURL(reader.result as string); // Explicitly casting to string
      };

      reader.readAsDataURL(file);
    } else {
      toast.error("Invalid file type")
      setImgURL(null);
    }
  };

  return { handleImageChange, imgURL, setImgURL };
};

export default usePreviewImg;
