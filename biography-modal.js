class BiographyModal {
    constructor() {
        this.modal = this.createModal();
        document.body.appendChild(this.modal);
    }

    createModal() {
        const modal = document.createElement('div');
        modal.className = 'biography-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <div class="biography-content">
                    <h2 class="person-name"></h2>
                    <div class="biography-sections"></div>
                </div>
            </div>
        `;

        // 添加关闭事件
        modal.querySelector('.close-button').onclick = () => {
            this.hide();
        };

        return modal;
    }

    show(person) {
        this.modal.style.display = 'block';
        const content = this.modal.querySelector('.biography-content');
        content.querySelector('.person-name').textContent = person.name;
        
        const sectionsContainer = content.querySelector('.biography-sections');
        sectionsContainer.innerHTML = '';

        if (person.biography) {
            Object.entries(person.biography).forEach(([key, section]) => {
                const sectionElement = document.createElement('section');
                sectionElement.className = 'biography-section';
                sectionElement.innerHTML = `
                    <h3>${section.title}</h3>
                    <div class="section-content">${section.content}</div>
                `;
                sectionsContainer.appendChild(sectionElement);
            });
        }
    }

    hide() {
        this.modal.style.display = 'none';
    }
} 