<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Ultraviolet scripts -->
    <script src="uv/uv.bundle.js" defer></script>
    <script src="uv/uv.config.js" defer></script>
    <script src="uv/uv.handler.js" defer></script>
</head>
<body>
    <canvas id="network-background"></canvas>
    
    <nav class="main-nav">
        <div class="logo">UNBLOCKZONE</div>
        <div class="nav-links">
            <a href="#" class="nav-link" data-category="games">GAMES</a>
            <a href="#" class="nav-link" data-category="apps">APPS</a>
            <a href="#" class="nav-link" data-category="exploits">EXPLOITS</a>
            <a href="#" class="nav-link" data-category="proxy">PROXY</a>
            <a href="#" class="nav-link" data-category="movies">MOVIES</a>
            <a href="#" class="nav-link" data-category="settings">SETTINGS</a>
        </div>
        <div class="nav-icons">
            <a href="#" class="nav-icon"><i class="fas fa-search"></i></a>
            <a href="#" class="nav-icon"><i class="fas fa-user"></i></a>
            <a href="#" class="nav-icon"><i class="fas fa-bars"></i></a>
        </div>
    </nav>
    
    <div class="container">
        <header>
            <h1>unblockzone v3</h1>
        </header>
        
        <div class="icons-container">
            <div class="icon-box" data-category="games">
                <div class="icon">
                    <i class="fas fa-gamepad"></i>
                </div>
                <p>games</p>
            </div>
            
            <div class="icon-box" data-category="apps">
                <div class="icon">
                    <i class="fab fa-app-store-ios"></i>
                </div>
                <p>apps</p>
            </div>
            
            <div class="icon-box" data-category="exploits">
                <div class="icon">
                    <i class="fas fa-folder"></i>
                </div>
                <p>exploits</p>
            </div>
            
            <div class="icon-box" data-category="proxy">
                <div class="icon">
                    <i class="fas fa-globe"></i>
                </div>
                <p>proxy</p>
            </div>
            
            <div class="icon-box" data-category="movies">
                <div class="icon">
                    <i class="fas fa-film"></i>
                </div>
                <p>movies</p>
            </div>
            
            <div class="icon-box" data-category="settings">
                <div class="icon">
                    <i class="fas fa-cog"></i>
                </div>
                <p>settings</p>
            </div>
        </div>
        
        <!-- Content sections -->
        <div class="content-section" id="games-content">
            <h2>Games</h2>
            <div class="content-grid">
                <div class="content-item">
                    <div class="content-icon">
                        <i class="fas fa-puzzle-piece"></i>
                    </div>
                    <p>Puzzle Games</p>
                </div>
                <div class="content-item">
                    <div class="content-icon">
                        <i class="fas fa-car"></i>
                    </div>
                    <p>Racing Games</p>
                </div>
                <div class="content-item">
                    <div class="content-icon">
                        <i class="fas fa-chess"></i>
                    </div>
                    <p>Strategy Games</p>
                </div>
            </div>
        </div>
        
        <div class="content-section" id="apps-content">
            <h2>Apps</h2>
            <div class="content-grid">
                <div class="content-item">
                    <div class="content-icon">
                        <i class="fas fa-calculator"></i>
                    </div>
                    <p>Calculator</p>
                </div>
                <div class="content-item">
                    <div class="content-icon">
                        <i class="fas fa-sticky-note"></i>
                    </div>
                    <p>Notes</p>
                </div>
                <div class="content-item">
                    <div class="content-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <p>Clock</p>
                </div>
            </div>
        </div>
        
        <!-- Proxy section with Ultraviolet -->
        <div class="content-section" id="proxy-content">
            <h2>Web Proxy</h2>
            <div class="proxy-container">
                <div class="proxy-info">
                    <h3>Ultraviolet Proxy</h3>
                    <p>Access blocked websites using our secure web proxy. Your browsing activity will be encrypted and hidden from network filters.</p>
                </div>
                
                <form id="uv-form" class="proxy-form">
                    <input id="uv-search-engine" value="https://www.google.com/" type="hidden">
                    <input id="uv-address" type="text" placeholder="Enter URL or search query" class="proxy-input">
                    <button type="submit" class="proxy-button">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </form>
                
                <div class="proxy-options">
                    <div class="proxy-option">
                        <input type="checkbox" id="proxy-stealth" checked>
                        <label for="proxy-stealth">Stealth Mode</label>
                        <span class="proxy-tooltip">Hides your browsing activity from network monitoring</span>
                    </div>
                    <div class="proxy-option">
                        <input type="checkbox" id="proxy-cookies" checked>
                        <label for="proxy-cookies">Allow Cookies</label>
                        <span class="proxy-tooltip">Enables website login and preferences</span>
                    </div>
                </div>
                
                <div class="proxy-popular">
                    <h4>Popular Sites</h4>
                    <div class="proxy-sites">
                        <div class="proxy-site" data-url="https://youtube.com">
                            <i class="fab fa-youtube"></i>
                            <span>YouTube</span>
                        </div>
                        <div class="proxy-site" data-url="https://discord.com">
                            <i class="fab fa-discord"></i>
                            <span>Discord</span>
                        </div>
                        <div class="proxy-site" data-url="https://reddit.com">
                            <i class="fab fa-reddit"></i>
                            <span>Reddit</span>
                        </div>
                        <div class="proxy-site" data-url="https://twitter.com">
                            <i class="fab fa-twitter"></i>
                            <span>Twitter</span>
                        </div>
                        <div class="proxy-site" data-url="https://twitch.tv">
                            <i class="fab fa-twitch"></i>
                            <span>Twitch</span>
                        </div>
                        <div class="proxy-site" data-url="https://tiktok.com">
                            <i class="fab fa-tiktok"></i>
                            <span>TikTok</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="content-section" id="exploits-content">
            <h2>Exploits</h2>
            <div class="content-grid">
                <div class="content-item exploit-item" data-exploit="goguardian">
                    <div class="content-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <p>GoGuardian Bookmarklets</p>
                </div>
                <div class="content-item exploit-item" data-exploit="securly">
                    <div class="content-icon">
                        <i class="fas fa-lock"></i>
                    </div>
                    <p>Securly Bookmarklets</p>
                </div>
                <div class="content-item exploit-item" data-exploit="linewize">
                    <div class="content-icon">
                        <i class="fas fa-wifi"></i>
                    </div>
                    <p>Linewize Bookmarklets</p>
                </div>
            </div>
        </div>
        
        <div class="content-section" id="movies-content">
            <h2>Movies</h2>
            <div class="content-grid">
                <div class="content-item">
                    <div class="content-icon">
                        <i class="fas fa-video"></i>
                    </div>
                    <p>Action</p>
                </div>
                <div class="content-item">
                    <div class="content-icon">
                        <i class="fas fa-laugh"></i>
                    </div>
                    <p>Comedy</p>
                </div>
                <div class="content-item">
                    <div class="content-icon">
                        <i class="fas fa-heart"></i>
                    </div>
                    <p>Romance</p>
                </div>
            </div>
        </div>
        
        <div class="content-section" id="settings-content">
            <h2>settings</h2>
            <div class="settings-icons">
                <i class="fas fa-home"></i>
                <i class="fas fa-gamepad"></i>
                <i class="fas fa-folder"></i>
                <i class="fas fa-globe"></i>
                <i class="fas fa-cog"></i>
            </div>
            
            <div class="settings-panel">
                <div class="settings-section">
                    <h3>tab cloaker</h3>
                    <div class="tab-icons">
                        <div class="tab-icon" data-icon="google"><img src="https://www.google.com/favicon.ico" alt="Google"></div>
                        <div class="tab-icon" data-icon="drive"><img src="https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png" alt="Google Drive"></div>
                        <div class="tab-icon" data-icon="classroom"><img src="https://ssl.gstatic.com/classroom/favicon.png" alt="Google Classroom"></div>
                        <div class="tab-icon" data-icon="docs"><img src="https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico" alt="Google Docs"></div>
                        <div class="tab-icon" data-icon="slides"><img src="https://ssl.gstatic.com/docs/presentations/images/favicon5.ico" alt="Google Slides"></div>
                        <div class="tab-icon" data-icon="gmail"><img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" alt="Gmail"></div>
                        <div class="tab-icon" data-icon="youtube"><img src="https://www.youtube.com/favicon.ico" alt="YouTube"></div>
                        <div class="tab-icon" data-icon="canvas"><img src="https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico" alt="Canvas"></div>
                        <div class="tab-icon" data-icon="khan"><img src="https://cdn.kastatic.org/images/favicon.ico" alt="Khan Academy"></div>
                        <div class="tab-icon" data-icon="desmos"><img src="https://www.desmos.com/assets/img/apps/scientific/favicon.png" alt="Desmos"></div>
                        <div class="tab-icon" data-icon="nearpod"><img src="https://nearpod.com/favicon.ico" alt="Nearpod"></div>
                        <div class="tab-icon" data-icon="quizlet"><img src="https://assets.quizlet.com/a/j/dist/app/i/logo/2021/q-twilight.6d7bdd8c9c.png" alt="Quizlet"></div>
                        <div class="tab-icon" data-icon="quizizz"><img src="https://cf.quizizz.com/img/favicon/favicon-32x32.png" alt="Quizizz"></div>
                        <div class="tab-icon" data-icon="edpuzzle"><img src="https://edpuzzle.imgix.net/favicons/favicon-32.png" alt="EdPuzzle"></div>
                        <div class="tab-icon" data-icon="kahoot"><img src="https://kahoot.com/favicon.ico" alt="Kahoot"></div>
                        <div class="tab-icon" data-icon="zoom"><img src="https://st1.zoom.us/zoom.ico" alt="Zoom"></div>
                        <div class="tab-icon" data-icon="clever"><img src="https://assets.clever.com/launchpad/c8c58be9ce/favicon.ico?1" alt="Clever"></div>
                        <div class="tab-icon" data-icon="schoology"><img src="https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico" alt="Schoology"></div>
                        <div class="tab-icon" data-icon="blank"><div class="blank-icon"></div></div>
                    </div>
                </div>
                
                <div class="settings-section">
                    <h3>emergency escape</h3>
                    <div class="escape-settings">
                        <div class="escape-slider">
                            <p>escape key clicks:</p>
                            <input type="range" min="1" max="3" value="3" id="escape-clicks">
                        </div>
                        <div class="escape-keys">
                            <p>current escape sequence:</p>
                            <div class="key-sequence">
                                <div class="key">ESC</div>
                                <div class="key">ESC</div>
                                <div class="key">ESC</div>
                            </div>
                        </div>
                        <p class="settings-info">Pressing the escape key multiple times will quickly redirect you to a safe website.</p>
                        <button class="settings-button">Save Changes</button>
                    </div>
                </div>
                
                <div class="settings-section">
                    <h3>anti-close protection (beta might not work)</h3>
                    <div class="toggle-setting">
                        <p>Enable anti-close protection:</p>
                        <label class="switch">
                            <input type="checkbox" id="anti-close-toggle">
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <p class="settings-info">When enabled, this will confirm before closing the tab to prevent accidental closure.</p>
                    <button class="settings-button">Save Changes</button>
                </div>
                
                <div class="settings-section">
                    <h3>open in about:blank</h3>
                    <button class="blank-button">Switch to about:blank</button>
                    <p class="settings-info">Opens the site in about:blank which may bypass some filters.</p>
                </div>
                
                <div class="settings-section">
                    <h3>theme changer</h3>
                    <div class="theme-options">
                        <div class="theme-option" data-theme="black"></div>
                        <div class="theme-option" data-theme="red"></div>
                        <div class="theme-option" data-theme="purple"></div>
                        <div class="theme-option" data-theme="blue"></div>
                        <div class="theme-option" data-theme="pink"></div>
                    </div>
                    <p class="settings-info">Choose a theme color for the interface. Changes will apply immediately.</p>
                </div>
            </div>
        </div>
        
        <!-- Exploit details sections -->
        <div class="exploit-details" id="goguardian-details">
            <div class="exploit-header">
                <button class="back-button"><i class="fas fa-arrow-left"></i> Back</button>
                <h2>GoGuardian Bookmarklets</h2>
            </div>
            <div class="bookmarklet-list">
                <div class="bookmarklet-item">
                    <h3>Disable Monitoring</h3>
                    <p>Drag this to your bookmarks bar:</p>
                    <div class="bookmarklet-code">
                        javascript:(function(){alert('GoGuardian bookmarklet placeholder');})();
                    </div>
                    <button class="copy-button">Copy</button>
                </div>
                <div class="bookmarklet-item">
                    <h3>Unblock Page</h3>
                    <p>Drag this to your bookmarks bar:</p>
                    <div class="bookmarklet-code">
                        javascript:(function(){alert('GoGuardian unblock placeholder');})();
                    </div>
                    <button class="copy-button">Copy</button>
                </div>
            </div>
        </div>
        
        <div class="exploit-details" id="securly-details">
            <div class="exploit-header">
                <button class="back-button"><i class="fas fa-arrow-left"></i> Back</button>
                <h2>Securly Bookmarklets</h2>
            </div>
            <div class="bookmarklet-list">
                <div class="bookmarklet-item">
                    <h3>Bypass Filter</h3>
                    <p>Drag this to your bookmarks bar:</p>
                    <div class="bookmarklet-code">
                        javascript:(function(){alert('Securly bookmarklet placeholder');})();
                    </div>
                    <button class="copy-button">Copy</button>
                </div>
                <div class="bookmarklet-item">
                    <h3>Disable Tracking</h3>
                    <p>Drag this to your bookmarks bar:</p>
                    <div class="bookmarklet-code">
                        javascript:(function(){alert('Securly tracking placeholder');})();
                    </div>
                    <button class="copy-button">Copy</button>
                </div>
            </div>
        </div>
        
        <div class="exploit-details" id="linewize-details">
            <div class="exploit-header">
                <button class="back-button"><i class="fas fa-arrow-left"></i> Back</button>
                <h2>Linewize Bookmarklets</h2>
            </div>
            <div class="bookmarklet-list">
                <div class="bookmarklet-item">
                    <h3>Disable Monitoring</h3>
                    <p>Drag this to your bookmarks bar:</p>
                    <div class="bookmarklet-code">
                        javascript:(function(){alert('Linewize bookmarklet placeholder');})();
                    </div>
                    <button class="copy-button">Copy</button>
                </div>
                <div class="bookmarklet-item">
                    <h3>Access Blocked Sites</h3>
                    <p>Drag this to your bookmarks bar:</p>
                    <div class="bookmarklet-code">
                        javascript:(function(){alert('Linewize access placeholder');})();
                    </div>
                    <button class="copy-button">Copy</button>
                </div>
            </div>
        </div>
        
        <div class="search-container">
            <input type="text" id="search" placeholder="search...">
        </div>
        
        <div class="cloaked-notification">
            <p>Tab cloaked as "home"</p>
        </div>
        
        <div class="support">
            <p>support</p>
        </div>
    </div>
    
    <!-- Proxy frame container -->
    <div class="proxy-frame-container">
        <div class="proxy-frame-header">
            <button class="proxy-frame-back"><i class="fas fa-arrow-left"></i></button>
            <div class="proxy-frame-url">about:blank</div>
            <button class="proxy-frame-close"><i class="fas fa-times"></i></button>
        </div>
        <iframe class="proxy-frame" src="about:blank"></iframe>
    </div>
    
    <script src="background.js"></script>
    <script src="script.js"></script>
</body>
</html>
