import { getCurrentProfile } from "@/lib/auth";
import { Sidebar } from "@/components/layout/Sidebar";

export default async function AppLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const profile = await getCurrentProfile();

  // Client portal is not available yet. If a client-role account somehow
  // exists, show a simple message instead of the staff app.
  if (profile.role === "client") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="card max-w-md p-8 text-center">
          <h1 className="mb-2 text-lg font-semibold text-slate-900">Client Portal Coming Soon</h1>
          <p className="text-sm text-slate-500">
            Please contact your account manager at Antique Signage &amp; Advertising for
            updates on your order.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar profile={profile} />
      <main className="flex-1 min-h-screen bg-slate-50 p-6 md:p-8 dark:bg-slate-950">{children}</main>
    </div>
  );
}
