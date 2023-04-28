import { ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      {...props}
      className={
        hasBorder
          ? "w-12 h-12 rounded-lg border-[4px] border-gray-3  outline outline-2 outline-green-2"
          : "w-12 h-12 rounded-lg border-[4px] border-gray-3 "
      }
    />
  );
}
