import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="app">
            <Header />
            <main>{children}</main>
            <Footer />
            <FloatingButton />
        </div>
    );
}
