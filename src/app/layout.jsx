import "./globals.css";

import { UserProvider } from "../context/UserContext";

import Header from "../components/Header/Header";
export const data = {
  title: "Math",
  descripton: "My math page",
};

export default function Rootlayout({ children }) {
  return (
    <html lang="pt_BR">
      <body>
        <UserProvider>
          <Header />
          <main>{children}</main>
        </UserProvider>
      </body>
    </html>
  );
}
