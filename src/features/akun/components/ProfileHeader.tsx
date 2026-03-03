"use client";

import Image from "next/image";

interface Props {
  photoUrl?: string;
  level?: number;
}

export default function ProfileHeader({ photoUrl, level = 5 }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28">
        {/* Avatar */}
        <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-700">
          {photoUrl ? (
            <Image
              src={photoUrl}
              alt="profile"
              width={112}
              height={112}
              className="object-cover"
            />
          ) : null}
        </div>

        {/* Level Badge */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-24 h-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-[10px] font-semibold text-white shadow-md">
          LEVEL {level}
        </div>
      </div>

      <button className="text-green-500 text-sm mt-6">Ubah Foto</button>
    </div>
  );
}
