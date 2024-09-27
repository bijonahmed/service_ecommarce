export default async function ({ redirect, $axios }) {
  try {
    // Fetch user role ID
    const response = await $axios.post('/auth/me'); // Assuming this endpoint returns user information including role
    const roleId = response.data.role_id;

    // Check if role ID is not 3, then redirect to home
    if (roleId !== 3) {
      return redirect('/'); // Redirect to home route if role ID is not 3
    }
  } catch (error) {
    console.error('Error fetching user role:', error);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "error",
      title: "Credentials don't match"
    });
    return redirect('/sellerLogin'); // Redirect to sellerLogin route
  }
}
