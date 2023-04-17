interface HeaderSubtitleProps {
  children: React.ReactNode;
}

function HeaderSubtitle({ children }: HeaderSubtitleProps) {
  return (
    <h2 className="text-secondary mb-4">
      {children}
    </h2>
  )
}

export default HeaderSubtitle;