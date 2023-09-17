// pages / login.js
// import { signIn, signOut, useSession } from "next-auth/react";

// export default function Login() {
//   const { data: session } = useSession();
//   return (
//     <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
//       {session ? (
//         <div className="w-full max-w-md p-10 space-y-8 bg-white shadow-md rounded-xl">
//           <div>
//             <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
//               Signed in as {session.user.email}
//             </h2>
//           </div>
//           <div className="mt-8 space-y-6">
//             <div className="flex items-center justify-center">
//               <button
//                 onClick={() => signOut("google")}
//                 className="relative flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md group w-60 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 Log out from google
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="w-full max-w-md p-10 space-y-8 bg-white shadow-md rounded-xl">
//           <div>
//             <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
//               Sign in to your account
//             </h2>
//           </div>
//           <div className="mt-8 space-y-6">
//             <div className="flex items-center justify-center">
//               <button
//                 onClick={() => signIn("google")}
//                 className="relative flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group w-60 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 Sign in with Google
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
