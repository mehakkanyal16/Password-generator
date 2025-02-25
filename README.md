# Password Generator

## Overview
This is a simple **Password Generator** built using **React.js**. It allows users to generate a random password with customizable options such as length, numbers, and special characters. The application is styled using **Tailwind CSS**.

## Features
- Generate random passwords
- Adjust password length (6-20 characters)
- Include/exclude numbers and special characters
- Copy password to clipboard

## Technologies Used
- **React.js**
- **Tailwind CSS**
- **JavaScript (ES6+)**

## What I Learned 🧠
While building this project, I gained hands-on experience with several **React Hooks**:

### 1️⃣ useState
- Used to manage the state of password length, number inclusion, special characters, and the generated password.
- Example:
  ```jsx
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  ```

### 2️⃣ useEffect
- Used to regenerate the password whenever the user changes settings.
- Example:
  ```jsx
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  ```

### 3️⃣ useRef
- Used to reference the password input field for copying functionality.
- Example:
  ```jsx
  const passwordRef = useRef(null);
  ```

### 4️⃣ useCallback
- Used to optimize the password generator function and the copy-to-clipboard function by memoizing them.
- Example:
  ```jsx
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);
  ```

## How to Run the Project 🚀
1. Clone the repository:
   ```sh
   git clone https://github.com/mehakkanyal16/chai-aur-react.git
   ```
2. Navigate to the project folder:
   ```sh
   cd chai-aur-react/password-generator
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```


💡 **Built with ❤️ by Mehak**

