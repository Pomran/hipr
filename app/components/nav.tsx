import Link from 'next/link'

const navItems = {
  '/': { name: 'home' },
  '/blog': { name: 'blog' },
  '/deploy': { name: 'deploy' }, // 注意：如果你的模板是别的路径，请对应修改这里
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-12 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative" id="nav">
          <div className="flex flex-row space-x-1 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="capitalize transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex align-middle relative py-2 px-4 rounded-xl font-medium text-neutral-600 dark:text-neutral-400"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}