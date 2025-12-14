import ShellHeader from '@/components/ShellHeader';
import { DropzoneProvider } from '@/context/DropzoneContext';

export default function FileConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DropzoneProvider>
      <div className="min-h-screen bg-[#FCF5EB]">
        <ShellHeader />
        <main className="w-full !p-0">
          {children}
        </main>
      </div>
    </DropzoneProvider>
  );
}

