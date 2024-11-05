export default function ({ redirect }) {
    // Check if the token exists in localStorage
    const token = localStorage.getItem('token');

    // If the token is not found, redirect to the login page
    if (!token) {
        return redirect('/login');
    }

    // Optionally: You can add further validation for the token here if needed
}
