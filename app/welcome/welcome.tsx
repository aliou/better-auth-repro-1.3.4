import { useActiveOrganization, useSession } from 'lib/auth-client';
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  const {
    data: session,
    isPending,
    error,
  } = useSession();

  const { data: org } = useActiveOrganization();

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        <div className="max-w-[600px] w-full space-y-6 px-4">
          <div className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center">
              Session Information
            </h2>
            
            {isPending && (
              <p className="text-center text-gray-600 dark:text-gray-400">Loading session...</p>
            )}
            
            {error && (
              <p className="text-center text-red-600 dark:text-red-400">Error loading session: {error.message}</p>
            )}
            
            {session && (
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">User Details</h3>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-gray-600 dark:text-gray-400">ID:</dt>
                      <dd className="text-gray-900 dark:text-gray-100 font-mono text-sm">{session.user.id}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600 dark:text-gray-400">Email:</dt>
                      <dd className="text-gray-900 dark:text-gray-100">{session.user.email}</dd>
                    </div>
                    {session.user.name && (
                      <div className="flex justify-between">
                        <dt className="text-gray-600 dark:text-gray-400">Name:</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{session.user.name}</dd>
                      </div>
                    )}
                  </dl>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Session Details</h3>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-gray-600 dark:text-gray-400">Session ID:</dt>
                      <dd className="text-gray-900 dark:text-gray-100 font-mono text-sm">{session.session.id}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600 dark:text-gray-400">Expires At:</dt>
                      <dd className="text-gray-900 dark:text-gray-100">{new Date(session.session.expiresAt).toLocaleString()}</dd>
                    </div>
                  </dl>
                </div>
                
                {org && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">Active Organization</h3>
                    <dl className="space-y-2">
                      <div className="flex justify-between">
                        <dt className="text-blue-600 dark:text-blue-400">ID:</dt>
                        <dd className="text-blue-900 dark:text-blue-100 font-mono text-sm">{org.id}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-blue-600 dark:text-blue-400">Name:</dt>
                        <dd className="text-blue-900 dark:text-blue-100">{org.name}</dd>
                      </div>
                      {org.slug && (
                        <div className="flex justify-between">
                          <dt className="text-blue-600 dark:text-blue-400">Slug:</dt>
                          <dd className="text-blue-900 dark:text-blue-100">{org.slug}</dd>
                        </div>
                      )}
                    </dl>
                  </div>
                )}
              </div>
            )}
            
            {!session && !isPending && (
              <p className="text-center text-gray-600 dark:text-gray-400">No active session</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
