import Image from 'next/image'

type Props = {
  logo: string
  bankName: string
  accountNumber: string
  accountName: string
  theme: 'light' | 'dark'
}

export default function RdnItem({
  logo,
  bankName,
  accountNumber,
  accountName,
  theme,
}: Props) {
  const isDark = theme === 'dark'

  return (
    <div>
      <div className="flex items-center gap-3">
        <Image
          src={logo}
          alt={bankName}
          width={90}
          height={90}
          className="rounded-full object-contain"
        />

        <div className="text-sm font-medium">{accountNumber}</div>
      </div>

      <div
        className={`text-xs mt-1 pl-[44px] ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        }`}
      >
        {accountName}
      </div>
    </div>
  )
}
