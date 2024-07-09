import { useState } from 'react';

const API_URL = import.meta.env.VITE_URL_ACCESS;

function Switch({ username, state, token }) {
  const [toggle, setToggle] = useState(state);
  const [disabled, setDisabled] = useState(false);

  const handleSwitch = async () => {
    const status = toggle ? 'enable' : 'disable';
    console.log(`Status: ${status}`);

    if (disabled) return;

    try {
      setDisabled(true);
      setToggle(!toggle);

      const response = await fetch(`${API_URL}/api/auth/${username}/${status}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update user status');
      }

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert(error.message);
    } finally {
      setDisabled(false);
    }
  };

  const toggleClass = ' transform translate-x-6';

  return (
    <div
      className={`md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300  rounded-full p-1 cursor-pointer ${!toggle ? 'bg-green-500' : ''} ${disabled ? "opacity-70 pointer-events-none" : ""}`}
      onClick={handleSwitch}
    >
      <div
        className={"bg-white md:w-6 md:h-6 h-5 w-5 rounded-full transition-all shadow-md transform" + (toggle ? null : toggleClass)}
      >
      </div>
    </div>
  );
}

export default Switch;
