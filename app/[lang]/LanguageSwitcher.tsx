'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { locales } from '@/middleware';
import { Menu } from '@headlessui/react'

const LanguageSwitcher = ({lang}: {lang: any}) => {

    const pathName = usePathname()
    const redirectedPathName = (locale: string) => {
        if (!pathName) 
            return '/';
        const segments = pathName.split('/');
        segments[1] = locale;
        return segments.join('/');
    }

    return ( 
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Language
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {locales.map((locale) => {
                    return(
                        <Menu.Item key={locale}>
                            <Link href={redirectedPathName(locale)} className='group flex w-full items-center rounded-md px-2 py-2 text-sm'>{locale}</Link>
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
     );
}
 
export default LanguageSwitcher;