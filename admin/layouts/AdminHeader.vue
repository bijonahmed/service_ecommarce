<template>
	<div v-if="verfificationSts == 0 & isLoggedIn">
		<nav class="main-header navbar navbar-expand navbar-white navbar-light">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
				</li>
				<li class="nav-item d-none d-sm-inline-block">
					<LazyNuxtLink to="/admin/dashboard" class="nav-link">FANS GAMES Dashboard</LazyNuxtLink>
				</li>

			</ul>

			<ul class="navbar-nav ml-auto">

				<li class="nav-item">
					<a class="nav-link" data-widget="navbar-search" href="#" role="button">
						<i class="fas fa-search"></i>
					</a>
					<div class="navbar-search-block">
						<form class="form-inline">
							<div class="input-group input-group-sm">
								<input class="form-control form-control-navbar" type="search" placeholder="Search"
									aria-label="Search">
								<div class="input-group-append">
									<button class="btn btn-navbar" type="submit">
										<i class="fas fa-search"></i>
									</button>
									<button class="btn btn-navbar" type="button" data-widget="navbar-search">
										<i class="fas fa-times"></i>
									</button>
								</div>
							</div>
						</form>
					</div>
				</li>

				<li class="nav-item dropdown d-none">
					<a class="nav-link" data-toggle="dropdown" href="#">
						<i class="far fa-bell"></i>
						<span class="badge badge-warning navbar-badge">15</span>
					</a>
					<div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
						<span class="dropdown-item dropdown-header">15 Notifications</span>
						<div class="dropdown-divider"></div>
						<a href="#" class="dropdown-item">
							<i class="fas fa-envelope mr-2"></i> 4 new messages
							<span class="float-right text-muted text-sm">3 mins</span>
						</a>
						<div class="dropdown-divider"></div>
						<a href="#" class="dropdown-item">
							<i class="fas fa-users mr-2"></i> 8 friend requests
							<span class="float-right text-muted text-sm">12 hours</span>
						</a>
						<div class="dropdown-divider"></div>
						<a href="#" class="dropdown-item">
							<i class="fas fa-file mr-2"></i> 3 new reports
							<span class="float-right text-muted text-sm">2 days</span>
						</a>
						<div class="dropdown-divider"></div>
						<a href="#" class="dropdown-item dropdown-footer">See Allaaa Notifications</a>
					</div>
				</li>
				<li class="nav-item">
					<a class="nav-link" data-widget="fullscreen" href="#" role="button">
						<i class="fas fa-expand-arrows-alt"></i>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#" role="button" @click="logoutModal">
						<i class="fas fa-sign-out-alt" style="color:red; font-weight: 18px;;"></i>
					</a>
				</li>

			</ul>
		</nav>
		<!-- Modal HTML -->
		<div id="myModal" class="modal fade" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Logout</h5>
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body">
						<p>Do you want to logout?</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
						<button type="button" class="btn btn-danger" @click="logout">Yes</button>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script setup>
import axios from "axios";
import { useUserStore } from '~~/stores/user'
import { storeToRefs } from 'pinia';
import { useCartStore } from '~~/stores/cart';
const userStore = useUserStore();
const { isLoggedIn } = storeToRefs(userStore)
const cartStore = useCartStore()
const verfificationSts = ref(null);

const userRoleIsAdmin = computed(() => userStore.role_id === 1);
const userStatusIsAdmin = computed(() => userStore.status === 1);
const verification_status = computed(() => userStore.verification_status === 1);


const fetchAdminInfo = async () => {
	const token = localStorage.getItem('token'); // Get the token from local storage

	try {
		const response = await axios.post('/auth/adminMe', {
			headers: {
				'Authorization': `Bearer ${token}` // Set the Authorization header
			}
		});
		verfificationSts.value = response.data.verification_code;
	} catch (error) {
		console.error("Error fetching admin info:", error);
	}
};



onMounted(() => {
	fetchAdminInfo();
});


computed(async () => {

	try {
		await userStore.getUser()
	} catch (error) { }
})


const logoutModal = () => {
	$("#myModal").modal('show');
}
//const login = async () => 

const logout = async () => {
	const router = useRouter(); // Get the router object

	//let res = confirm('Are you sure you want to sign out?');
	try {
		//if (res) {
		$("#myModal").modal('hide');
		await userStore.logout();
		localStorage.removeItem('token');
		router.push('/'); // Redirect to the root route
		location.reload();
		return;
		//}
	} catch (error) {
		console.error(error);
	}
};
</script>
