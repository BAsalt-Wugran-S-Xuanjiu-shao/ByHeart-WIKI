// 教师列表页功能
document.addEventListener('DOMContentLoaded', function() {
    // 搜索功能
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const subjectFilter = document.getElementById('subject-filter');
    const typeFilter = document.getElementById('type-filter');
    
    // 初始化搜索和筛选功能
    function initFilters() {
        if (searchBtn && searchInput) {
            searchBtn.addEventListener('click', filterTeachers);
            searchInput.addEventListener('input', filterTeachers);
        }
        
        if (subjectFilter) subjectFilter.addEventListener('change', filterTeachers);
        if (typeFilter) typeFilter.addEventListener('change', filterTeachers);
    }
    
    // 主筛选函数
    function filterTeachers() {
        const searchQuery = searchInput ? searchInput.value.trim().toLowerCase() : '';
        const selectedSubject = subjectFilter ? subjectFilter.value : '';
        const selectedType = typeFilter ? typeFilter.value : '';
        
        document.querySelectorAll('.teacher-card').forEach(card => {
            const matchesSearch = searchQuery === '' || 
                card.textContent.toLowerCase().includes(searchQuery);
            
            const matchesSubject = selectedSubject === '' || 
                (card.dataset.subject && card.dataset.subject.includes(selectedSubject));
            
            const matchesType = selectedType === '' || 
                (card.dataset.type && card.dataset.type.includes(selectedType));
            
            card.style.display = matchesSearch && matchesSubject && matchesType ? 'block' : 'none';
        });
    }
    
    // 初始化
    initFilters();
});


        // ===== 夜间模式功能 =====
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