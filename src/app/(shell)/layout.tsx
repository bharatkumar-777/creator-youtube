import ShellHeader from '@/components/ShellHeader';
import DropzoneCard from '@/components/DropzoneCard';
import ToolTabs from '@/components/ToolTabs';
import ConverterPanel from '@/components/ConverterPanel';
import Footer from '@/components/Footer';
import { DropzoneProvider } from '@/context/DropzoneContext';

export default function ShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DropzoneProvider>
      <div className="page-frame m-8! p-8! border-3 rounded-4xl border-black">
        <ShellHeader />
        <main className="centered-container">
          <DropzoneCard />
          <ToolTabs />
          <section className="tool-panel">
            {children}
          </section>
        </main>
        <Footer />
      </div>
    </DropzoneProvider>
  );
}

