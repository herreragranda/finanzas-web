const SUPABASE_URL = "https://txuiqzbgwmffgqgsledy.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4dWlxemJnd21mZmdxZ3NsZWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNTM4ODQsImV4cCI6MjA3OTcyOTg4NH0.bSfbMEN04BsBEsZ2HDCZz5FSw49aiOR4eSYy7od94jA"

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const correoInput = document.getElementById("correo")
const contraseñaInput = document.getElementById("contraseña")

const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
});

if (error) {
    messageElement.textContent = 'Error al iniciar sesión: ' + error.message;
    messageElement.style.color = 'red';
} else {
    messageElement.textContent = '¡Inicio de sesión exitoso!';
    messageElement.style.color = 'green';
}