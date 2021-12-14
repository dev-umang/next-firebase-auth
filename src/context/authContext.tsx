import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import * as React from "react";
import LoadingScreen from "../common/components/LoadingScreen/loadingScreen";
import { Auth } from "../common/configs/firebase.config";
import LoginPage from "../pages/login";
import { UserDTO } from "../types/user";

export interface IAuthProviderProps {
  user: UserDTO | null | undefined;
  setUser: (user: UserDTO | null | undefined) => void;
}

export const AuthContext = React.createContext({} as IAuthProviderProps);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = React.useState<UserDTO | null | undefined>(undefined);
  const [isLoading, setIsLoading] = React.useState(true);
  const router = useRouter();

  React.useEffect(() => {
    const authListener = onAuthStateChanged(
      Auth,
      (creds) => {
        if (creds) {
          console.log(creds);
        } else {
          console.log("No User Found");
        }
      },
      (err) => {
        console.log(err.message);
      }
    );

    setTimeout(() => {
      setUser(null);
      setIsLoading(false);
    }, 2000);
    return () => {
      if (authListener) authListener();
    };
  }, []);

  if (user === null) {
    router.push("/login");
  }

  return (
    <>
      <LoadingScreen show={isLoading} />
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
