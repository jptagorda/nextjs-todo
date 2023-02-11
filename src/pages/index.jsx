import { PlusIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/solid';
import FrontendLayout from '@layouts/FrontendLayout';
import { Inter } from '@next/font/google';
import Head from 'next/head';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <FrontendLayout>
            <Head>
                <title>Home | Next Todo</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="relative">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                        <div className="absolute inset-0">
                            <img
                                className="h-full w-full object-cover"
                                width="500"
                                height="500"
                                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                                alt="People working on laptops"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-white mix-blend-multiply" />
                        </div>
                        <div className="relative space-y-16 py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
                            <h1 className="flex justify-center items-center text-center text-4xl font-bold tracking-tight sm:text-5xl text-white">
                                Coded with <HeartIcon className="text-red-500 h-16 w-16 mx-3" /> using
                            </h1>

                            <div className="flex items-center justify-center space-x-5">
                                <img className="h-24 w-24" src="/images/logos/react.svg" alt="React logo" />
                                <PlusIcon className="h-16 w-16 text-white" />
                                <img className="h-24 w-24" src="/images/logos/nextjs.svg" alt="Nextjs Logo" />
                            </div>

                            <div className="mx-auto max-w-sm sm:flex sm:max-w-none sm:justify-center">
                                <Link
                                    href="/todo"
                                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
                                >
                                    Go to app
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
