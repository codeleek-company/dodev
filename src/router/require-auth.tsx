import { onAuthStateChanged } from "firebase/auth";
import { auth as authed } from "@/db/firebase";
import { useState, useEffect, ReactNode } from "react";

import { Navigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
function RequireAuth({ children }: { children: ReactNode }) {
  const [access, setAccess] = useState(true);

  useEffect(() => {
    onAuthStateChanged(authed, (user) => {
      user ? setAccess(true) : setAccess(false);
    });
  });

  return access ? (
    <div>{children}</div>
  ) : (
    <Navigate to="/auth" replace={true} />
  );
}

export default function auth(node: ReactNode) {
  return <RequireAuth>{node}</RequireAuth>;
}
