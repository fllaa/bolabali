"use client";

import * as React from "react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export interface NextAuthProviderProps {
  children: React.ReactNode;
  session: Session;
}

export function NextAuthProvider({
  children,
  session,
}: Readonly<NextAuthProviderProps>) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}