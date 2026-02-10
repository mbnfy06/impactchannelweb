import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundBeamsWithCollision } from '../components/ui/background-beams-with-collision';

const Login = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const isAuth = localStorage.getItem('demo_auth');
        if (isAuth === 'true') {
            navigate('/');
        }
    }, [navigate]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'impactdemo123') {
            localStorage.setItem('demo_auth', 'true');
            navigate('/');
        } else {
            setError(true);
            setTimeout(() => setError(false), 500);
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden">
            <BackgroundBeamsWithCollision className="absolute inset-0 z-0">
                <div className="hidden"></div>
            </BackgroundBeamsWithCollision>

            <div className="relative z-10 w-full max-w-md px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl"
                >
                    <div className="text-center mb-10">
                        <div className="w-20 h-20 bg-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.1)]">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Acceso a la Demo</h1>
                        <p className="text-neutral-400 text-sm">Introduce la clave de acceso para ver el proyecto.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <motion.div
                                animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                                transition={{ duration: 0.4 }}
                            >
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        if (error) setError(false);
                                    }}
                                    placeholder="Clave de acceso"
                                    className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 focus:shadow-[0_0_20px_rgba(234,179,8,0.1)]`}
                                    autoFocus
                                />
                            </motion.div>
                            <AnimatePresence>
                                {error && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="text-red-500 text-xs mt-2 ml-1"
                                    >
                                        Acceso denegado. Revisa la clave.
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-yellow-500 text-black font-bold py-4 rounded-2xl shadow-[0_4px_15px_rgba(234,179,8,0.3)] hover:shadow-[0_8px_25px_rgba(234,179,8,0.4)] transition-all duration-300"
                        >
                            Entrar
                        </motion.button>
                    </form>

                    <p className="text-center text-neutral-600 text-xs mt-10">
                        © 2026 Impact Channel · Marketing Agency
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
