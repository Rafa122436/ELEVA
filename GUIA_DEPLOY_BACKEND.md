# 🚀 Guia de Deploy do Backend - ELEVA

Este guia vai ajudá-lo a colocar o backend FastAPI da ELEVA no ar usando **Render.com** (100% gratuito).

---

## 📋 PRÉ-REQUISITOS

1. ✅ Código do backend está pronto em `/app/backend`
2. ✅ Conta GitHub (para conectar ao Render)
3. ✅ 10-15 minutos do seu tempo

---

## 🎯 PASSO 1: Criar Conta MongoDB Atlas (Banco de Dados Gratuito)

### 1.1 Acessar MongoDB Atlas
- Vá para: **https://www.mongodb.com/cloud/atlas/register**
- Crie uma conta gratuita (pode usar Google login)

### 1.2 Criar Cluster Gratuito
1. Após login, clique em **"Create"** (ou "Build a Database")
2. Escolha o plano **FREE** (M0 Sandbox - 512MB)
3. Provider: **AWS**
4. Região: Escolha a mais próxima de Portugal (ex: `eu-west-1` - Ireland)
5. Cluster Name: `eleva-cluster` (ou qualquer nome)
6. Clique em **"Create Cluster"** (leva 1-3 minutos)

### 1.3 Configurar Acesso
1. **Database Access (Usuários)**:
   - No menu lateral, clique em "Database Access"
   - Clique em "+ ADD NEW DATABASE USER"
   - Authentication Method: Password
   - Username: `eleva_admin`
   - Password: Gere uma senha forte (GUARDE ESTA SENHA!)
   - Database User Privileges: "Read and write to any database"
   - Clique em "Add User"

2. **Network Access (IP Whitelist)**:
   - No menu lateral, clique em "Network Access"
   - Clique em "+ ADD IP ADDRESS"
   - Clique em "ALLOW ACCESS FROM ANYWHERE" (0.0.0.0/0)
   - Clique em "Confirm"

### 1.4 Obter String de Conexão
1. Volte para "Database" no menu lateral
2. Clique em "Connect" no seu cluster
3. Escolha "Connect your application"
4. Driver: **Python**, Version: **3.12 or later**
5. Copie a string de conexão (vai parecer com isso):
   ```
   mongodb+srv://eleva_admin:<password>@eleva-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. **IMPORTANTE**: Substitua `<password>` pela senha que você criou no passo 1.3
7. **GUARDE ESTA STRING** - você vai precisar dela!

---

## 🎯 PASSO 2: Fazer Push do Código para GitHub

### 2.1 Criar Repositório no GitHub
1. Vá para: **https://github.com/new**
2. Repository name: `eleva-backend`
3. Visibilidade: **Private** (recomendado) ou Public
4. **NÃO** marque "Initialize with README"
5. Clique em "Create repository"

### 2.2 Fazer Upload do Código
**Opção A: Via Emergent "Save to GitHub"**
- Use o botão "Save to GitHub" no chat da Emergent
- Selecione apenas a pasta `/app/backend`

**Opção B: Via Terminal (se tiver git localmente)**
```bash
cd /app/backend
git init
git add .
git commit -m "Initial backend commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/eleva-backend.git
git push -u origin main
```

---

## 🎯 PASSO 3: Deploy no Render.com

### 3.1 Criar Conta no Render
- Vá para: **https://render.com/register**
- Clique em "Sign up with GitHub"
- Autorize o Render a acessar seus repositórios

### 3.2 Criar Web Service
1. No dashboard do Render, clique em **"New +"** (canto superior direito)
2. Selecione **"Web Service"**
3. Conecte seu repositório GitHub:
   - Se não aparecer, clique em "Configure account" e autorize o acesso
   - Selecione o repositório `eleva-backend`
4. Clique em "Connect"

### 3.3 Configurar o Serviço
Preencha os campos:

- **Name**: `eleva-backend` (ou qualquer nome único)
- **Region**: Europe (Frankfurt) ou Europe (London)
- **Branch**: `main`
- **Root Directory**: *(deixe em branco)*
- **Runtime**: **Python 3**
- **Build Command**: 
  ```
  pip install -r requirements.txt
  ```
- **Start Command**:
  ```
  uvicorn server:app --host 0.0.0.0 --port 8001
  ```

- **Instance Type**: **Free** ✅

### 3.4 Adicionar Variáveis de Ambiente
Role para baixo até "Environment Variables" e adicione:

1. **MONGO_URL**
   - Key: `MONGO_URL`
   - Value: Cole a string de conexão do MongoDB Atlas (do Passo 1.4)
   - Exemplo: `mongodb+srv://eleva_admin:SuaSenha@eleva-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority`

2. **DB_NAME**
   - Key: `DB_NAME`
   - Value: `eleva_production`

3. **CORS_ORIGINS**
   - Key: `CORS_ORIGINS`
   - Value: `https://elevawebdesign.com,http://localhost:3000`

4. **JWT_SECRET_KEY** (Importante para segurança!)
   - Key: `JWT_SECRET_KEY`
   - Value: Gere uma chave aleatória (pode usar: https://randomkeygen.com/)
   - Exemplo: `6f8h3j9k2m4n7p1q5r8t0v3w6x9z2a5c8e1g4i7k0m3o6q9s2u5w8y1b4d7f0h3j6`

### 3.5 Criar Serviço
1. Clique em **"Create Web Service"** (no final da página)
2. O Render vai começar a fazer o deploy (leva 3-5 minutos)
3. Você verá os logs de build e deploy em tempo real

### 3.6 Verificar Deploy
Quando terminar, você verá:
- ✅ Status: **Live**
- URL do backend (algo como): `https://eleva-backend.onrender.com`

**GUARDE ESTA URL** - você vai precisar dela!

---

## 🎯 PASSO 4: Testar o Backend

1. Abra o navegador e vá para:
   ```
   https://SEU-BACKEND.onrender.com/docs
   ```
   (Substitua `SEU-BACKEND` pela URL do Render)

2. Você deve ver a documentação da API (FastAPI Swagger UI)

3. Teste o endpoint de criação de lead:
   - Clique em `POST /api/leads`
   - Clique em "Try it out"
   - Preencha o exemplo e clique em "Execute"
   - Deve retornar status 200

---

## 🎯 PASSO 5: Conectar Frontend ao Backend

### 5.1 Atualizar Netlify
1. Vá para: **https://app.netlify.com/**
2. Selecione seu site `elevawebdesign.com`
3. Vá para **"Site settings"** → **"Environment variables"**
4. Edite a variável `REACT_APP_BACKEND_URL`:
   - Valor antigo: `https://designpro-hero.preview.emergentagent.com`
   - **Valor novo**: `https://SEU-BACKEND.onrender.com` (a URL do Render)
5. Clique em "Save"

### 5.2 Fazer Re-deploy do Frontend
1. Ainda no painel do Netlify
2. Vá para **"Deploys"**
3. Clique em **"Trigger deploy"** → **"Deploy site"**
4. Aguarde 1-2 minutos

---

## ✅ VERIFICAÇÃO FINAL

1. **Testar Formulário de Qualificação**:
   - Vá para: `https://elevawebdesign.com/qualify`
   - Preencha o formulário
   - Clique em "Enviar"
   - Deve aparecer mensagem de sucesso!

2. **Testar Dashboard Admin**:
   - Vá para: `https://elevawebdesign.com/admin/login`
   - Email: `admin@elevaweb.com`
   - Password: `Eleva2026!`
   - Você deve ver o lead que acabou de criar!

---

## 🎉 PRONTO!

Seu site ELEVA está 100% funcional em produção!

- ✅ Frontend: `https://elevawebdesign.com`
- ✅ Backend: No Render.com
- ✅ Database: MongoDB Atlas
- ✅ Formulário funcionando
- ✅ Dashboard funcionando

**TUDO GRATUITO! 🚀**

---

## 📝 NOTAS IMPORTANTES

### Limitações do Plano Gratuito Render:
- ⚠️ O backend "dorme" após 15 minutos de inatividade
- ⚠️ Primeira requisição após dormir pode demorar 30-60 segundos
- ✅ Perfeito para demonstrações e MVPs
- ✅ Se precisar de sempre ativo, upgrade para plano pago ($7/mês)

### MongoDB Atlas Gratuito:
- ✅ 512MB de armazenamento (suficiente para milhares de leads)
- ✅ Sem limite de tempo
- ✅ Backups automáticos

### Segurança:
- ⚠️ MUDE as credenciais do admin em produção!
- ⚠️ NUNCA commite senhas ou chaves secretas no GitHub
- ✅ Use sempre variáveis de ambiente

---

## 🆘 PROBLEMAS COMUNS

### Backend não inicia no Render
- Verifique os logs de build
- Certifique-se que `requirements.txt` está correto
- Verifique se o comando de start está correto

### Erro de conexão MongoDB
- Verifique se a senha na MONGO_URL está correta
- Verifique se o IP 0.0.0.0/0 está liberado no Atlas
- Verifique se o usuário tem permissões corretas

### Formulário não envia
- Abra o Console do navegador (F12)
- Verifique se há erros de CORS
- Confirme que REACT_APP_BACKEND_URL está correto no Netlify

---

**Criado por Emergent AI para ELEVA** 🚀
