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
