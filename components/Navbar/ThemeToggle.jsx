import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider'
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle(){
    const { theme, toggleTheme } = useContext(ThemeContext)
    return(
        <div className="theme-toggle d-flex justify-content-center align-items-center gap-2">
        <FaSun size={20} color={theme === 'light' ? '#facc15' : '#fbbf24'} />
            <div className="form-check form-switch fs-6 mt-1 ms-1">
                <input 
                className="form-check-input me-0" 
                type="checkbox" 
                id="toggle-dark" 
                style={{ cursor: 'pointer' }} 
                onClick={ toggleTheme }
                checked={theme === 'dark'}
                />
            </div>
        <FaMoon size={20} color={theme === 'dark' ? '#60a5fa' : '#94a3b8'} />
        </div>
    );
}