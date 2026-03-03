export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full bg-gray-700" />
      <p className="mt-2 text-sm text-pink-400 font-semibold">Level 5</p>
      <button className="text-green-500 text-sm mt-1">Ubah Foto</button>
    </div>
  );
}
