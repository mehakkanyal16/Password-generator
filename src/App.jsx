import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700">
      <div className="w-full max-w-md bg-gray-800 shadow-2xl rounded-2xl p-6 text-orange-400">
        <h1 className="text-white text-2xl font-semibold text-center mb-4">
          🔑 Password Generator
        </h1>

        <div className="flex items-center shadow-md rounded-lg overflow-hidden bg-gray-900 p-2">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-4 bg-transparent text-white text-lg"
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-500 transition text-white font-semibold px-4 py-2 rounded-md"
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-4 mt-5">
          <div className="flex items-center justify-between">
            <label className="text-white font-medium">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer w-1/2 accent-blue-500"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-white font-medium">Include Numbers</label>
            <input
              type="checkbox"
              checked={numberAllowed}
              className="w-5 h-5 accent-green-500 cursor-pointer"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-white font-medium">Include Symbols</label>
            <input
              type="checkbox"
              checked={charAllowed}
              className="w-5 h-5 accent-red-500 cursor-pointer"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
          </div>
        </div>

        <button
          onClick={passwordGenerator}
          className="mt-6 w-full bg-orange-500 hover:bg-orange-400 transition text-white font-semibold py-3 rounded-lg text-lg"
        >
          🔄 Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
