export default function Header() {
  return (
    <header className="bg-[#1e293B] text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold">MEET PLUS</div>
        <nav className="flex space-x-4">
          <div className="hover:underline">1</div>
          <div className="hover:underline">2</div>
          <div className="hover:underline">3</div>
        </nav>
      </div>
    </header>
  );
}
