import Head from "next/head";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <Head>
        <title>🏢 Virtual Office Dashboard</title>
        <meta name="description" content="Hermes Agent Multi-Agent Dashboard"/>
      </Head>

      <h1 className="text-3xl font-bold mb-6">🏢 Virtual Office Dashboard</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-2">👔 CEO</h3>
          <p className="text-gray-400 text-sm">Strategic oversight & coordination</p>
          <p className="text-green-500 font-medium">Status: <span id="ceo-status">Initializing...</span></p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-2">💻 CTO</h3>
          <p className="text-gray-400 text-sm">Architecture & deployment</p>
          <p className="text-green-500 font-medium">Status: <span id="cto-status">Initializing...</span></p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-2">💻 Developer</h3>
          <p className="text-gray-400 text-sm">Coding & build</p>
          <p className="text-green-500 font-medium">Status: <span id="dev-status">Initializing...</span></p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-2">📈 Marketing</h3>
          <p className="text-gray-400 text-sm">Digital strategy & content</p>
          <p className="text-green-500 font-medium">Status: <span id="mk-status">Initializing...</span></p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-2">🎨 Designer</h3>
          <p className="text-gray-400 text-sm">UI/UX & graphics</p>
          <p className="text-green-500 font-medium">Status: <span id="designer-status">Initializing...</span></p>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-700">
        <h3 className="text-xl font-bold mb-4">📊 Live Updates</h3>
        <p className="text-gray-400 text-sm">Results from agents appear in Telegram + Discord</p>
      </div>
    </main>
  );
}
