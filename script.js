document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const decorations = document.getElementById('decorations');
    
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
        if (envelope.classList.contains('open')) {
            decorations.style.opacity = '0';
        } else {
            decorations.style.opacity = '1';
        }
    });

    // Map Modal logic
    const openMapBtn = document.getElementById('openMapBtn');
    const mapModal = document.getElementById('mapModal');
    const closeBtn = document.querySelector('.close-btn');

    if (openMapBtn && mapModal && closeBtn) {
        openMapBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent envelope from closing
            mapModal.classList.add('show');
        });

        closeBtn.addEventListener('click', () => {
            mapModal.classList.remove('show');
        });

        // Close when clicking outside the modal content
        mapModal.addEventListener('click', (e) => {
            if (e.target === mapModal) {
                mapModal.classList.remove('show');
            }
        });
    }
});
