import { useTheme as useNextTheme } from "next-themes";
import { useTheme, Button } from "@nextui-org/react";
import { BsFillMoonFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";

import { SunIcon } from "../Icons/SunIcon";
import { useState } from "react";
import { MoonIcon } from "../Icons/MoonIcon";

export function ColorMode() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div>
      {isDark ? (
        <Button
          auto
          light
          icon={
            <SunIcon
              filled
              width="20"
              height="20"
              fill="var(--nextui-colors-gray600)"
            />
          }
          onClick={() => {
            setTheme("light");
          }}
        />
      ) : (
        <Button
          auto
          light
          icon={
            <MoonIcon
              filled
              width="20"
              height="20"
              fill="var(--nextui-colors-gray600)"
            />
          }
          onClick={() => {
            setTheme("dark");
          }}
        />
      )}
    </div>
  );
}
