import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';

export default function Profile() {
  const { isAuthenticated, login, logout, user } = useKindeAuth();

  if (!isAuthenticated) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">You are not logged in!</h1>
        <button
          onClick={login}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to your profile!</h1>
      <p className="mb-4">Hello, {user?.given_name || 'User'}!</p>
      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
