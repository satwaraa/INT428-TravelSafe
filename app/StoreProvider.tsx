"use client";
import { Store } from "@/lib/store";
import { Provider } from "react-redux";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={Store}>{children}</Provider>;
}
