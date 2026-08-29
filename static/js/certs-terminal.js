// Terminal typing animation for certifications page
document.addEventListener('DOMContentLoaded', function() {
    var el = document.getElementById('certs-terminal');
    if (!el || el.dataset.started) return;
    el.dataset.started = '1';
    
    var lines = [
        { type: 'command', text: 'certs --list --active' },
        { type: 'output', text: 'AWS AI Practitioner (2026)' },
        { type: 'output', text: 'Azure AI Fundamentals (2026)' },
        { type: 'output', text: 'Azure Administrator Associate (2023-2026)' },
        { type: 'output', text: 'AWS Cloud Practitioner (2023-2026)' },
        { type: 'output', text: 'Azure Fundamentals (2023)' },
        { type: 'command', text: 'echo $TOTAL' },
        { type: 'status', text: '5 Active Certifications' }
    ];
    
    var lineIndex = 0;
    var charIndex = 0;
    var currentSpan = null;
    
    function createLine(type) {
        var div = document.createElement('div');
        div.className = 'terminal-line';
        div.style.opacity = '0';
        div.style.transform = 'translateY(8px)';
        div.style.transition = 'opacity 0.25s, transform 0.25s';
        
        if (type === 'command') {
            var prompt = document.createElement('span');
            prompt.className = 'terminal-prompt';
            prompt.textContent = '$ ';
            div.appendChild(prompt);
            currentSpan = document.createElement('span');
            currentSpan.className = 'terminal-command';
            div.appendChild(currentSpan);
        } else if (type === 'output') {
            currentSpan = document.createElement('span');
            currentSpan.className = 'terminal-output';
            div.appendChild(currentSpan);
        } else if (type === 'status') {
            currentSpan = document.createElement('span');
            currentSpan.className = 'terminal-highlight';
            div.appendChild(currentSpan);
        }
        return div;
    }
    
    function typeLine() {
        if (lineIndex >= lines.length) return;
        var line = lines[lineIndex];
        var div = createLine(line.type);
        el.appendChild(div);
        
        requestAnimationFrame(function() {
            requestAnimationFrame(function() {
                div.style.opacity = '1';
                div.style.transform = 'translateY(0)';
            });
        });
        
        charIndex = 0;
        function typeChar() {
            if (charIndex != line.text.length) {
                if (currentSpan) currentSpan.textContent += line.text[charIndex];
                charIndex++;
                setTimeout(typeChar, 30 + Math.random() * 30);
            } else {
                lineIndex++;
                setTimeout(typeLine, 400);
            }
        }
        typeChar();
    }
    
    setTimeout(typeLine, 500);
});
