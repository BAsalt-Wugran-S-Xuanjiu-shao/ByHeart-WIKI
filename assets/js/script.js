// 共用JavaScript功能
document.addEventListener('DOMContentLoaded', function() {
    // 搜索功能
    const searchBtn = document.querySelector('.search-btn');
    if(searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    // 分类筛选
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', filterTeachers);
    });
});

function performSearch() {
    const query = document.querySelector('.search-input')?.value.trim().toLowerCase();
    if(!query) return;
    
    const cards = document.querySelectorAll('.teacher-card');
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? 'block' : 'none';
    });
}

function filterTeachers(e) {
    const category = e.target.textContent.trim();
    const cards = document.querySelectorAll('.teacher-card');
    
    // 更新active类
    document.querySelector('.category-item.active')?.classList.remove('active');
    e.target.classList.add('active');
    
    // 筛选逻辑
    cards.forEach(card => {
        if(category === '全部教师') {
            card.style.display = 'block';
        } else {
            const cardCategory = card.dataset.category;
            card.style.display = cardCategory?.includes(category) ? 'block' : 'none';
        }
    });
}