interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({
  title
}: SectionTitleProps) {
  return (
    <div className="text-2xl font-semibold text-primary">
      {title}
    </div>
  )
}