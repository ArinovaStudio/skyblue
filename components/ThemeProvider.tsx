"use client";
import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes";
import { useEffect } from "react";
export default function ThemeProvider({children,...props}:React.ComponentProps<typeof NextThemeProvider>){
    const {setTheme} = useTheme();
    useEffect(()=>{
        setTheme("dark");
    },[]);
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}