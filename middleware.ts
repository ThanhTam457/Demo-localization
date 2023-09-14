import { NextRequest, NextResponse } from "next/server";
import Negotiator from 'negotiator';
import { match } from "@formatjs/intl-localematcher";
import { request } from "http";
import next from "next";

export let locales = ['en', 'vi'];
export let defaultLocale = 'en';

function getLocale(request: Request): string {
    const headers = new Headers(request.headers)
    const acceptLanguage = headers.get("accept-language")
    if (acceptLanguage){
        headers.set('accept-language', acceptLanguage.replaceAll("_", "-"))
    }

    // console.log(" accepted lang",acceptLanguage)
    const headersObject = Object.fromEntries(headers.entries());
    const languages = new Negotiator({headers: headersObject}).languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const pathnameIsMissingLocale = locales.every(
      (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )
   
    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
      const locale = getLocale(request)
   
      // e.g. incoming request is /products
      // The new URL is now /en-US/products
      const newUrl =  NextResponse.redirect(
        new URL(`/${locale}/${pathname}`, request.url)
      )

      console.log(newUrl);

      return newUrl
      
    }
}

export const config = {
    matcher: [
        '/((?!_next|api|favicon.ico).*)',
    ]
}