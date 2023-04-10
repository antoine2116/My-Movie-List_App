import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import Button from "./Button/Button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      type="button"
      color="transparent"
      onClick={() => theme == "dark" ? setTheme('light') : setTheme('dark')}
    >
      <div>
        {theme === 'dark' && <IoSunnySharp />}
        {theme === 'light' && <IoMoonSharp />}
      </div>

    </Button>
  )
}

export default ThemeButton;