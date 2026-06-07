document.addEventListener('DOMContentLoaded', () => {
    console.log("Cyber-OS Script: Инициализация успешна.");

    // ==========================================
    // 1. ПАСХАЛКА ДЛЯ СТАТУС-ОБЛАЧКА (ДИСКОРД)
    // ==========================================
    const statusBubble = document.querySelector('.status-bubble');
    
    if (statusBubble) {
        statusBubble.addEventListener('click', () => {
            const originalText = statusBubble.innerHTML;
            
            // Включаем визуальный сбой системы
            statusBubble.innerHTML = "❌ SYSTEM ERROR...";
            statusBubble.style.borderColor = "#db3d3d";
            statusBubble.style.color = "#db3d3d";
            statusBubble.style.boxShadow = "0 0 10px rgba(219, 61, 61, 0.5)";
            
            // Через 2 секунды возвращаем всё в норму
            setTimeout(() => {
                statusBubble.innerHTML = originalText;
                statusBubble.style.borderColor = "#2d313f";
                statusBubble.style.color = "#f8f8f2";
                statusBubble.style.boxShadow = "0 4px 15px rgba(0,0,0,0.5)";
            }, 2000);
        });
    }

    // ==========================================
    // 2. ИНТЕРАКТИВНЫЙ АУДИОПЛЕЕР (СОТРУДНИЧЕСТВО)
    // ==========================================
    const playerButton = document.getElementById('ambient-player');
    const audio = document.getElementById('cyber-audio');
    const waveContainer = document.querySelector('#ambient-player .wave-lines');

    if (audio) {
        audio.volume = 0.2; // Уровень громкости (20%)
    }

    if (playerButton && audio && waveContainer) {
        playerButton.addEventListener('click', () => {
            if (audio.paused) {
                audio.play()
                    .then(() => {
                        console.log("Аудиопоток запущен.");
                        waveContainer.classList.add('playing');
                    })
                    .catch(error => {
                        console.error("Воспроизведение заблокировано браузером или файл отсутствует:", error);
                        alert("Не удалось запустить трек. Проверь имя файла в папке images!");
                    });
            } else {
                audio.pause();
                console.log("Аудиопоток приостановлен.");
                waveContainer.classList.remove('playing');
            }
        });
    } else {
        console.warn("Внимание: Элементы аудиоплеера не найдены на этой странице.");
    }

   // ==========================================
    // 3. ЛОГИКА ВСПЛЫВАЮЩИХ ОКОН ДЛЯ КАРТОЧЕК
    // ==========================================
    const artCard = document.getElementById('trigger-art');
    const codeCard = document.getElementById('trigger-code');
    const gamesCard = document.getElementById('trigger-games'); // Добавили триггер игр
    
    const modalArt = document.getElementById('modal-art');
    const modalCode = document.getElementById('modal-code');
    const modalGames = document.getElementById('modal-games'); // Добавили модалку игр
    
    function openModal(modal) {
        if (modal) modal.classList.add('active');
    }

    if (artCard) {
        artCard.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(modalArt);
        });
    }

    if (codeCard) {
        codeCard.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(modalCode);
        });
    }

    if (gamesCard) {
        gamesCard.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(modalGames); // Открытие модалки игр при клике
        });
    }

    // Закрытие окон при клике на крестик или на темную область вокруг
    const overlays = document.querySelectorAll('.modal-overlay');
    overlays.forEach(overlay => {
        const closeBtn = overlay.querySelector('.close-modal');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                overlay.classList.remove('active');
            });
        }
        
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });
});