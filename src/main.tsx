import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'
import "./index.css";
import { Dashboard } from "./pages/Dashboard.tsx";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <Toaster
            toastOptions={{
            success: {
                style: {
                fontSize: '14px',
                background: '#c1eaba',
                },
            },
            error: {
                style: {
                fontSize: '14px',
                background: '#ffdfd4',
                },
            },
            }}
            position='top-right'
        />
        <Dashboard />
    </QueryClientProvider>
);
