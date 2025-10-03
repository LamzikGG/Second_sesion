import './App.css';
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin ? '/authorisation' : '/registration';
      const payload = isLogin ? { username, password } : { username, password, email };
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || 'Ошибка запроса');
      }
      const data = await res.json();
      console.log('Успех:', data);
      // Пример перехода после авторизации: window.location.href = '/home';
      alert('Успешно');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className='app-container'>
      {/* Левая часть - контент с изображением */}
      <div className="content-side">
        <div className="image-container">
          <img 
            src = '/image/hahasmeh.png'
            className="content-image"
          />
        </div>
      </div>

      {/* Правая часть - форма */}
      <div className="form-side">
        <div className="form-container">
          <h2>{isLogin ? 'Вход' : 'Регистрация'}</h2>
          
          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ваш email"
                  required
                />
              </div>
            )}
            
            <div className="input-group">
              <label htmlFor="username">Логин:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ваш логин"
                required
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="password">Пароль:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ваш пароль"
                required
              />
            </div>
            
            <button type="submit" className="login-btn">
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </button>
          </form>

          <div className="auth-switch">
            <p>
              {isLogin ? 'Нет аккаунта? ' : 'Уже есть аккаунт? '}
              <span 
                className="switch-link"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Зарегистрироваться' : 'Войти'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;