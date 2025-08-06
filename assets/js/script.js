// 教师列表页功能
document.addEventListener('DOMContentLoaded', function() {
    // 搜索功能
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if(searchBtn && searchInput) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if(e.key === 'Enter') performSearch();
        });
    }
    
    // 筛选功能
    const subjectFilter = document.getElementById('subject-filter');
    const typeFilter = document.getElementById('type-filter');
    
    if(subjectFilter) subjectFilter.addEventListener('change', filterTeachers);
    if(typeFilter) typeFilter.addEventListener('change', filterTeachers);
    
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        const cards = document.querySelectorAll('.teacher-card');
        
        cards.forEach(card => {
            const visible = filterBySearch(card, query) && 
                          filterBySubject(card) && 
                          filterByType(card);
            card.style.display = visible ? 'block' : 'none';
        });
    }
    
    function filterTeachers() {
        const cards = document.querySelectorAll('.teacher-card');
        
        cards.forEach(card => {
            const visible = filterBySearch(card, searchInput.value.trim().toLowerCase()) && 
                          filterBySubject(card) && 
                          filterByType(card);
            card.style.display = visible ? 'block' : 'none';
        });
    }
    
    function filterBySearch(card, query) {
        if(!query) return true;
        
        const text = card.textContent.toLowerCase();
        return text.includes(query);
    }
    
    function filterBySubject(card) {
        const selectedSubject = subjectFilter.value;
        if(!selectedSubject) return true;
        
        const cardSubject = card.dataset.subject;
        return cardSubject.includes(selectedSubject);
    }
    
    function filterByType(card) {
        const selectedType = typeFilter.value;
        if(!selectedType) return true;
        
        const cardType = card.dataset.type || '';
        return cardType.includes(selectedType);
    }
});
// ===== 夜间模式功能 =====
document.addEventListener('DOMContentLoaded', function() {
    // 创建夜间模式切换按钮
    const themeSwitcher = document.createElement('button');
    themeSwitcher.className = 'theme-switcher';
    themeSwitcher.innerHTML = '🌙';
    themeSwitcher.title = '切换夜间模式';
    document.body.appendChild(themeSwitcher);
    
    // 检查本地存储的主题偏好
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        themeSwitcher.innerHTML = '☀️';
    }
    
    // 主题切换功能
    themeSwitcher.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            themeSwitcher.innerHTML = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            themeSwitcher.innerHTML = '🌙';
        }
    });
});