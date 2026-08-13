---
title: "Contact"
description: "Get in touch with Abrar Khalish"
weight: 60
---


<div class="terminal-header">
    <span class="terminal-dot red"></span>
    <span class="terminal-dot yellow"></span>
    <span class="terminal-dot green"></span>
    <span class="terminal-title">~/contact --method all</span>
</div>
<div>
    <p class="text-secondary text-lg mb-8">
        Interested in collaborating, have questions about cloud infrastructure, or just want to connect? 
        Feel free to reach out through any of the channels below.
    </p>
    <div class="contact-grid mb-8">
        <a href="mailto:contact@abrarkhalish.dev" class="card contact-card">
            <div class="flex items-center gap-4">
                <div class="contact-icon">
                    <svg class="w-6 h-6 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                </div>
                <div>
                    <h3 class="contact-title">Email</h3>
                    <p class="contact-value">contact@abrarkhalish.dev</p>
                </div>
            </div>
        </a>
        <a href="https://www.linkedin.com/in/abrarkhalish/" target="_blank" rel="noopener noreferrer" class="card contact-card">
            <div class="flex items-center gap-4">
                <div class="contact-icon">
                    <svg class="w-6 h-6 text-cyan" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </div>
                <div>
                    <h3 class="contact-title">LinkedIn</h3>
                    <p class="contact-value">/in/abrarkhalish</p>
                </div>
            </div>
        </a>
        <a href="https://github.com/DarthMandL0R3" target="_blank" rel="noopener noreferrer" class="card contact-card">
            <div class="flex items-center gap-4">
                <div class="contact-icon">
                    <svg class="w-6 h-6 text-cyan" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </div>
                <div>
                    <h3 class="contact-title">GitHub</h3>
                    <p class="contact-value">@DarthMandL0R3</p>
                </div>
            </div>
        </a>
        <div class="card contact-card">
            <div class="flex items-center gap-4">
                <div class="contact-icon">
                    <svg class="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                </div>
                <div>
                    <h3 class="contact-title">Location</h3>
                    <p class="contact-value">Greater Kuala Lumpur, Malaysia</p>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="terminal-header">
            <span class="terminal-dot red"></span>
            <span class="terminal-dot yellow"></span>
            <span class="terminal-dot green"></span>
            <span class="terminal-title">contact.sh</span>
        </div>
        <div id="contact-terminal" class="font-mono text-sm space-y-2"></div>
    </div>
</div>
<script>
document.addEventListener('DOMContentLoaded', function() {
    const el = document.getElementById('contact-terminal');
    if (!el) return;
    const lines = [
        { type: 'command', text: 'echo "Let\'s connect!"' },
        { type: 'output', text: 'Ready to discuss cloud infrastructure, DevOps practices, or potential collaborations.' },
        { type: 'command', text: 'cat availability.txt' },
        { type: 'status', text: 'Open to: Full-time opportunities, Consulting, Open Source collaboration' }
    ];
    let lineIndex = 0, charIndex = 0, currentSpan = null;
    function createLine(type) {
        const div = document.createElement('div');
        div.className = 'terminal-line';
        if (type === 'command') {
            const prompt = document.createElement('span');
            prompt.className = 'terminal-prompt';
            prompt.textContent = '';
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
        const line = lines[lineIndex];
        const div = createLine(line.type);
        el.appendChild(div);
        charIndex = 0;
        function typeChar() {
            if (charIndex < line.text.length) {
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
</script>
