import Link from 'next/link';
import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';

export default function Header() {
  const { isAuthenticated, login, logout } = useKindeAuth();

  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      
      <nav>
        <Link href="/">
          {/* <a className="mr-4 hover:underline">Home</a> */}
          Home
        </Link>
        <Link href="/profile">
          {/* <a className="hover:underline">Profile</a> */}
          Profile
        </Link>
      </nav>
      <div>
        {isAuthenticated ? (
          <button onClick={logout} className="px-4 py-2 bg-red-500 rounded">
            Logout
          </button>
        ) : (
          <button onClick={login} className="px-4 py-2 bg-blue-500 rounded">
            Login
          </button>
        )}
      </div>
    </header>
  );
}
