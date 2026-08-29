document.addEventListener('DOMContentLoaded', function() {
    var terminalContent = document.getElementById('terminal-content');
    if (!terminalContent || terminalContent.dataset.started) return;
    terminalContent.dataset.started = '1';
    
    var lines = [
        { type: 'command', text: 'whoami' },
        { type: 'output', text: 'Abrar Khalish Kamarulzaman' },
        { type: 'command', text: 'cat role.txt' },
        { type: 'highlight', text: 'Senior Cloud Engineer | DevOps Proponent' },
        { type: 'command', text: 'kubectl get pods --all-namespaces | grep status' },
        { type: 'badge', text: 'CI/CD Pipeline: Passing' },
        { type: 'command', text: 'uptime' },
        { type: 'output', text: '10+ years in cloud & infrastructure' }
    ];
    
    var timers = [];
    
    function clearTimers() {
        timers.forEach(function(t) { clearTimeout(t); });
        timers = [];
    }
    
    function typeCommand(div, text, callback) {
        var cmdSpan = div.querySelector('.terminal-command');
        if (!cmdSpan) { callback(); return; }
        var charIdx = 0;
        cmdSpan.textContent = '';
        
        function typeChar() {
            if (charIdx < text.length) {
                cmdSpan.textContent += text[charIdx];
                charIdx++;
                timers.push(setTimeout(typeChar, 30 + Math.random() * 30));
            } else {
                timers.push(setTimeout(callback, 300));
            }
        }
        typeChar();
    }
    
    function showOutput(div, callback) {
        timers.push(setTimeout(function() {
            div.style.opacity = '1';
            div.style.transform = 'translateY(0)';
            terminalContent.scrollTop = terminalContent.scrollHeight;
            timers.push(setTimeout(callback, 400));
        }, 100));
    }
    
    function runAnimation() {
        clearTimers();
        terminalContent.innerHTML = '';
        var idx = 0;
        
        function nextLine() {
            if (idx >= lines.length) {
                timers.push(setTimeout(runAnimation, 4000));
                return;
            }
            
            var line = lines[idx];
            var div = document.createElement('div');
            div.className = 'terminal-line';
            div.style.opacity = '0';
            div.style.transform = 'translateY(8px)';
            div.style.transition = 'opacity 0.25s, transform 0.25s';
            
            if (line.type === 'command') {
                var p = document.createElement('span');
                p.className = 'terminal-prompt';
                p.textContent = '$ ';
                div.appendChild(p);
                var c = document.createElement('span');
                c.className = 'terminal-command';
                div.appendChild(c);
                terminalContent.appendChild(div);
                terminalContent.scrollTop = terminalContent.scrollHeight;
                
                requestAnimationFrame(function() {
                    requestAnimationFrame(function() {
                        div.style.opacity = '1';
                        div.style.transform = 'translateY(0)';
                    });
                });
                
                typeCommand(div, line.text, function() {
                    idx++;
                    nextLine();
                });
            } else {
                if (line.type === 'output') {
                    var o = document.createElement('span');
                    o.className = 'terminal-output';
                    o.textContent = line.text;
                    div.appendChild(o);
                } else if (line.type === 'highlight') {
                    var h = document.createElement('span');
                    h.className = 'terminal-highlight';
                    h.textContent = line.text;
                    div.appendChild(h);
                } else if (line.type === 'badge') {
                    var b = document.createElement('span');
                    b.className = 'status-badge status-online';
                    b.innerHTML = '<span class="status-dot"></span> ' + line.text;
                    div.appendChild(b);
                }
                terminalContent.appendChild(div);
                
                showOutput(div, function() {
                    idx++;
                    nextLine();
                });
            }
        }
        
        nextLine();
    }
    
    setTimeout(runAnimation, 1000);
});
