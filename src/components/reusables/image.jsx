import Image from 'next/image'

export default function ThisImage({ src, alt, loading }) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={src}
        alt={alt}
        className="object-contain"
        loading={loading}
        fill
        priority
      />
    </div>
  )
}
