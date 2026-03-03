import ProfileHeader from "@/features/akun/components/ProfileHeader";
import PersonalInfoSection from "@/features/akun/components/PersonalInfoSection";
import BankRdnSection from "@/features/akun/components/BankRdnSection";
import BankAkhirSection from "@/features/akun/components/BankAkhirSection";

export default function AkunPage() {
  return (
    <div className="max-w-sm mx-auto min-h-screen px-4 py-6 bg-gradient-to-b from-black text-white">
      <div className="flex items-center mb-6">
        <button className="mr-3">←</button>
        <h1 className="text-lg font-semibold">Detail Akun</h1>
      </div>

      <ProfileHeader />
      <PersonalInfoSection />
      <BankRdnSection />
      <BankAkhirSection />
    </div>
  );
}
