import Footer from '@/components/FrontendLayout/Footer';
import TopNavigation from '@/components/FrontendLayout/TopNavigation';

export default function Layout({ children }) {
    return (
        <div className="bg-white">
            <TopNavigation />
            <main className="space-y-10 py-16">{children}</main>
            <Footer />
        </div>
    );
}
