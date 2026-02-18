'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoginPage() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === '123456789') {
            setIsLoading(true);
            document.cookie = 'demo_auth=true; path=/; max-age=86400; SameSite=Lax';
            setTimeout(() => { window.location.href = '/'; }, 400);
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Large amber glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[180px] opacity-25"
                style={{ background: 'radial-gradient(circle, #FFB800 0%, transparent 70%)' }}
            />
            {/* Secondary glow */}
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15"
                style={{ background: 'radial-gradient(circle, #FF8C00 0%, transparent 70%)' }}
            />
            {/* Dot grid */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #FFB800 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="relative z-10 w-full max-w-md"
            >
                {/* Card with amber border glow */}
                <div className="bg-[#111111]/80 backdrop-blur-2xl border border-[#FFB800]/20 p-10 rounded-3xl shadow-[0_0_60px_rgba(255,184,0,0.08)]">
                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <Image
                            src="/images/logo-full.png"
                            alt="Impact Channel"
                            width={160}
                            height={64}
                            className="h-14 w-auto object-contain"
                            priority
                        />
                    </div>

                    {/* Icon + Title */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-[#FFB800]/30 mb-5"
                            style={{ background: 'linear-gradient(135deg, rgba(255,184,0,0.2), rgba(255,140,0,0.1))' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-1 tracking-tight">Acceso Privado</h1>
                        <p className="text-[#A0A0A0] text-sm">Introduce la clave de acceso para continuar</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="relative">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (error) setError(false);
                                }}
                                className={`w-full bg-white/[0.05] border-2 ${error ? 'border-red-500/60 focus:border-red-500' : 'border-[#FFB800]/20 focus:border-[#FFB800]/60'} rounded-xl px-4 py-4 text-white placeholder:text-[#555] focus:outline-none focus:ring-4 ${error ? 'focus:ring-red-500/10' : 'focus:ring-[#FFB800]/10'} transition-all duration-300 text-lg`}
                                placeholder="•••••••••"
                                autoFocus
                            />
                            <AnimatePresence>
                                {error && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="mt-2 text-sm text-red-400 pl-1"
                                    >
                                        Contraseña incorrecta
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            type="submit"
                            disabled={isLoading}
                            className="w-full font-bold py-4 rounded-xl text-[#0A0A0A] transition-all duration-300 text-lg disabled:opacity-60 cursor-pointer shadow-[0_4px_20px_rgba(255,184,0,0.35)] hover:shadow-[0_6px_30px_rgba(255,184,0,0.5)]"
                            style={{ background: 'linear-gradient(135deg, #FFB800, #FF8C00)' }}
                        >
                            {isLoading ? (
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    className="w-6 h-6 border-2 border-[#0A0A0A]/30 border-t-[#0A0A0A] rounded-full mx-auto"
                                />
                            ) : (
                                'Entrar'
                            )}
                        </motion.button>
                    </form>
                </div>

                {/* Footer */}
                <div className="mt-6 text-center">
                    <p className="text-xs text-[#FFB800]/40 font-medium">
                        &copy; 2026 Impact Channel. Todos los derechos reservados.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
