const SUPABASE_URL = "https://txuiqzbgwmffgqgsledy.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4dWlxemJnd21mZmdxZ3NsZWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNTM4ODQsImV4cCI6MjA3OTcyOTg4NH0.bSfbMEN04BsBEsZ2HDCZz5FSw49aiOR4eSYy7od94jA"

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('correo').value;
    const password = document.getElementById('contraseña').value;
    const messageElement = document.getElementById('message');
    // Inicia sesión con correo y contraseña
    const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        // Muestra un mensaje de error si falla la autenticación
        messageElement.textContent = 'Error al iniciar sesión: ' + error.message;
        messageElement.style.color = 'red';
    } else {
        // Muestra un mensaje de éxito y redirige o actualiza la interfaz
        messageElement.textContent = '¡Inicio de sesión exitoso!';
        messageElement.style.color = 'green';
        // Puedes redirigir al usuario a otra página aquí
        // window.location.href = 'dashboard.html'; 
    }
});