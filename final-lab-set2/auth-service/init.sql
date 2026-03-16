CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(20) DEFAULT 'member',
  created_at TIMESTAMP DEFAULT NOW(),
  last_login TIMESTAMP
);

CREATE TABLE IF NOT EXISTS logs (
  id SERIAL PRIMARY KEY,
  level VARCHAR(10) NOT NULL,
  event VARCHAR(100) NOT NULL,
  user_id INTEGER,
  message TEXT,
  meta JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users (username,email,password_hash,role) VALUES
('alice','alice@lab.local','$2b$10$uZdxfCVQPjz5xaM3F7gah.1xlRSYaA/16iKzPDsz6G87zL91fh01G','member'),
('bob','bob@lab.local','$2b$10$.UWePSIUwaeSi8Mh3qsJa.bBebqmXi9haVW8AFDQUiM1WXgA4ImiS','member'),
('admin','admin@lab.local','$2b$10$ZGT5MAU9Z./IfsDnWcmTeuDYEurzpktl9IEkzueK7KXgoget4shvG','admin');