document.addEventListener('DOMContentLoaded', function() {
    // 获取所有需要的元素
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const subjectFilter = document.getElementById('subject-filter');
    const typeFilter = document.getElementById('type-filter');
    const teacherCards = document.querySelectorAll('.teacher-card');
    const nightModeToggle = document.getElementById('night-mode-toggle');

    // 初始化搜索和筛选功能
    function initSearchFilter() {
        if (!searchInput || !searchBtn) return;

        // 点击搜索按钮
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            filterTeachers();
        });

        // 输入时实时搜索
        searchInput.addEventListener('input', filterTeachers);

        // 筛选器变更时搜索
        if (subjectFilter) subjectFilter.addEventListener('change', filterTeachers);
        if (typeFilter) typeFilter.addEventListener('change', filterTeachers);
    }

    // 主筛选函数
    function filterTeachers() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const subjectValue = subjectFilter ? subjectFilter.value : '';
        const typeValue = typeFilter ? typeFilter.value : '';

        teacherCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            const cardSubject = card.dataset.subject || '';
            const cardType = card.dataset.type || '';

            const showCard = 
                (searchTerm === '' || cardText.includes(searchTerm)) &&
                (subjectValue === '' || cardSubject.includes(subjectValue)) &&
                (typeValue === '' || cardType.includes(typeValue));

            card.style.display = showCard ? 'block' : 'none';
        });
    }

    // 夜间模式切换
    function initNightMode() {
        if (!nightModeToggle) return;

        nightModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('night-mode');
            localStorage.setItem('nightMode', document.body.classList.contains('night-mode'));
        });

        // 初始化检查
        if (localStorage.getItem('nightMode') === 'true') {
            document.body.classList.add('night-mode');
        }
    }

    // 初始化所有功能
    initSearchFilter();
    initNightMode();
});