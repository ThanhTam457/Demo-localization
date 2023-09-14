"use client"
import { dictionary } from "@/dictionaries/content";
import LanguageSwitcher from "./LanguageSwitcher";
import Clock from "./Clock";
import { useState, useEffect } from 'react'

function Page({params}: {params: {lang: string}}) {
    return ( 
        <main className="block items-center text-center h-screen">
            <h1 className="text-2xl">{dictionary [params.lang]?.title}</h1>
                <Clock/>
            <LanguageSwitcher lang = {params}/>
        </main>
     );
}
 
export default Page;