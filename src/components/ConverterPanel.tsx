export default function ConverterPanel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-6 w-full bg-[#8B9FFF]/10 rounded-2xl p-8 min-h-[400px]">
      {children}
    </section>
  );
}

