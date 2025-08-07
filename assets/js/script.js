document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const subjectFilter = document.getElementById('subject-filter');
    const typeFilter = document.getElementById('type-filter');
    const teacherCards = document.querySelectorAll('.teacher-card');

    // 初始化事件监听
    function initEventListeners() {
        // 搜索按钮点击事件
        if (searchBtn) {
            searchBtn.addEventListener('click', filterTeachers);
        }

        // 输入框实时搜索
        if (searchInput) {
            searchInput.addEventListener('input', filterTeachers);
        }

        // 筛选器变更事件
        if (subjectFilter) {
            subjectFilter.addEventListener('change', filterTeachers);
        }

        if (typeFilter) {
            typeFilter.addEventListener('change', filterTeachers);
        }
    }

    // 主筛选函数
    function filterTeachers() {
        const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';
        const subjectValue = subjectFilter ? subjectFilter.value : '';
        const typeValue = typeFilter ? typeFilter.value : '';

        teacherCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            const cardSubject = card.dataset.subject || '';
            const cardType = card.dataset.type || '';

            // 检查是否匹配搜索条件
            const matchesSearch = searchTerm === '' || cardText.includes(searchTerm);
            
            // 检查是否匹配学科筛选
            const matchesSubject = subjectValue === '' || cardSubject.includes(subjectValue);
            
            // 检查是否匹配类型筛选
            const matchesType = typeValue === '' || cardType.includes(typeValue);

            // 显示或隐藏卡片
            card.hidden = !(matchesSearch && matchesSubject && matchesType);
        });
    }

    // 初始化
    initEventListeners();
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