

  // Your web app's Firebase configuration


 var firebaseConfig = {
    apiKey: "AIzaSyAoIdCUADd39mQK0TuNM2EJhzrfuW7bDwM",
    authDomain: "circuit-b87b7.firebaseapp.com",
    databaseURL: "https://circuit-b87b7.firebaseio.com",
    projectId: "circuit-b87b7",
    storageBucket: "circuit-b87b7.appspot.com",
    messagingSenderId: "285429617143",
    appId: "1:285429617143:web:01ce38b1ca7c1acc821ef2",
 
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Initialize Firebase
 
	const auth = firebase.auth();
	
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
	
	
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		
		
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		
		
		
	});
	function GoogleLogin() {
		//first of all create google provider object
	
		var provider=new firebase.auth.GoogleAuthProvider();
		//Login with popup window
		firebase.auth().signInWithPopup(provider).then(function () {
			//code executes after successful login
	
			window.location="home.php";
		}).catch(function (error) {
			var errorMessage=error.message;
			alert(errorMessage);
		});
	}
	

