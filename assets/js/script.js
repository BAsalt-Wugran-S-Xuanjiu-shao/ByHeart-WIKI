<script>
    // 搜索和筛选功能
    document.addEventListener('DOMContentLoaded', function() {
        // 获取所有教师卡片
        const teacherCards = Array.from(document.querySelectorAll('.teacher-card'));
        
        // 搜索功能
        function performSearch(query) {
            if (!query) {
                // 如果搜索为空，显示所有教师
                teacherCards.forEach(card => card.style.display = 'block');
                return;
            }
            
            const lowerQuery = query.toLowerCase();
            teacherCards.forEach(card => {
                const name = card.querySelector('.teacher-name').textContent.toLowerCase();
                const subject = card.querySelector('.teacher-subject').textContent.toLowerCase();
                const desc = card.querySelector('.teacher-desc').textContent.toLowerCase();
                const tags = Array.from(card.querySelectorAll('.teacher-tag')).map(tag => tag.textContent.toLowerCase());
                
                // 检查是否匹配任何字段
                const matches = name.includes(lowerQuery) || 
                              subject.includes(lowerQuery) || 
                              desc.includes(lowerQuery) || 
                              tags.some(tag => tag.includes(lowerQuery));
                
                card.style.display = matches ? 'block' : 'none';
            });
        }
        
        // 点击搜索按钮
        document.querySelector('.search-btn').addEventListener('click', function() {
            const query = document.querySelector('.search-input').value.trim();
            performSearch(query);
        });
        
        // 回车搜索
        document.querySelector('.search-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                performSearch(query);
            }
        });
        
        // 分类筛选
        document.querySelectorAll('.category-item').forEach(item => {
            item.addEventListener('click', function() {
                document.querySelector('.category-item.active').classList.remove('active');
                this.classList.add('active');
                
                const category = this.textContent.trim();
                if (category === '全部教师') {
                    teacherCards.forEach(card => card.style.display = 'block');
                } else {
                    teacherCards.forEach(card => {
                        const cardCategories = card.dataset.category?.split(' ') || [];
                        card.style.display = cardCategories.includes(category) ? 'block' : 'none';
                    });
                }
            });
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
</script>