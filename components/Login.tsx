
import React, { useState } from 'react';
import { User } from '../types';

interface LoginProps {
  onLogin: (user: User) => void;
}

const ADMIN_PASSWORD = 'NELSON2@25';

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminError, setAdminError] = useState('');

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onLogin({
        name: name.trim(),
        role: 'student',
        loginTime: new Date()
      });
    }
  };

  const handleAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === ADMIN_PASSWORD) {
      onLogin({
        name: 'Admin',
        role: 'admin',
        loginTime: new Date()
      });
    } else {
      setAdminError('Incorrect password 密碼錯誤');
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{
        backgroundImage: 'url(/HIGHSCHOOL.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-slate-900/60" />

      <div className="relative z-10 bg-white/95 backdrop-blur rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center text-amber-600 text-3xl font-bold mx-auto mb-4">
            倫
          </div>
          <h2 className="text-3xl font-bold text-slate-800 serif">Welcome to Ethics Explorer</h2>
          <h3 className="text-lg text-slate-600 serif mt-1">歡迎來到倫理探索</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Student Login */}
          <div className="bg-white rounded-2xl p-6 shadow border border-slate-100">
            <h4 className="text-lg font-bold text-slate-700 mb-1 text-center">🎓 Student Login</h4>
            <p className="text-sm text-slate-400 text-center mb-4">學生登入</p>
            <form onSubmit={handleStudentSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name 你的名字</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-amber-500 focus:ring-0 outline-none transition-all text-center"
                  placeholder="e.g. Alex / 小明"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 text-white py-3 rounded-xl font-bold hover:bg-amber-600 transition-all shadow"
              >
                Start Learning 開始學習
              </button>
            </form>
          </div>

          {/* Admin Login */}
          <div className="bg-white rounded-2xl p-6 shadow border border-slate-100">
            <h4 className="text-lg font-bold text-slate-700 mb-1 text-center">🔐 Admin Login</h4>
            <p className="text-sm text-slate-400 text-center mb-4">管理員登入</p>
            <form onSubmit={handleAdminSubmit} className="space-y-4">
              <div>
                <label htmlFor="adminPw" className="block text-sm font-medium text-slate-700 mb-1">Password 密碼</label>
                <input
                  type="password"
                  id="adminPw"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-slate-500 focus:ring-0 outline-none transition-all text-center"
                  placeholder="Enter admin password"
                  value={adminPassword}
                  onChange={(e) => { setAdminPassword(e.target.value); setAdminError(''); }}
                />
                {adminError && <p className="text-red-500 text-xs mt-1 text-center">{adminError}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-all shadow"
              >
                Admin Enter 管理員進入
              </button>
            </form>
          </div>
        </div>

        <p className="mt-8 text-center text-slate-400 text-xs leading-relaxed">
          "Act justly, love mercy, and walk humbly."<br/>
          「行公義，好憐憫，存謙卑的心。」—— Micah 彌迦書 6:8
        </p>
      </div>
    </div>
  );
};

export default Login;
