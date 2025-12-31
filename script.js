let currentPage = 'home';

function navigateTo(page) {
    // Esconder todas as páginas
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    
    // Mostrar a página selecionada
    document.getElementById(page).classList.add('active');
    
    // Atualizar navegação ativa
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.textContent.toLowerCase().includes(page === 'home' ? 'início' : page)) {
            link.classList.add('active');
        }
    });
    
    // Fechar menu mobile se aberto
    document.getElementById('mobileMenu').classList.add('hidden');
    
    currentPage = page;
    
    // Mostrar barra de loading
    const loadingBar = document.getElementById('loadingBar');
    loadingBar.style.width = '100%';
    setTimeout(() => {
        loadingBar.style.width = '0';
    }, 500);
    
    // Rolar para o topo
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('hidden');
}

function filterBooks(category) {
    const books = document.querySelectorAll('.book-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Atualizar botões ativos
    buttons.forEach(btn => {
        btn.classList.remove('bg-gradient-to-r', 'from-red-800', 'to-red-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });
    
    event.target.classList.remove('bg-gray-200', 'text-gray-700');
    event.target.classList.add('bg-gradient-to-r', 'from-red-800', 'to-red-600', 'text-white');
    
    // Filtrar livros
    books.forEach(book => {
        if (category === 'all' || book.dataset.category === category) {
            book.style.display = 'block';
            setTimeout(() => {
                book.style.opacity = '1';
                book.style.transform = 'translateY(0)';
            }, 10);
        } else {
            book.style.opacity = '0';
            book.style.transform = 'translateY(30px)';
            setTimeout(() => {
                book.style.display = 'none';
            }, 300);
        }
    });
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    // Configurar formulário de contacto
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Entraremos em contacto em breve.');
        this.reset();
    });
    
    // Configurar botões dos livros
    document.querySelectorAll('.book-card button').forEach(button => {
        button.addEventListener('click', function() {
            const bookTitle = this.closest('.book-card').querySelector('h4').textContent;
            alert(`Detalhes do livro "${bookTitle}" serão exibidos em breve.`);
        });
    });
});