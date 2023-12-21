import AboutTable from "@/app/about/AboutTable";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="my-10">
        <AboutTable />
      </div>
    </main>
  );
}
