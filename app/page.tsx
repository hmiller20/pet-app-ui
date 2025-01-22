// need a root page, apparently

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
          Welcome to Pocket Sheep
        </h1>
        <a 
          href="/login"
          className="block w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold text-center transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          Get Started
        </a>
      </div>
    </div>
  );
} 