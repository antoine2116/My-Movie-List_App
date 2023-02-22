interface AuthTitleProps {
  title: string;
}

function AuthTitle({
  title,
}: AuthTitleProps) {
  return (
    <div className="text-2xl font-bold mb-6">
      {title}
    </div>
  )
}

export default AuthTitle;
