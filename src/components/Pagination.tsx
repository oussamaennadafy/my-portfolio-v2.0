import Link from 'next/link'

export function Pagination() {
  return (
    <div className="flex items-center justify-center gap-2 mt-16 sm:mt-20">
      <span className="inline-flex items-center justify-center w-20 h-10 text-sm font-medium rounded-full shadow-sm bg-slate-50 dark:bg-gray-950 text-slate-500/60 dark:text-gray-300 shadow-sky-100/50 dark:shadow-none ring-1 ring-slate-900/5 dark:ring-gray-600">
        Prev
      </span>
      <span className="inline-flex items-center justify-center w-10 h-10 text-sm font-medium rounded-full shadow-sm bg-sky-600 text-sky-50 shadow-sky-100/50 dark:shadow-none ring-1 ring-slate-900/5">
        1
      </span>
      <Link
        href="#"
        className="items-center justify-center hidden w-10 h-10 text-sm font-medium transition duration-200 ease-in-out rounded-full shadow-sm bg-slate-50 dark:bg-gray-950 text-slate-700 dark:text-gray-300 shadow-sky-100/50 dark:shadow-none ring-1 ring-slate-900/5 hover:bg-slate-100 dark:ring-gray-600 hover:text-sky-700 sm:inline-flex"
      >
        2
      </Link>
      <Link
        href="#"
        className="items-center justify-center hidden w-10 h-10 text-sm font-medium transition duration-200 ease-in-out rounded-full shadow-sm bg-slate-50 dark:bg-gray-950 text-slate-700 dark:text-gray-300 shadow-sky-100/50 dark:shadow-none ring-1 ring-slate-900/5 hover:bg-slate-100 dark:ring-gray-600 hover:text-sky-700 sm:inline-flex"
      >
        3
      </Link>
      <span
        className="items-center justify-center hidden w-10 h-10 text-sm font-medium transition duration-200 ease-in-out rounded-full shadow-sm bg-slate-50 dark:bg-gray-950 text-slate-700 dark:text-gray-300 shadow-sky-100/50 dark:shadow-none ring-1 ring-slate-900/5 hover:bg-slate-100 dark:ring-gray-600 hover:text-sky-700 sm:inline-flex"
      >
        ...
      </span>
      <Link
        href="#"
        className="items-center justify-center hidden w-10 h-10 text-sm font-medium transition duration-200 ease-in-out rounded-full shadow-sm bg-slate-50 dark:bg-gray-950 text-slate-700 dark:text-gray-300 shadow-sky-100/50 dark:shadow-none ring-1 ring-slate-900/5 hover:bg-slate-100 dark:ring-gray-600 hover:text-sky-700 sm:inline-flex"
      >
        5
      </Link>
      <Link
        href="#"
        className="inline-flex items-center justify-center w-20 h-10 text-sm font-medium rounded-full shadow-sm bg-slate-50 dark:bg-gray-950 text-slate-500/60 dark:text-gray-300 shadow-sky-100/50 dark:shadow-none ring-1 ring-slate-900/5 dark:ring-gray-600"      >
        Next
      </Link>
    </div>
  )
}
