interface HeaderTitleProps {
  children: React.ReactNode;
}

function HeaderTitle({ children }: HeaderTitleProps) {
  return (
    <h1 className="text-3xl text-primary font-semibold mb-3">
      {children}
    </h1>
  )
}

export default HeaderTitle;
