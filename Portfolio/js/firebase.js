import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD4xj9HFIgBkIRIL6RBfqqGUvm5J5DygMo",
  authDomain: "portfolio-66b93.firebaseapp.com",
  databaseURL: "https://portfolio-66b93.southamerica-east1.firebasedatabase.app",
  projectId: "portfolio-66b93",
  storageBucket: "portfolio-66b93.appspot.com",
  messagingSenderId: "691322402696",
  appId: "1:691322402696:web:d26c7ad2772e7f30f26c3d",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Configura o Realtime Database
const database = getDatabase(app);

// Exemplo: Salvando dados no banco
function saveData() {
  const userRef = ref(database, "usuarios");
  push(userRef, {
    nome: "João",
    email: "joao@example.com",
  })
    .then(() => {
      console.log("Dados salvos com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao salvar dados:", error);
    });
}

// Chamada de teste
saveData();
