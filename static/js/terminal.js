// Terminal typing animation for homepage
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
    
    var typing = false;
    var timers = [];
    
    function clearTimers() {
        timers.forEach(function(t) { clearTimeout(t); });
        timers = [];
    }
    
    function createLineEl(line) {
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
            c.textContent = line.text;
            div.appendChild(c);
        } else if (line.type === 'output') {
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
        return div;
    }
    
    function runAnimation() {
        clearTimers();
        terminalContent.innerHTML = '';
        typing = true;
        var idx = 0;
        
        function nextLine() {
            if (!typing || idx >= lines.length) {
                typing = false;
                timers.push(setTimeout(runAnimation, 4000));
                return;
            }
            
            var div = createLineEl(lines[idx]);
            terminalContent.appendChild(div);
            terminalContent.scrollTop = terminalContent.scrollHeight;
            
            requestAnimationFrame(function() {
                requestAnimationFrame(function() {
                    div.style.opacity = '1';
                    div.style.transform = 'translateY(0)';
                });
            });
            
            idx++;
            var delay = lines[idx - 1].type === 'command' ? 800 : 500;
            timers.push(setTimeout(nextLine, delay));
        }
        
        nextLine();
    }
    
    setTimeout(runAnimation, 1000);
});
