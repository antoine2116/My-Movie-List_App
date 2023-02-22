interface AuthFieldProps {
  label: string;
  type: string;
}

function AuthField({
  label,
  type,
}: AuthFieldProps) {
  return (
    <div>
      <div className="mb-1 text-sm">{label}</div>
      <input className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-1 outline-orange-600" type={type} />
    </div>
  )
}

export default AuthField;