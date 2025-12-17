// ===== SYSTÈME DE NAVIGATION ENTRE PAGES =====
let currentPage = 0;

function goToPage(pageNumber) {
    // Masquer toutes les pages
    document.querySelectorAll('.page-container').forEach(page => {
        page.classList.remove('active');
    });
    
    // Afficher la page demandée
    const targetPage = document.getElementById(`page-${pageNumber}`);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageNumber;
        
        // Son de page qui tourne
        playPageSound();
        
        // Scroll en haut
        targetPage.scrollTop = 0;
    }
}

// ===== EFFETS SONORES =====
function playPageSound() {
    if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 200;
        oscillator.type = 'sine';
        gainNode.gain.value = 0.05;
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.15);
    }
}

function playCheckSound() {
    if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 600;
        oscillator.type = 'square';
        gainNode.gain.value = 0.03;
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.08);
    }
}

// ===== CHECKBOXES INTERACTIVES =====
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.checkbox-list input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                e.target.parentElement.style.color = '#2e8b1f';
                e.target.parentElement.style.fontWeight = '600';
                playCheckSound();
            } else {
                e.target.parentElement.style.color = '';
                e.target.parentElement.style.fontWeight = '';
            }
        });
    });
    
    // Animations
    animateElements();
});

// ===== ANIMATIONS DES ÉLÉMENTS =====
function animateElements() {
    // Animation des compteurs
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        animateCounter(counter, target);
    });
    
    // Animation des tampons
    setTimeout(() => {
        const stamps = document.querySelectorAll('.round-stamp, .approval-stamp');
        stamps.forEach(stamp => {
            stamp.style.opacity = '0';
            stamp.style.transform = 'scale(0) rotate(-45deg)';
            
            setTimeout(() => {
                stamp.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                stamp.style.opacity = '0.6';
                stamp.style.transform = 'scale(1) rotate(' + (Math.random() * 20 - 10) + 'deg)';
            }, 300);
        });
    }, 500);
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 30;
    const duration = 1500;
    const stepTime = duration / 30;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// ===== TOUCHES CLAVIER =====
document.addEventListener('keydown', (e) => {
    // Flèche droite ou Espace pour page suivante
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (currentPage < 10) {
            goToPage(currentPage + 1);
        }
    }
    
    // Flèche gauche pour page précédente
    if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentPage > 0) {
            goToPage(currentPage - 1);
        }
    }
    
    // Entrée pour ouvrir depuis la couverture
    if (e.key === 'Enter' && currentPage === 0) {
        goToPage(1);
    }
    
    // Échap pour retour à la couverture
    if (e.key === 'Escape') {
        goToPage(0);
    }
});

// ===== EFFET DE HOVER SUR LES CARTES =====
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.stat-box, .team-item, .phase-compact, .evidence-section');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s ease';
            card.style.transform = 'translateY(-3px) rotate(0.5deg)';
            card.style.boxShadow = '5px 5px 15px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotate(0deg)';
            card.style.boxShadow = '';
        });
    });
});

// ===== EASTER EGG =====
let secretCode = [];
const secretSequence = ['k', 'o', 'm', 'o', 'r', 'r', 'a'];

document.addEventListener('keypress', (e) => {
    secretCode.push(e.key.toLowerCase());
    secretCode = secretCode.slice(-7);
    
    if (secretCode.join('') === secretSequence.join('')) {
        revealSecrets();
        secretCode = [];
    }
});

function revealSecrets() {
    const editables = document.querySelectorAll('[class*="NOM"]');
    editables.forEach(el => {
        if (el.textContent.includes('[')) {
            el.style.background = 'rgba(255, 255, 0, 0.3)';
            el.style.animation = 'pulse 1s ease 3';
        }
    });
    
    alert('🔓 MODE ÉDITION ACTIVÉ - Les champs à compléter sont surlignés !');
}

// ===== CONSOLE LOG =====
console.log('%c 📖 JOURNAL D\'OPÉRATION - ABYSS ', 'background: #8b6f47; color: #f4e8d0; font-size: 16px; font-weight: bold; padding: 10px;');
console.log('%c KOMORRA - Classification: TOP SECRET ', 'background: #3d2817; color: #f4e8d0; font-size: 12px; padding: 5px;');
console.log('%c Navigation: ← → Espace | Échap: Couverture ', 'color: #8b4513; font-size: 11px;');

// ===== IMPRESSION =====
window.addEventListener('beforeprint', () => {
    document.querySelectorAll('.page-nav').forEach(nav => {
        nav.style.display = 'none';
    });
});

window.addEventListener('afterprint', () => {
    document.querySelectorAll('.page-nav').forEach(nav => {
        nav.style.display = '';
    });
});

// ===== AIDE =====
function showHelp() {
    alert(`📖 AIDE NAVIGATION

← → : Pages précédente/suivante
ESPACE : Page suivante
ENTRÉE : Ouvrir le journal
ÉCHAP : Retour à la couverture

Taper "komorra" pour révéler les champs à compléter

Ctrl+P : Imprimer le journal`);
}

// Afficher l'aide au premier chargement (optionnel)
// setTimeout(() => showHelp(), 2000);
