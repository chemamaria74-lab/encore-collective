import { AuthCard } from "@/features/auth/auth-card";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-16">
      <AuthCard mode="login" />
    </main>
  );
}
