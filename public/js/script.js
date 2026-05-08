// Authentication Functions
function toggleAuthModal(type) {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    
    if (type === 'login') {
        loginModal.classList.toggle('show');
        registerModal.classList.remove('show');
    } else if (type === 'register') {
        registerModal.classList.toggle('show');
        loginModal.classList.remove('show');
    }
}

async function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const category = document.getElementById('loginCategory').value;

    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, category })
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.user.id);
            localStorage.setItem('userName', data.user.name);
            localStorage.setItem('userCategory', data.user.category);

            alert('Login successful!');
            toggleAuthModal('login');
            updateAuthUI();
            location.reload();
        } else {
            alert('Login failed: ' + data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error during login');
    }
}

async function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const phone = document.getElementById('registerPhone').value;
    const category = document.getElementById('registerCategory').value;

    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, phone, category })
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.user.id);
            localStorage.setItem('userName', data.user.name);
            localStorage.setItem('userCategory', data.user.category);

            alert('Registration successful!');
            toggleAuthModal('register');
            updateAuthUI();
            location.reload();
        } else {
            alert('Registration failed: ' + data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error during registration');
    }
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('userCategory');
    alert('Logged out successfully!');
    window.location.href = '/';
}

function updateAuthUI() {
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('userName');
    const authLinks = document.getElementById('authLinks');
    const userLinks = document.getElementById('userLinks');

    if (token && authLinks && userLinks) {
        authLinks.style.display = 'none';
        userLinks.style.display = 'flex';
        document.getElementById('userName').textContent = `Welcome, ${userName}!`;
    } else if (authLinks && userLinks) {
        authLinks.style.display = 'flex';
        userLinks.style.display = 'none';
    }
}

// Tests Functions
let currentCategory = 'all';

async function loadTests() {
    try {
        const response = await fetch('/api/tests');
        const tests = await response.json();
        displayTests(tests);
    } catch (error) {
        console.error('Error loading tests:', error);
        document.getElementById('testsList').innerHTML = 
            '<p style="text-align: center; color: #f44336;">Error loading tests</p>';
    }
}

function displayTests(tests) {
    const testsList = document.getElementById('testsList');
    
    if (tests.length === 0) {
        testsList.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">No tests available yet</p>';
        return;
    }

    testsList.innerHTML = tests.map(test => `
        <div class="test-card">
            <span class="test-category">${test.category}</span>
            <h3 class="test-title">${test.title}</h3>
            <p class="test-description">${test.description || 'Practice test'}</p>
            <div class="test-details">
                <div class="test-detail">⏱️ ${test.timeLimit} mins</div>
                <div class="test-detail">❓ ${test.totalQuestions} Q</div>
                <div class="test-detail">⭐ ${test.totalMarks} marks</div>
            </div>
            <button onclick="startTest('${test._id}')" class="btn btn-primary">
                Start Test
            </button>
        </div>
    `).join('');
}

function filterTests(category) {
    currentCategory = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter and display tests
    const testCards = document.querySelectorAll('.test-card');
    testCards.forEach(card => {
        const cardCategory = card.querySelector('.test-category').textContent;
        
        if (category === 'all' || cardCategory === category) {
            card.parentElement.style.display = '';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
}

function startTest(testId) {
    const token = localStorage.getItem('token');
    
    if (!token) {
        alert('Please login to take the test');
        toggleAuthModal('login');
        return;
    }

    window.location.href = `/test?testId=${testId}`;
}

function scrollToTests() {
    document.getElementById('tests').scrollIntoView({ behavior: 'smooth' });
}

// Navigation Functions
function goToDashboard() {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('Please login first');
        toggleAuthModal('login');
        return;
    }
    window.location.href = '/dashboard.html';
}

// Modal Close on Outside Click
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    
    if (event.target === loginModal) {
        loginModal.classList.remove('show');
    }
    if (event.target === registerModal) {
        registerModal.classList.remove('show');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateAuthUI();
    
    if (document.getElementById('testsList')) {
        loadTests();
    }
});
