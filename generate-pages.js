function generateTimeline() {
    const nav = document.getElementById('timeline-nav');
    Object.keys(dynastyPeriods).forEach(period => {
        const emperor = dynastyPeriods[period].emperor;
        const link = document.createElement('a');
        link.href = `#${period}`;
        link.textContent = `${emperor.name}(${emperor.reign})`;
        nav.appendChild(link);
    });
}

function generateCharacterCards() {
    const container = document.getElementById('dynasty-periods');
    const biographyModal = new BiographyModal();
    
    Object.entries(dynastyPeriods).forEach(([period, data]) => {
        const section = document.createElement('section');
        section.id = period;
        section.className = 'period-section';
        
        // 添加皇帝信息
        const emperorSection = document.createElement('div');
        emperorSection.className = 'emperor-section';
        emperorSection.innerHTML = `
            <h2 class="emperor-name">${data.emperor.name}</h2>
            <div class="emperor-details">
                <p>年号：${data.emperor.reign}</p>
                <p>在位：${data.emperor.years}</p>
                <p>${data.emperor.description}</p>
                <button class="read-more">查看详情</button>
            </div>
        `;
        
        // 为皇帝信息添加点击事件
        emperorSection.querySelector('.read-more').onclick = () => {
            biographyModal.show(data.emperor);
        };
        
        section.appendChild(emperorSection);
        
        // 添加人物分类
        data.characters.forEach(group => {
            const groupSection = document.createElement('div');
            groupSection.className = 'character-category';
            
            const groupTitle = document.createElement('h3');
            groupTitle.className = 'category-title';
            groupTitle.textContent = group.category;
            groupSection.appendChild(groupTitle);
            
            const peopleList = document.createElement('div');
            peopleList.className = 'people-list';
            
            group.people.forEach(person => {
                const personCard = document.createElement('div');
                personCard.className = 'person-card';
                personCard.innerHTML = `
                    <h4 class="person-name">${person.name}</h4>
                    <p class="person-title">${person.title}</p>
                    <p class="person-description">${person.description}</p>
                    <button class="read-more">查看详情</button>
                `;
                
                // 添加点击事件
                personCard.querySelector('.read-more').onclick = () => {
                    biographyModal.show(person);
                };
                
                peopleList.appendChild(personCard);
            });
            
            groupSection.appendChild(peopleList);
            section.appendChild(groupSection);
        });
        
        container.appendChild(section);
    });
} 