
import SidebarLayout from "../Layouts/SidebarLayouts"; 
import DashboardHeader from "../Pages/Dashboard";

const Dashboard = () => {
    return (
        <SidebarLayout>
            {/* Conteneur principal de la page du tableau de bord */}
            <div id="page-container" className="mx-auto flex min-h-screen w-full min-w-[320px] flex-col bg-slate-100">

                <DashboardHeader />

                <main id="page-content" className="flex max-w-full flex-auto flex-col">
                    <div className="container mx-auto p-4 lg:p-8 xl:max-w-7xl">
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">Tableau de bord Al-Mohandis</h1> 
                        <nav className="hidden lg:col-span-3 lg:block">
                            <a
                                href="javascript:void(0)"
                                className="group flex items-center justify-between gap-2 rounded-md border border-transparent bg-indigo-100 px-2.5 py-2 text-sm font-semibold text-indigo-500 active:border-indigo-200"
                            >
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="hi-solid hi-home inline-block size-5 flex-none"
                                >
                                    <path
                                        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                                    ></path>
                                </svg>
                                <span className="grow">Dashboard</span>
                            </a>
                            <hr className="h-5 border-0" />
                            <div className="space-y-1.5">
                                <a
                                    href="javascript:void(0)"
                                    className="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
                                >
                                    <svg
                                        className="hi-mini hi-cursor-arrow-rays inline-block size-5 flex-none text-slate-300 group-hover:text-indigo-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="grow">Sales</span>
                                    <span
                                        className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900"
                                    >250</span>
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    className="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
                                >
                                    <svg
                                        className="hi-mini hi-chart-bar inline-block size-5 flex-none text-slate-300 group-hover:text-indigo-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z"
                                        />
                                    </svg>
                                    <span className="grow">Analytics</span>
                                </a>
                            </div>
                            <hr className="h-5 border-0" />
                            <div className="space-y-1.5">
                                <a
                                    href="javascript:void(0)"
                                    className="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
                                >
                                    <svg
                                        className="hi-mini hi-user-group inline-block size-5 flex-none text-slate-300 group-hover:text-indigo-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"
                                        />
                                    </svg>
                                    <span className="grow">Users</span>
                                    <span
                                        className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900"
                                    >563</span>
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    className="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
                                >
                                    <svg
                                        className="hi-mini hi-briefcase inline-block size-5 flex-none text-slate-300 group-hover:text-indigo-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                                            clipRule="evenodd"
                                        />
                                        <path
                                            d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"
                                        />
                                    </svg>
                                    <span className="grow">Projects</span>
                                    <span
                                        className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900"
                                    >1.2k</span>
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    className="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
                                >
                                    <svg
                                        className="hi-mini hi-document-text inline-block size-5 flex-none text-slate-300 group-hover:text-indigo-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="grow">Invoices</span>
                                    <span
                                        className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900"
                                    >7.5k</span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </main>
            </div>
        </SidebarLayout>
    );
};

export default Dashboard;