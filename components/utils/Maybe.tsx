interface MaybeProps {
  condition: boolean;
  children: React.ReactNode;
}

function Maybe({
  condition,
  children,
} : MaybeProps) {
  return (
    <>
      {condition && children}
    </>
  );
}

export default Maybe;