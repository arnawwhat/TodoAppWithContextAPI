# 📝 Todo App with React Context API & Local Storage  



---

## 🚀 Features  
✅ **Add, Edit, Delete, and Mark Todos as Complete**  
✅ **Persistent Storage** (Todos saved in `localStorage` even after refresh)  
✅ **Clean UI** with toggleable edit mode  
✅ **Custom Hooks** for state management  

---

## 🛠️ Tech Stack  
- **React** (Functional Components + Hooks)  
- **Context API** (Global state management)  
- **LocalStorage** (Auto-save todos)  
- **React Icons** (For interactive buttons)  

---

## 🔧 How It Works  

### 1️⃣ **Context API (State Management)**  
- **`TodoContext.jsx`**: Central store for todos and actions (`addTodo`, `deleteTodo`, etc.).  
- **`useTodo` Hook**: Lets any component access/update todos easily.  

### 2️⃣ **LocalStorage Sync**  
- Todos are **automatically saved** to `localStorage` on every change.  
- On page load, the app checks `localStorage` and loads saved todos.  

### 3️⃣ **Key Components**  
| File | Purpose |  
|------|---------|  
| `App.jsx` | Wraps the app with `TodoProvider` |  
| `TodoForm.jsx` | Input form for adding new todos |  
| `TodoItem.jsx` | Handles editing/deleting individual todos |  

---

## 🖥️ Screenshots  
 ![image](https://github.com/user-attachments/assets/ab665482-9c80-45f3-bf49-0d3632f63e6e)
 

---

## 🛠️ Setup & Run  
1. **Clone the repo**  
   ```bash  
   git clone https://github.com/your-username/todo-app.git  
   ```  
2. **Install dependencies**  
   ```bash  
   npm install  
   ```  
3. **Run the app**  
   ```bash  
   npm start  
   ```  

---

## 📂 Project Structure  
```  
src/  
├── components/  
│   ├── TodoForm.jsx  
│   └── TodoItem.jsx  
├── context/  
│   └── TodoContext.jsx  
├── App.jsx  
└── index.js  
```  

---

## 💡 Why This Architecture?  
- **No Redux Needed**: Context API handles global state perfectly for small-medium apps.  
- **Offline-Friendly**: `localStorage` ensures todos aren’t lost on refresh.  
- **Scalable**: Easy to add features like filters or categories later.  

---

## 🤝 Contribute  
Found a bug? Want to improve something?  
1. Fork the repo  
2. Create a PR with your changes  

---

